"use strict";
var express = require("express");
var socketIo = require("socket.io");
var http = require("http");
var path = require("path");
var Socket = require("./socket");
var routes = require("./routes");
var Server = (function () {
    function Server() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.configure();
        this.socket();
        this.listen();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.configure = function () {
        this.port = process.env.PORT || 3000;
        this.root = path.join(path.resolve(__dirname, '../build/dist'));
        this.router = new routes.Routes();
        this.app.use(express.static(this.root));
        this.app.use('/data', this.router.router);
        this.app.get('/', function (req, res) {
            res.sendFile('icon.ico');
            res.end();
        });
    };
    Server.prototype.socket = function () {
        this.io = socketIo(this.server);
        var socket = new Socket.Socket(this.io);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port);
        this.server.on("error", function (error) {
            console.log("ERROR", error);
        });
        this.server.on("listening", function () {
            console.log("listening on port : %s", _this.port);
        });
    };
    return Server;
}());
var serve = Server.bootstrap();
