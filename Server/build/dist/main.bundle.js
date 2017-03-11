webpackJsonp([0,3],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SocketService = class SocketService {
    constructor() {
        this.host = window.location.protocol + "//" + window.location.hostname + ":" + 3000;
        console.log("test");
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](this.host);
        this.socket.on("connect", () => this.connect());
        this.socket.on("disconnect", () => this.disconnect());
        this.socket.on("reconect", () => this.reconnect());
        this.socket.on("error", (error) => {
            console.log(`ERROR: "${error}"`);
        });
    }
    connect() {
        console.log("connected");
        this.join();
    }
    disconnect() {
        console.log("disconnect");
    }
    reconnect() {
        console.log("reconnect");
        this.join();
    }
    join() {
        console.log("join");
        this.socket.emit("join");
    }
};
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
    __metadata('design:paramtypes', [])
], SocketService);
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/socket.service.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ConfigurationComponent = class ConfigurationComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.colors = ["blue", "default", "gray", "green", "red", "sky-blue", "yellow"];
        this.sizes = ["mini", "small", "normal", "large"];
        this.onText = "On";
        this.offText = "Off";
        this.onColor = "green";
        this.offColor = "red";
        this.size = "normal";
    }
    ngOnInit() {
    }
    onManualChange(event) {
        this.dataService.mode = event;
        let str = (event) ? "auto" : "manual";
        let config = {
            'configid': 1,
            'mode': str,
            'configList': this.dataService.config.configList
        };
        this.dataService.emit("UPDATE_CONFIG", config);
    }
    onAutoSoil(event) {
        this.dataService.config.autoSoil = event;
    }
    onAutoVpd(event) {
        this.dataService.config.autoVpd = event;
    }
    Update() {
        let vpdfrom = this.dataService.config.autoVpdFrom;
        let vpdto = this.dataService.config.autoVpdTo;
        let soilfrom = this.dataService.config.autoSoilFrom;
        let soilto = this.dataService.config.autoSoilTo;
        if (vpdfrom > vpdto) {
            console.log("vpdfrom > vpdto");
            this.errorAutoUpdate = "vpdfrom > vpdto ";
        }
        else if (soilfrom > soilto) {
            console.log("soilfrom > soilto");
            this.errorAutoUpdate = "soilfrom > soilto";
        }
        let str = (this.dataService.config.mode) ? "auto" : "manual";
        let configData = {
            'configid': 1,
            'mode': str,
            'vpd': {
                'isuse': this.dataService.config.autoVpd,
                'from': this.dataService.config.autoVpdFrom,
                'to': this.dataService.config.autoVpdTo
            },
            'soil': {
                'isuse': this.dataService.config.autoSoil,
                'from': this.dataService.config.autoSoilFrom,
                'to': this.dataService.config.autoSoilTo
            }
        };
        this.dataService.emit("UPDATE_CONFIG", configData);
    }
};
ConfigurationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-configuration',
        template: __webpack_require__(713),
        styles: [__webpack_require__(706)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
], ConfigurationComponent);
var _a;
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/configuration.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ConnectionComponent = class ConnectionComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
    }
};
ConnectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-connection',
        template: __webpack_require__(714),
        styles: [__webpack_require__(707)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
], ConnectionComponent);
var _a;
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/connection.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SummaryComponent = class SummaryComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
    }
};
SummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-summary',
        template: __webpack_require__(716),
        styles: [__webpack_require__(709)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
], SummaryComponent);
var _a;
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/summary.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 409;


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(530);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/main.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_summary_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection_connection_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration_configuration_component__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const routes = [
    { path: '', redirectTo: '/summary', pathMatch: 'full' },
    { path: 'summary', component: __WEBPACK_IMPORTED_MODULE_2__summary_summary_component__["a" /* SummaryComponent */] },
    { path: 'connection', component: __WEBPACK_IMPORTED_MODULE_3__connection_connection_component__["a" /* ConnectionComponent */] },
    { path: 'config', component: __WEBPACK_IMPORTED_MODULE_4__configuration_configuration_component__["a" /* ConfigurationComponent */] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    }), 
    __metadata('design:paramtypes', [])
], AppRoutingModule);
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/app-routing.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_socket_service__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppComponent = class AppComponent {
    constructor(sokcet) {
        this.sokcet = sokcet;
        this.title = 'app works!';
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(711),
        styles: [__webpack_require__(704)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object])
], AppComponent);
var _a;
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/app.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_socket_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_module__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__summary_summary_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__connection_connection_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__configuration_configuration_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_angular2_ui_switch_src__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__timer_timer_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auto_auto_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__manual_manual_component__ = __webpack_require__(532);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__summary_summary_component__["a" /* SummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_9__connection_connection_component__["a" /* ConnectionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__configuration_configuration_component__["a" /* ConfigurationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__timer_timer_component__["a" /* TimerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__auto_auto_component__["a" /* AutoComponent */],
            __WEBPACK_IMPORTED_MODULE_14__manual_manual_component__["a" /* ManualComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__node_modules_angular2_ui_switch_src__["a" /* UiSwitchModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_6__shared_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/app.module.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AutoComponent = class AutoComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.channelList = [true, false, false, false];
    }
    ngOnInit() {
    }
    clickChannel(ch) {
        this.channelList = [false, false, false, false];
        this.channelList[ch] = true;
    }
    onAutoSoil(event, index) {
        this.dataService.config.configList[index].soil.isuse = event;
    }
    onAutoVpd(event, index) {
        this.dataService.config.configList[index].vpd.isuse = event;
    }
    Update() {
        for (var i = 0; i < this.dataService.config.configList.length; i++) {
            var config = this.dataService.config.configList[i];
            let vpdfrom = config.vpd.from;
            let vpdto = config.vpd.to;
            let soilfrom = config.soil.from;
            let soilto = config.soil.to;
            if (vpdfrom > vpdto) {
                this.errorAutoUpdate = "vpdfrom > vpdto ";
                return;
            }
            else if (soilfrom > soilto) {
                this.errorAutoUpdate = "soilfrom > soilto";
                return;
            }
            else {
                this.errorAutoUpdate = null;
            }
        }
        let str = (this.dataService.config.mode) ? "auto" : "manual";
        let configData = {
            'configid': 1,
            'mode': str,
            'configList': this.dataService.config.configList
        };
        this.dataService.emit("UPDATE_CONFIG", configData);
    }
    upSoilFrom(i) {
        console.log('up soil from ' + i);
        this.dataService.configList[i].soil.from++;
    }
    downSoilFrom(i) {
        console.log('up soil from ' + i);
        this.dataService.configList[i].soil.from--;
    }
    upSoilTo(i) {
        console.log('up soil from ' + i);
        this.dataService.configList[i].soil.to++;
    }
    downSoilTo(i) {
        console.log('up soil from ' + i);
        this.dataService.configList[i].soil.to--;
    }
    upVpdFrom(i) {
        console.log('up soil from ' + i);
        this.dataService.configList[i].vpd.from += 0.1;
    }
    downVpdFrom(i) {
        console.log('up soil from ' + i);
        this.dataService.configList[i].vpd.from -= 0.1;
    }
    upVpdTo(i) {
        console.log('up soil from ' + i);
        this.dataService.configList[i].vpd.to += 0.1;
    }
    downVpdTo(i) {
        console.log('up soil from ' + i);
        this.dataService.configList[i].vpd.to -= 0.1;
    }
};
AutoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-auto',
        template: __webpack_require__(712),
        styles: [__webpack_require__(705)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
], AutoComponent);
var _a;
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/auto.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_service__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ManualComponent = class ManualComponent {
    constructor(socketService, dataService) {
        this.socketService = socketService;
        this.dataService = dataService;
        this.chlist = [true, false, false, false];
    }
    ngOnInit() { }
    CommandGpio(channel, cmd) {
        let data = { 'channel': channel, 'cmd': cmd };
        this.socketService.socket.emit("REQ_CH", data);
    }
    clickChannel(ch) {
        console.log("click channel : " + ch);
        this.chlist = [false, false, false, false];
        this.chlist[ch] = true;
    }
    pushSwitch(event, ch) {
        console.log('push switch : ' + ch) + " " + event;
        this.dataService.stageList[ch].stage = event;
        let data = {
            'chid': 1,
            'stageList': this.dataService.stageList
        };
        this.dataService.emit('UPDATE_CHANNEL', data);
    }
};
ManualComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-manual',
        template: __webpack_require__(715),
        styles: [__webpack_require__(708)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === 'function' && _b) || Object])
], ManualComponent);
var _a, _b;
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/manual.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TimerComponent = class TimerComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.timerList = [];
        this.hr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.min = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        this.toHour = "Hour";
        this.toMin = "Min";
        this.fromHour = "Hour";
        this.fromMin = "Min";
    }
    ngOnInit() {
    }
    AddTimer() {
        console.log("AddTimer");
        if (!this.isInt(this.fromHour) || !this.isInt(this.fromMin) || !this.isInt(this.toHour) || !this.isInt(this.toMin)) {
            console.log("ERROR : INVALID FORMAT");
            this.errorTimer = "Invalid timer";
            return;
        }
        if (!this.checkTime(this.fromHour, this.fromMin, this.toHour, this.toMin)) {
            console.log("Start time should be less than End Time");
            this.errorTimer = "STARTTIME should be less than ENDTIME";
            return;
        }
        let fromTime = this.fromHour + ":" + this.fromMin;
        let toTime = this.toHour + ":" + this.toMin;
        var timer = {
            "from": fromTime,
            "to": toTime
        };
        //console.log(timer);
        //this.timerList.push(timer);
        this.dataService.timerList.push(timer);
        console.log(this.dataService.timerList);
        let Timer = {
            'timerid': 1,
            'timer': this.dataService.timerList
        };
        this.dataService.emit('UPDATE_TIMER', Timer);
        this.errorTimer = null;
    }
    Delete(index) {
        this.dataService.timerList.splice(index, 1);
        let Timer = {
            'timerid': 1,
            'timer': this.dataService.timerList
        };
        this.dataService.emit('UPDATE_TIMER', Timer);
        this.errorTimer = null;
    }
    ClearTimer() {
        console.log("ClearTimer");
    }
    FromHour(hour) {
        if (!this.isInt(hour))
            return;
        console.log("from" + hour);
        if (hour < 10)
            hour = "0" + hour;
        this.fromHour = hour;
    }
    FromMin(min) {
        if (!this.isInt(min))
            return;
        console.log("from" + min);
        if (min < 10)
            min = "0" + min;
        this.fromMin = min;
    }
    ToHour(hour) {
        if (!this.isInt(hour))
            return;
        console.log("to" + hour);
        if (hour < 10)
            hour = "0" + hour;
        this.toHour = hour;
    }
    ToMin(min) {
        if (!this.isInt(min))
            return;
        console.log("to" + min);
        if (min < 10)
            min = "0" + min;
        this.toMin = min;
    }
    isInt(value) {
        var x = parseFloat(value);
        return !isNaN(value) && (x | 0) === x;
    }
    checkTime(fh, fm, th, tm) {
        let ifh = parseInt(fh);
        let ifm = parseInt(fm);
        let ith = parseInt(th);
        let itm = parseInt(tm);
        if (ifh > ith)
            return false;
        else if (ifh == ith) {
            if (ifm > itm)
                return false;
            else
                return true;
        }
        else {
            return true;
        }
    }
};
TimerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-timer',
        template: __webpack_require__(717),
        styles: [__webpack_require__(710)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === 'function' && _a) || Object])
], TimerComponent);
var _a;
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/timer.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/environment.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/polyfills.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


class sensorModel {
    constructor() {
        this.temperature = 0;
        this.humidity = 0;
        this.light = 0;
        this.soil = 0;
        this.vpd = 0;
    }
}
class Config {
    constructor() {
        this.timerList = [];
    }
}
let DataService = class DataService {
    constructor(socket) {
        this.socket = socket;
        this.data = [];
        this.socket.socket.on("REP_TIMER", (data) => {
            console.log(data);
            let timer = data.timer;
            this.timerList = timer;
        });
        this.socket.socket.on("REP_CHANNEL", (data) => {
            this.stageList = data.stageList;
            console.log(data);
        });
        this.socket.socket.on("REP_CONFIG", (data) => {
            console.log(data);
            // this.config.autoVpdFrom = data.vpd.from;
            // this.config.autoVpdTo = data.vpd.to;
            // this.config.autoSoilFrom = data.soil.from;
            // this.config.autoSoilTo = data.soil.to;
            // this.config.mode = data.mode;
            // if(data.mode == "auto"){
            // 	this.config.mode=true;
            // }
            // else{
            // 	this.config.mode=false;
            // }
            // this.config.autoSoil = data.soil.isuse;
            // this.config.autoVpd = data.vpd.isuse;
            // console.log(this.config);
            this.config = data;
            this.mode = (data.mode == 'auto') ? true : false;
            this.configList = data.configList;
            console.log(this.configList);
        });
        this.socket.socket.on("REP_DATA", (data) => {
            console.log(data.temperature);
            this.sumData = new sensorModel();
            if (data != undefined) {
                this.data[data.station] = data;
                for (let d of this.data) {
                    this.sumData.temperature += d.temperature;
                    this.sumData.humidity += d.humidity;
                    this.sumData.light += d.light;
                    this.sumData.soil += d.soil;
                    this.sumData.vpd += d.vpd;
                    console.log(this.sumData);
                }
                let num = this.data.length;
                this.sumData.temperature /= num;
                this.sumData.humidity /= num;
                this.sumData.light /= num;
                this.sumData.soil /= num;
                this.sumData.vpd /= num;
                this.sumData.vpd /= 1000;
                this.temperature = this.sumData.temperature.toFixed(2);
                this.humidity = this.sumData.humidity.toFixed(2);
                this.light = this.sumData.light.toFixed(2);
                this.soil = this.sumData.soil.toFixed(2);
                this.vpd = this.sumData.vpd.toFixed(2);
            }
        });
    }
    emit(event, data) {
        this.socket.socket.emit(event, data);
    }
};
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === 'function' && _a) || Object])
], DataService);
var _a;
//# sourceMappingURL=/home/alfarie/project/SmartFarm/smartfarm/src/data.service.js.map

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\"></div>\n    <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n        <h1>SmartFarm</h1>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" style=\"margin-top: 20px;\">\n    \t<a routerLink=\"/summary\"> \n    \t\t<button type=\"button\" class=\"btn btn-round btn-default\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>Summary </button>\n    \t</a>\n    \t<a routerLink=\"/connection\"> \n        \t<button type=\"button\" class=\"btn btn-round btn-primary\"><i class=\"fa fa-plug\" aria-hidden=\"true\"></i> connect</button>\n        </a>\n        <a routerLink=\"/config\">\n        \t<button type=\"button\" class=\"btn btn-round btn-success\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> Config </button>\n        </a>\n    </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"dataService.mode\">\n    <div class=\"col-xs-0 col-sm-0 col-md-2 col-lg-2\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n        <div class=\"form-panel\">\n            <h4 class=\"mb\"><i class=\"fa fa-magic\"></i> Auto</h4>\n            <div class=\"row mt\">\n                <div class=\"row\">\n                    <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\" style=\"margin-left: 50px;\">\n                        <div class=\"btn-group btn-group-justified\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-theme03\"  (click)=\"clickChannel(0)\">CH 1</button>\n                            </div>\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-theme03\" (click)=\"clickChannel(1)\">CH 2</button>\n                            </div>\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-theme03\" (click)=\"clickChannel(2)\">CH 3</button>\n                            </div>\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-theme03\"  (click)=\"clickChannel(3)\">CH 4</button>\n                            </div>\n                        </div>\n\n                        <div *ngFor=\"let config of dataService.configList; let i = index\" >\n                        \t<div *ngIf=\"channelList[i]\">\n                        \t\t\n                        \t\n\t                        \t<h3>Channel {{i+1}}</h3>\n\t                            <h4 style=\"margin-top: 30px;\">Auto Soil</h4>\n\t                            <ui-switch (change)=\"onAutoSoil($event,i)\" [checked]=\"config.soil.isuse\"></ui-switch>\n\t                            <form class=\"form-inline\" role=\"form\" *ngIf=\"config.soil.isuse\">\n\t                                <div class=\"form-group\">\n\t                                    <label class=\"sr-only\" for=\"exampleInputEmail2\">Soil From</label>\n\t                                    <input [(ngModel)]=\"config.soil.from\"  name=\"autosoilfrom\" type=\"number\" class=\"form-control\" placeholder=\"Soil(%) From\" disabled=\"disabled\">\n                                        <button type=\"button\" class=\"btn btn-default\" (click)=\"upSoilFrom(i)\">+1%</button>\n                                        <button type=\"button\" class=\"btn btn-default\" (click)=\"downSoilFrom(i)\">-1%</button>\n\t                                </div>\n\t                                <h5>To</h5>\n\t                                <div class=\"form-group\">\n\t                                    <label class=\"sr-only\" for=\"exampleInputPassword2\">Soil To</label>\n\t                                    <input  [(ngModel)]=\"config.soil.to\" name=\"autosoilto\" type=\"number\" class=\"form-control\" placeholder=\"Soil(%) To\" disabled=\"disabled\">\n                                        <button type=\"button\" class=\"btn btn-default\" (click)=\"upSoilTo(i)\">+1%</button>\n                                        <button type=\"button\" class=\"btn btn-default\" (click)=\"downSoilTo(i)\">-1%</button>\n\n\t                                </div>\n\t                            </form>\n\n\t                            <h4 style=\"margin-top: 50px;\">Auto Vpd</h4>\n\t                            <ui-switch (change)=\"onAutoVpd($event,i)\" [checked]=\"config.vpd.isuse\"></ui-switch>\n\t                            <form class=\"form-inline\" role=\"form\" *ngIf=\"config.vpd.isuse\">\n\t                                <div class=\"form-group\">\n\t                                    <label class=\"sr-only\" for=\"exampleInputEmail2\">VPD From</label>\n\t                                    <input  [(ngModel)]=\"config.vpd.from\" name=\"autovpdfrom\" type=\"number\" class=\"form-control\" placeholder=\"VPD(kPa ex. 2.2kPa) From\" disabled=\"disabled\">\n                                        <button type=\"button\" class=\"btn btn-default\" (click)=\"upVpdFrom(i)\">+0.1kPa</button>\n                                        <button type=\"button\" class=\"btn btn-default\" (click)=\"downVpdFrom(i)\">-0.1kPa</button>\n\t                                </div>\n\t                                <h5>To</h5>\n\t                                <div class=\"form-group\">\n\t                                    <label class=\"sr-only\" for=\"exampleInputPassword2\">VPD To</label>\n\t                                    <input [(ngModel)]=\"config.vpd.to\" name=\"autovpdto\" type=\"number\" class=\"form-control\" placeholder=\"VPD(kPa ex.3.0kPa) To\" disabled=\"disabled\">\n                                        <button type=\"button\" class=\"btn btn-default\" (click)=\"upVpdTo(i)\">+0.1kPa</button>\n                                        <button type=\"button\" class=\"btn btn-default\" (click)=\"downVpdTo(i)\">-0.1kPa</button>\n\t                                </div>\n\t                            </form>\n\t                            </div>\n                        </div>\n                        <hr>\n                        <div class=\"alert alert-danger\" *ngIf=\"errorAutoUpdate\"><b>Error</b> {{errorAutoUpdate}}</div>\n                        <button type=\"button\" class=\"btn btn-theme\" (click)=\"Update()\">Update</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-0 col-sm-0 col-md-2 col-lg-2\">\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n            <div class=\"form-panel\">\n                <h4 class=\"mb\"><i class=\"fa fa-angle-right\"></i> Mode</h4>\n                <div class=\"row mt\">\n                    <div class=\"row\" style=\"margin-left: 50px;\">\n                        <table>\n                            <tr>\n                                <td>\n                                    <h4>Auto</h4></td>\n                                <td>\n                                    <ui-switch (change)=\"onManualChange($event)\" [checked]=\"dataService.mode\"></ui-switch>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-auto></app-auto>\n    <app-manual></app-manual>\n\t<app-timer></app-timer>\n\n    <!-- /row -->\n</div>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 30px;\">\n    <div class=\"row\" *ngIf=\"dataService.data\">\n    \n        <div class=\"col-lg-4 col-md-4 col-sm-4 mb\" *ngFor=\"let node of dataService.data\">\n            <div class=\"weather-2 pn\">\n                <div class=\"weather-2-header\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6 col-xs-6\">\n                            <p>Station : {{node.station+1}}</p>\n                        </div>\n                        <div class=\"col-sm-6 col-xs-6 goright\">\n                            <p class=\"small\">{{node.datetime}}</p>\n                        </div>\n                    </div>\n                </div>\n                <!-- /weather-2 header -->\n                <div class=\"row\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 centered\">\n                        <img  src=\"assets/img/controller.png\" class=\"img-circle\" width=\"120\" style=\"margin-top: 30px;\">\n                        <h4 class=\"centered\"><b>Station</b> : {{node.station+1}}</h4>\n                    </div>\n                    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 goright\" style=\"display: inline; margin-top: 30px;\">\n                       <table>\n                           <tr>\n                               <td>\n                                   <h4><i class=\"fa fa-thermometer-empty\"></i></h4>\n                               </td>\n                               <td>\n                                   <h4 style=\"margin-left: 20px;\"><b>{{node.temperature}} ºC</b></h4>\n                               </td>\n                           </tr>\n                           <tr>\n                               <td>\n                                   <h4><i class=\"fa fa-tint\"></i></h4>\n                               </td>\n                               <td>\n                                   <h4 style=\"margin-left: 20px;\"><b>{{node.humidity}} %</b></h4>\n                               </td>\n                           </tr>\n                           <tr>\n                               <td>\n                                   <h4><i class=\"fa fa-lightbulb-o\"></i></h4>\n                               </td>\n                               <td>\n                                   <h4 style=\"margin-left: 20px;\"><b>{{node.light}} Lux</b></h4>\n                               </td>\n                           </tr>\n                           <tr>\n                               <td>\n                                   <h4><i class=\"fa fa-shower\"></i></h4>\n                               </td>\n                               <td>\n                                   <h4 style=\"margin-left: 20px;\"><b>{{node.soil}} %</b></h4>\n                               </td>\n                           </tr>\n\n                       </table>\n                    </div>\n                </div>\n\n                <!-- <div class=\"row data\">\n                    <div class=\"col-sm-6 col-xs-6 goleft\">\n                        <h4><b>16 ºC</b></h4>\n                        <h6>21º max</h6>\n                        <h6>8º min</h6>\n                    </div>\n                    <div class=\"col-sm-6 col-xs-6 goright\">\n                        <h5><i class=\"fa fa-thermometer-empty\"></i></h5>\n                        <h6><b>Sunny</b></h6>\n                        <h5>7:15 am</h5>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        \n    </div>\n    <div class=\"row\" *ngIf=\"!dataService.data\" >\n        <h2> No Connection</h2>\n    </div>\n</div>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"!dataService.mode\">\n    <div class=\"col-xs-0 col-sm-0 col-md-2 col-lg-2\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n        <div class=\"form-panel\">\n            <h4 class=\"mb\"><i class=\"fa fa-user-circle\"></i> Manual</h4>\n            <div class=\"row mt\">\n                <div class=\"row\">\n                    <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10\" style=\"margin-left: 50px;\">\n                        <!-- Standard button -->\n                        <div class=\"btn-group btn-group-justified\">\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-theme03\" (click)=\"clickChannel(0)\">CH 1</button>\n                            </div>\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-theme03\" (click)=\"clickChannel(1)\">CH 2</button>\n                            </div>\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-theme03\" (click)=\"clickChannel(2)\">CH 3</button>\n                            </div>\n                            <div class=\"btn-group\">\n                                <button type=\"button\" class=\"btn btn-theme03\" (click)=\"clickChannel(3)\">CH 4</button>\n                            </div>\n                        </div>\n                        <!-- /showback -->\n                    </div>\n                </div>\n                <div class=\"row\" *ngIf=\"dataService.stageList\">\n                    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\" style=\"margin-left: 50px;\">\n                        <div *ngFor=\"let ch of chlist; let i = index\" >\n                            <div *ngIf=\"chlist[i]\">\n                                <h3>Channel {{i+1}}</h3>\n                                <ui-switch (change)=\"pushSwitch($event,i)\" [checked]=\"dataService.stageList[i].stage\"></ui-switch>\n                            </div>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 40px;\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\"></div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #e87777;\">\n                    <i class=\"fa fa-thermometer-empty\"></i>\n                    <h1 *ngIf=\"dataService.sumData\">{{dataService.temperature}}º C</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">Temperature Sensor</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> 13%</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-flag\"></i> 15 MPH</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #00c5de;\">\n                    <i class=\"fa fa-tint\"></i>\n                    <h1 *ngIf=\"dataService.sumData\">{{dataService.humidity}} %</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">Humidity Sensor</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> 13%</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-flag\"></i> +3.2%</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\"></div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #ae67f9;\">\n                    <i class=\"fa fa-thermometer-empty\"></i>\n                    <h1 *ngIf=\"dataService.sumData\">{{dataService.vpd}} kPa</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">VPD</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> 13%</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-flag\"></i> 15 MPH</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #81d45f;\">\n                    <i class=\"fa fa-shower\"></i>\n                    <h1 *ngIf=\"dataService.sumData\">{{dataService.soil}} %</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">Soil Moisture Sensor</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> 13%</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-flag\"></i> +3.2%</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\n\n            <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\"></div>\n            \n\n            <div class=\"col-lg-4 col-md-4 col-sm-4 mb\">\n                <div class=\"weather-3 pn centered\" style=\"background-color: #f9d367;\">\n                    <i class=\"fa fa-lightbulb-o\"></i>\n                    <h1 *ngIf=\"dataService.sumData\">{{dataService.light}} Lux</h1>\n                    <div class=\"info\">\n                        <div class=\"row\">\n                            <h3 class=\"centered\">Light Sensor</h3>\n                            <div class=\"col-sm-6 col-xs-6 pull-left\">\n                                <p class=\"goleft\"><i class=\"fa fa-tint\"></i> 13%</p>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 pull-right\">\n                                <p class=\"goright\"><i class=\"fa fa-flag\"></i> 15 MPH</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt\">\n    <div class=\"col-xs-0 col-sm-0 col-md-2 col-lg-2\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n        <section class=\"task-panel tasks-widget\">\n            <div class=\"panel-heading\">\n                <div class=\"pull-left\">\n                    <h4><i class=\"fa fa-clock-o\"></i> Timer</h4></div>\n                <br>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"task-content\">\n                    <ul class=\"task-list\">\n                        <li *ngFor=\"let timer of dataService.timerList; let i =index;\">\n                            <div class=\"task-title\">\n                                <h4><span class=\"task-title-sp\">{{timer.from}} - {{timer.to}}</span>\n                                    <!-- <span class=\"badge bg-theme\"></span> -->\n                                    <div class=\"pull-right hidden-phone\">\n                                        <button class=\"btn btn-danger btn-xs\" (click)=\"Delete(i)\"><i class=\"fa fa-trash-o \"></i></button>\n                                    </div></h4>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"row\" *ngIf=\"errorTimer\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 centered\">\n                        <div class=\"alert alert-danger\"><b>Error</b> {{errorTimer}}</div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"row\" style=\"margin-left: 20px;\">\n\n                        <label>From</label>\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n                                {{fromHour}}\n                                <span class=\"caret\"></span>\n                            </button>\n                            <ul class=\"dropdown-menu\">\n                                <li *ngFor=\"let hour of hr\" (click)=\"FromHour(hour)\"><a>{{hour}}</a></li>\n                            </ul>\n                        </div>\n                        :\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n                                {{fromMin}}\n                                <span class=\"caret\"></span>\n                            </button>\n                            <ul class=\"dropdown-menu\">\n                                <li *ngFor=\"let m of min\" (click)=\"FromMin(m)\"><a>{{m}}</a></li>\n                            </ul>\n                        </div>\n\n                        <label style=\"margin-left: 10px;\">To</label>\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n                                {{toHour}}\n                                <span class=\"caret\"></span>\n                            </button>\n                            <ul class=\"dropdown-menu\">\n                                <li *ngFor=\"let hour of hr\" (click)=\"ToHour(hour)\"><a>{{hour}}</a></li>\n                            </ul>\n                        </div>\n                        :\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n                                {{toMin}}\n                                <span class=\"caret\"></span>\n                            </button>\n                            <ul class=\"dropdown-menu\">\n                                <li *ngFor=\"let m of min\" (click)=\"ToMin(m)\"><a>{{m}}</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"add-task-row\" style=\"margin-top: 10px;\">\n                    <a class=\"btn btn-success btn-sm pull-left\" (click)=\"AddTimer()\">Add Timer</a>\n                    <a class=\"btn btn-default btn-sm pull-right\" (click)=\"ClearTimer()\">Clear All</a>\n                </div>\n\n            </div>\n        </section>\n    </div>\n    <!-- /col-md-12-->\n</div>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(410);


/***/ })

},[741]);
//# sourceMappingURL=main.bundle.map