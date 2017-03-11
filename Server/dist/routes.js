"use strict";
var express = require("express");
var db = require("./db");
var path = require("path");
var Routes = (function () {
    function Routes() {
        this.db = new db.Database();
        this.router = express.Router();
        this.root = path.join(path.resolve(__dirname, '../build/dist'));
        this.routeConfig();
    }
    Routes.prototype.routeConfig = function () {
        var _this = this;
        this.router.get('/getSensor', function (req, res) {
            console.log("REQUEST : /getSensor");
            var data = _this.db.getSensor(10, function (err, result) {
                if (err) {
                    console.log("ERROR DB :", err);
                    res.end();
                }
                else {
                    res.send(result);
                    res.end();
                }
            });
        });
        this.router.get('/home', function (req, res) {
            res.sendFile('icon.ico');
            res.end();
        });
    };
    return Routes;
}());
exports.Routes = Routes;
