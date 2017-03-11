"use strict";
var db = require("./db");
var Socket = (function () {
    function Socket(io) {
        this.io = io;
        this.db = new db.Database();
        this.listen();
    }
    Socket.prototype.listen = function () {
        var _this = this;
        this.io.on("connection", function (socket) {
            console.log("client connected");
            socket.on("join", function () {
                console.log("join");
                socket.join('0x01');
                _this.updateToWebServer();
            });
            socket.on("REP_DATA", function (data) {
                _this.db.setSensor(data);
                _this.io.to('0x01').emit("REP_DATA", data);
            });
            socket.on("REQ_CH", function (data) {
                console.log("REQ_CH" + data);
                _this.io.to('0x01').emit("REQ_CH", data);
            });
            socket.on("UPDATE_CONFIG", function (data) {
                _this.db.updateConfig(data);
                _this.updateToWebServer();
            });
            socket.on("UPDATE_TIMER", function (timer) {
                console.log("UPDATE_TIMER", timer);
                _this.db.updateTimer(timer);
                _this.updateToWebServer();
            });
            socket.on("UPDATE_CHANNEL", function (ch) {
                console.log("UPDATE_CHANNEL", ch);
                _this.db.updateChannel(ch);
                _this.updateToWebServer();
            });
            socket.on("disconnect", function () {
                console.log("disconnect");
            });
        });
    };
    Socket.prototype.updateToWebServer = function () {
        var _this = this;
        this.db.getConfig(function (err, res) {
            if (err) {
                console.log("ERROR", err);
                return;
            }
            // console.log(res);
            _this.io.to('0x01').emit("REP_CONFIG", res[0]);
        });
        this.db.getTimer(function (err, res) {
            if (err) {
                console.log("ERROR", err);
                return;
            }
            // console.log(res);
            _this.io.to('0x01').emit('REP_TIMER', res[0]);
        });
        this.db.getChannel(function (err, res) {
            if (err) {
                console.log("ERROR", err);
                return;
            }
            // console.log(res);
            _this.io.to('0x01').emit('REP_CHANNEL', res[0]);
        });
    };
    return Socket;
}());
exports.Socket = Socket;
