(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/api-configuration.ts":
/*!******************************************!*\
  !*** ./src/app/api/api-configuration.ts ***!
  \******************************************/
/*! exports provided: ApiConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiConfiguration", function() { return ApiConfiguration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* tslint:disable */

/**
 * Global configuration for Api services
 */
var ApiConfiguration = /** @class */ (function () {
    function ApiConfiguration() {
        this.rootUrl = '//localhost:8080';
    }
    ApiConfiguration = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], ApiConfiguration);
    return ApiConfiguration;
}());



/***/ }),

/***/ "./src/app/api/api.module.ts":
/*!***********************************!*\
  !*** ./src/app/api/api.module.ts ***!
  \***********************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var _services_player_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/player-resource.service */ "./src/app/api/services/player-resource.service.ts");
/* harmony import */ var _services_web_mvc_links_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/web-mvc-links-handler.service */ "./src/app/api/services/web-mvc-links-handler.service.ts");
/* harmony import */ var _services_basic_error_controller_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/basic-error-controller.service */ "./src/app/api/services/basic-error-controller.service.ts");
/* harmony import */ var _services_tournament_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/tournament-resource.service */ "./src/app/api/services/tournament-resource.service.ts");

/* tslint:disable */







/**
 * Provider for all Api services, plus ApiConfiguration
 */
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            declarations: [],
            providers: [
                _api_configuration__WEBPACK_IMPORTED_MODULE_3__["ApiConfiguration"],
                _services_player_resource_service__WEBPACK_IMPORTED_MODULE_4__["PlayerResourceService"],
                _services_web_mvc_links_handler_service__WEBPACK_IMPORTED_MODULE_5__["WebMvcLinksHandlerService"],
                _services_basic_error_controller_service__WEBPACK_IMPORTED_MODULE_6__["BasicErrorControllerService"],
                _services_tournament_resource_service__WEBPACK_IMPORTED_MODULE_7__["TournamentResourceService"]
            ],
        })
    ], ApiModule);
    return ApiModule;
}());



/***/ }),

/***/ "./src/app/api/base-service.ts":
/*!*************************************!*\
  !*** ./src/app/api/base-service.ts ***!
  \*************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* tslint:disable */

/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
var ParameterCodec = /** @class */ (function () {
    function ParameterCodec() {
    }
    ParameterCodec.prototype.encodeKey = function (key) {
        return encodeURIComponent(key);
    };
    ParameterCodec.prototype.encodeValue = function (value) {
        return encodeURIComponent(value);
    };
    ParameterCodec.prototype.decodeKey = function (key) {
        return decodeURIComponent(key);
    };
    ParameterCodec.prototype.decodeValue = function (value) {
        return decodeURIComponent(value);
    };
    return ParameterCodec;
}());
var PARAMETER_CODEC = new ParameterCodec();
/**
 * Base class for API services
 */
var BaseService = /** @class */ (function () {
    function BaseService(config, http) {
        this.config = config;
        this.http = http;
        this._rootUrl = '';
    }
    Object.defineProperty(BaseService.prototype, "rootUrl", {
        /**
         * Returns the root url for API operations. If not set directly in this
         * service, will fallback to ApiConfiguration.rootUrl.
         */
        get: function () {
            return this._rootUrl || this.config.rootUrl;
        },
        /**
         * Sets the root URL for API operations in this service.
         */
        set: function (rootUrl) {
            this._rootUrl = rootUrl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new `HttpParams` with the correct codec
     */
    BaseService.prototype.newParams = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            encoder: PARAMETER_CODEC
        });
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/api/services.ts":
/*!*********************************!*\
  !*** ./src/app/api/services.ts ***!
  \*********************************/
/*! exports provided: PlayerResourceService, WebMvcLinksHandlerService, BasicErrorControllerService, TournamentResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_player_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/player-resource.service */ "./src/app/api/services/player-resource.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerResourceService", function() { return _services_player_resource_service__WEBPACK_IMPORTED_MODULE_0__["PlayerResourceService"]; });

/* harmony import */ var _services_web_mvc_links_handler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/web-mvc-links-handler.service */ "./src/app/api/services/web-mvc-links-handler.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebMvcLinksHandlerService", function() { return _services_web_mvc_links_handler_service__WEBPACK_IMPORTED_MODULE_1__["WebMvcLinksHandlerService"]; });

/* harmony import */ var _services_basic_error_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/basic-error-controller.service */ "./src/app/api/services/basic-error-controller.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicErrorControllerService", function() { return _services_basic_error_controller_service__WEBPACK_IMPORTED_MODULE_2__["BasicErrorControllerService"]; });

/* harmony import */ var _services_tournament_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/tournament-resource.service */ "./src/app/api/services/tournament-resource.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TournamentResourceService", function() { return _services_tournament_resource_service__WEBPACK_IMPORTED_MODULE_3__["TournamentResourceService"]; });







/***/ }),

/***/ "./src/app/api/services/basic-error-controller.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/api/services/basic-error-controller.service.ts ***!
  \****************************************************************/
/*! exports provided: BasicErrorControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicErrorControllerService", function() { return BasicErrorControllerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





/**
 * Basic Error Controller
 */
var BasicErrorControllerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BasicErrorControllerService, _super);
    function BasicErrorControllerService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingGET = function () {
        return this.errorHtmlUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingHEADResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('HEAD', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingHEAD = function () {
        return this.errorHtmlUsingHEADResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPOSTResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPOST = function () {
        return this.errorHtmlUsingPOSTResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPUTResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPUT = function () {
        return this.errorHtmlUsingPUTResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingDELETEResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingDELETE = function () {
        return this.errorHtmlUsingDELETEResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingOPTIONSResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('OPTIONS', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingOPTIONS = function () {
        return this.errorHtmlUsingOPTIONSResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPATCHResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PATCH', this.rootUrl + "/error", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    BasicErrorControllerService.prototype.errorHtmlUsingPATCH = function () {
        return this.errorHtmlUsingPATCHResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    BasicErrorControllerService.errorHtmlUsingGETPath = '/error';
    BasicErrorControllerService.errorHtmlUsingHEADPath = '/error';
    BasicErrorControllerService.errorHtmlUsingPOSTPath = '/error';
    BasicErrorControllerService.errorHtmlUsingPUTPath = '/error';
    BasicErrorControllerService.errorHtmlUsingDELETEPath = '/error';
    BasicErrorControllerService.errorHtmlUsingOPTIONSPath = '/error';
    BasicErrorControllerService.errorHtmlUsingPATCHPath = '/error';
    BasicErrorControllerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BasicErrorControllerService);
    return BasicErrorControllerService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/api/services/player-resource.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/api/services/player-resource.service.ts ***!
  \*********************************************************/
/*! exports provided: PlayerResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerResourceService", function() { return PlayerResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





/**
 * Player Resource
 */
var PlayerResourceService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlayerResourceService, _super);
    function PlayerResourceService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return OK
     */
    PlayerResourceService.prototype.getAllPlayersUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/Players", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    PlayerResourceService.prototype.getAllPlayersUsingGET = function () {
        return this.getAllPlayersUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param Player Player
     * @return OK
     */
    PlayerResourceService.prototype.createPlayerUsingPOSTResponse = function (Player) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = Player;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/Players", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param Player Player
     * @return OK
     */
    PlayerResourceService.prototype.createPlayerUsingPOST = function (Player) {
        return this.createPlayerUsingPOSTResponse(Player).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param Player Player
     * @return OK
     */
    PlayerResourceService.prototype.updatePlayerUsingPUTResponse = function (Player) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = Player;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + "/Players", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param Player Player
     * @return OK
     */
    PlayerResourceService.prototype.updatePlayerUsingPUT = function (Player) {
        return this.updatePlayerUsingPUTResponse(Player).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param id id
     * @return OK
     */
    PlayerResourceService.prototype.retrievePlayerUsingGETResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/Players/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param id id
     * @return OK
     */
    PlayerResourceService.prototype.retrievePlayerUsingGET = function (id) {
        return this.retrievePlayerUsingGETResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param id id
     */
    PlayerResourceService.prototype.deletePlayerUsingDELETEResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/Players/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param id id
     */
    PlayerResourceService.prototype.deletePlayerUsingDELETE = function (id) {
        return this.deletePlayerUsingDELETEResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    PlayerResourceService.getAllPlayersUsingGETPath = '/Players';
    PlayerResourceService.createPlayerUsingPOSTPath = '/Players';
    PlayerResourceService.updatePlayerUsingPUTPath = '/Players';
    PlayerResourceService.retrievePlayerUsingGETPath = '/Players/{id}';
    PlayerResourceService.deletePlayerUsingDELETEPath = '/Players/{id}';
    PlayerResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlayerResourceService);
    return PlayerResourceService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/api/services/tournament-resource.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/api/services/tournament-resource.service.ts ***!
  \*************************************************************/
/*! exports provided: TournamentResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentResourceService", function() { return TournamentResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





/**
 * Tournament Resource
 */
var TournamentResourceService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TournamentResourceService, _super);
    function TournamentResourceService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return OK
     */
    TournamentResourceService.prototype.getAllTournamentsUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/tournaments", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    TournamentResourceService.prototype.getAllTournamentsUsingGET = function () {
        return this.getAllTournamentsUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param tournament tournament
     * @return OK
     */
    TournamentResourceService.prototype.createTournamentUsingPOSTResponse = function (tournament) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = tournament;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.rootUrl + "/tournaments", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param tournament tournament
     * @return OK
     */
    TournamentResourceService.prototype.createTournamentUsingPOST = function (tournament) {
        return this.createTournamentUsingPOSTResponse(tournament).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param tournament tournament
     * @return OK
     */
    TournamentResourceService.prototype.updateTournamentUsingPUTResponse = function (tournament) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        __body = tournament;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('PUT', this.rootUrl + "/tournaments", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param tournament tournament
     * @return OK
     */
    TournamentResourceService.prototype.updateTournamentUsingPUT = function (tournament) {
        return this.updateTournamentUsingPUTResponse(tournament).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param id id
     * @return OK
     */
    TournamentResourceService.prototype.retrieveTournamentUsingGETResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + ("/tournaments/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param id id
     * @return OK
     */
    TournamentResourceService.prototype.retrieveTournamentUsingGET = function (id) {
        return this.retrieveTournamentUsingGETResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    /**
     * @param id id
     */
    TournamentResourceService.prototype.deleteTournamentUsingDELETEResponse = function (id) {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('DELETE', this.rootUrl + ("/tournaments/" + id), __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @param id id
     */
    TournamentResourceService.prototype.deleteTournamentUsingDELETE = function (id) {
        return this.deleteTournamentUsingDELETEResponse(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    TournamentResourceService.getAllTournamentsUsingGETPath = '/tournaments';
    TournamentResourceService.createTournamentUsingPOSTPath = '/tournaments';
    TournamentResourceService.updateTournamentUsingPUTPath = '/tournaments';
    TournamentResourceService.retrieveTournamentUsingGETPath = '/tournaments/{id}';
    TournamentResourceService.deleteTournamentUsingDELETEPath = '/tournaments/{id}';
    TournamentResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TournamentResourceService);
    return TournamentResourceService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/api/services/web-mvc-links-handler.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/api/services/web-mvc-links-handler.service.ts ***!
  \***************************************************************/
/*! exports provided: WebMvcLinksHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebMvcLinksHandlerService", function() { return WebMvcLinksHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/app/api/base-service.ts");
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-configuration */ "./src/app/api/api-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/* tslint:disable */





/**
 * Web Mvc Links Handler
 */
var WebMvcLinksHandlerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WebMvcLinksHandlerService, _super);
    function WebMvcLinksHandlerService(config, http) {
        return _super.call(this, config, http) || this;
    }
    /**
     * @return OK
     */
    WebMvcLinksHandlerService.prototype.linksUsingGETResponse = function () {
        var __params = this.newParams();
        var __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var __body = null;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.rootUrl + "/actuator", __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_r) { return _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) {
            return _r;
        }));
    };
    /**
     * @return OK
     */
    WebMvcLinksHandlerService.prototype.linksUsingGET = function () {
        return this.linksUsingGETResponse().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_r) { return _r.body; }));
    };
    WebMvcLinksHandlerService.linksUsingGETPath = '/actuator';
    WebMvcLinksHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebMvcLinksHandlerService);
    return WebMvcLinksHandlerService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tournament_tournament_list_tournament_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tournament/tournament-list/tournament-list.component */ "./src/app/tournament/tournament-list/tournament-list.component.ts");
/* harmony import */ var _tournament_edit_tournament_edit_tournament_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tournament/edit-tournament/edit-tournament.component */ "./src/app/tournament/edit-tournament/edit-tournament.component.ts");
/* harmony import */ var _tournament_tournament_detail_tournament_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tournament/tournament-detail/tournament-detail.component */ "./src/app/tournament/tournament-detail/tournament-detail.component.ts");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player-list/player-list.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");








var routes = [
    { path: '', redirectTo: '/tournament/all', pathMatch: 'full' },
    { path: 'tournament/all', component: _tournament_tournament_list_tournament_list_component__WEBPACK_IMPORTED_MODULE_3__["TournamentListComponent"] },
    { path: 'tournament/edit/:id', component: _tournament_edit_tournament_edit_tournament_component__WEBPACK_IMPORTED_MODULE_4__["EditTournamentComponent"] },
    { path: 'tournament/details/:id', component: _tournament_tournament_detail_tournament_detail_component__WEBPACK_IMPORTED_MODULE_5__["TournamentDetailComponent"] },
    { path: 'player/all', component: _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_6__["PlayerListComponent"] },
    { path: 'player/details/:id', component: _player_player_component__WEBPACK_IMPORTED_MODULE_7__["PlayerComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Willkommen zum {{ title }}!\r\n  </h1>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Beachvolleyball Portal';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tournament_tournament_list_tournament_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tournament/tournament-list/tournament-list.component */ "./src/app/tournament/tournament-list/tournament-list.component.ts");
/* harmony import */ var _tournament_tournament_detail_tournament_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tournament/tournament-detail/tournament-detail.component */ "./src/app/tournament/tournament-detail/tournament-detail.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/de */ "./node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tournament_edit_tournament_edit_tournament_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tournament/edit-tournament/edit-tournament.component */ "./src/app/tournament/edit-tournament/edit-tournament.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player-list/player-list.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9___default.a);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _tournament_tournament_list_tournament_list_component__WEBPACK_IMPORTED_MODULE_5__["TournamentListComponent"],
                _tournament_tournament_detail_tournament_detail_component__WEBPACK_IMPORTED_MODULE_6__["TournamentDetailComponent"],
                _tournament_edit_tournament_edit_tournament_component__WEBPACK_IMPORTED_MODULE_11__["EditTournamentComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_16__["PlayerComponent"],
                _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_17__["PlayerListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'de' },
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["INIT_API_CONFIGURATION"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/player-list/player-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/player-list/player-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Spieler</h2>\n<a [routerLink]=\"['/player/edit/0']\">Spieler anlegen</a>\n<table mat-table [dataSource]=players class=\"mat-elevation-z8\">\n  {{ players | json}}\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> Id </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.id}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.name}}\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"gender\">\n    <th mat-header-cell *matHeaderCellDef> Geschlecht </th>\n    <td mat-cell *matCellDef=\"let user\"> {{loc[user.gender]}} </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay\" (click)=\"goDetails(row)\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/player-list/player-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/player-list/player-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci1saXN0L3BsYXllci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/player-list/player-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/player-list/player-list.component.ts ***!
  \******************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/services */ "./src/app/api/services.ts");
/* harmony import */ var _shared_localizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/localizer */ "./src/app/shared/localizer.ts");




var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(ps) {
        this.ps = ps;
        this.columnsToDisplay = [
            'id',
            'name',
            'gender',
        ];
        this.loc = _shared_localizer__WEBPACK_IMPORTED_MODULE_3__["loc"];
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ps.getAllPlayersUsingGET().subscribe(function (p) { return _this.players = p; });
    };
    PlayerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-list',
            template: __webpack_require__(/*! ./player-list.component.html */ "./src/app/player-list/player-list.component.html"),
            styles: [__webpack_require__(/*! ./player-list.component.scss */ "./src/app/player-list/player-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_services__WEBPACK_IMPORTED_MODULE_2__["PlayerResourceService"]])
    ], PlayerListComponent);
    return PlayerListComponent;
}());



/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  player works!\n</p>\n"

/***/ }),

/***/ "./src/app/player/player.component.scss":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/shared/localizer.ts":
/*!*************************************!*\
  !*** ./src/app/shared/localizer.ts ***!
  \*************************************/
/*! exports provided: loc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loc", function() { return loc; });
var _a;
var loc = (_a = {},
    _a['CATEGORY1'] = 'Kategory 1',
    _a['CATEGORY2'] = 'Kategory 2',
    _a['CATEGORY3'] = 'Kategory 2',
    _a['CATEGORY4'] = 'Kategory 2',
    _a['MEN'] = 'Männer',
    _a['WOMEN'] = 'Frauen',
    _a['MIXED'] = 'Mixed',
    _a['GROUP_SINGLEOUT'] = 'Gruppe/Single-Out',
    _a['DOUBLEOUT'] = 'Doppel-KO',
    _a['OTHER'] = 'Sonstiges',
    _a['MALE'] = 'männlich',
    _a['FEMALE'] = 'weiblich',
    _a);


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule, initApiConfiguration, INIT_API_CONFIGURATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initApiConfiguration", function() { return initApiConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_API_CONFIGURATION", function() { return INIT_API_CONFIGURATION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _api_api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api.module */ "./src/app/api/api.module.ts");
/* harmony import */ var _api_api_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api-configuration */ "./src/app/api/api-configuration.ts");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _api_api_module__WEBPACK_IMPORTED_MODULE_3__["ApiModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

function initApiConfiguration(config) {
    return function () {
        config.rootUrl = 'http://afiedler.ddns.net:8080';
    };
}
var INIT_API_CONFIGURATION = {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
    useFactory: initApiConfiguration,
    deps: [_api_api_configuration__WEBPACK_IMPORTED_MODULE_4__["ApiConfiguration"]],
    multi: true
};


/***/ }),

/***/ "./src/app/tournament/edit-tournament/edit-tournament.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/tournament/edit-tournament/edit-tournament.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"tournamentForm\" (ngSubmit)=\"submitForm()\">\n  <table>\n    <tr class=\"form-group\">\n      <td>\n        <label>Name:</label>\n      </td>\n      <td>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n      </td>\n    </tr>\n    <tr class=\"form-group\">\n      <td>\n        <label>Kategorie:</label>\n      </td>\n      <td>\n        <select formControlName=\"category\">\n          <option *ngFor=\"let category of categories\" [value]=\"category.value\">{{category.name}}</option>\n        </select>\n      </td>\n    </tr>\n    <tr class=\"form-group\">\n      <td>\n        <label>Typ:</label>\n      </td>\n      <td>\n        <select formControlName=\"gender\">\n          <option *ngFor=\"let gender of genders\" [value]=\"gender.value\">{{gender.name}}</option>\n        </select>\n      </td>\n    </tr>\n    <tr class=\"form-group\">\n      <td>\n        <label>Datum:</label>\n      </td>\n      <td>\n        <input [matDatepicker]=\"myDatepicker\" formControlName=\"date\" readonly>\n        <mat-datepicker-toggle [for]=\"myDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #myDatepicker></mat-datepicker>\n      </td>\n    </tr>\n    <tr class=\"form-group\">\n      <td>\n        <label>Spielmodus:</label>\n      </td>\n      <td>\n        <select formControlName=\"playMode\">\n          <option *ngFor=\"let playmode of playmodes\" [value]=\"playmode.value\">{{playmode.name}}</option>\n        </select>\n      </td>\n    </tr>\n    <tr class=\"form-group\">\n      <td>\n        <label>Beschreibung:</label>\n      </td>\n      <td>\n        <textarea class=\"form-control\" formControlName=\"description\"></textarea>\n      </td>\n    </tr>\n    <tr class=\"form-group\">\n      <td>\n        <label>Startgebühr:</label>\n      </td>\n      <td>\n        <input type=\"number\" class=\"form-control\" formControlName=\"entryFee\">\n      </td>\n    </tr>\n    <tr class=\"form-group\">\n      <td>\n        <label>Preisgeld:</label>\n      </td>\n      <td>\n        <input type=\"number\" class=\"form-control\" formControlName=\"priceMoney\">\n      </td>\n    </tr>\n    <tr class=\"form-group\">\n      <td>\n        <label>Kontakt:</label>\n      </td>\n      <td>\n        <input type=\"text\" class=\"form-control\" formControlName=\"contact\">\n      </td>\n    </tr>\n  </table>\n  <button class=\"btn btn-danger\" [disabled]=\"tournamentForm.invalid\" type=\"submit\">Abschicken</button>\n  <button (click)=\"goBack()\" type=\"cancel\">Abbrechen</button>\n</form>\n\n{{ tournamentForm.value | json }}\n"

/***/ }),

/***/ "./src/app/tournament/edit-tournament/edit-tournament.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/tournament/edit-tournament/edit-tournament.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvdXJuYW1lbnQvZWRpdC10b3VybmFtZW50L2VkaXQtdG91cm5hbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tournament/edit-tournament/edit-tournament.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tournament/edit-tournament/edit-tournament.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditTournamentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTournamentComponent", function() { return EditTournamentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ "./src/app/api/services.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var EditTournamentComponent = /** @class */ (function () {
    function EditTournamentComponent(ts, route, router, datePipe, location) {
        var _this = this;
        this.ts = ts;
        this.route = route;
        this.router = router;
        this.datePipe = datePipe;
        this.location = location;
        this.categories = [
            { name: 'Kategorie 1', value: 'CATEGORY1' },
            { name: 'Kategorie 2', value: 'CATEGORY2' },
            { name: 'Kategorie 3', value: 'CATEGORY3' },
            { name: 'Kategorie 4', value: 'CATEGORY4' },
        ];
        this.genders = [
            { name: 'Frauen', value: 'WOMEN' },
            { name: 'Männer', value: 'MEN' },
            { name: 'Mixed', value: 'MIXED' },
        ];
        this.playmodes = [
            { name: 'Gruppen/Single-Out', value: 'GROUP_SINGLEOUT' },
            { name: 'Doppel-KO', value: 'DOUBLEOUT' },
            { name: 'Sonstiges', value: 'OTHER' },
        ];
        this.goToDetails = function (t) {
            _this.router.navigate(['../../details/', t.id], { relativeTo: _this.route });
        };
    }
    EditTournamentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tournament$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (params) { return params.get('id'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (id) { return parseInt(id, 10) > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (id) { return _this.ts.retrieveTournamentUsingGET(parseInt(id, 10)); }));
        this.tournament$.subscribe(function (t) {
            _this.tournament = t;
            _this.fillForm(_this.tournament);
        });
        this.tournamentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
            ]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            playMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            entryFee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            priceMoney: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
            ]),
        });
    };
    EditTournamentComponent.prototype.submitForm = function () {
        var newTournament = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.tournamentForm.value, { date: this.tournamentForm.value.date });
        if (newTournament.id === null) {
            this.ts.createTournamentUsingPOST(newTournament).subscribe(this.goToDetails);
        }
        else {
            this.ts.updateTournamentUsingPUT(newTournament).subscribe(this.goToDetails);
        }
        this.tournamentForm.reset();
    };
    EditTournamentComponent.prototype.fillForm = function (tournament) {
        console.log(this.datePipe.transform(tournament.date, 'shortDate'));
        this.tournamentForm.setValue(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, tournament, { date: this.datePipe.transform(tournament.date, 'yyyy-MM-ddTHH:mm:ss.SSSZZZZZ') }));
        this.tournament = tournament;
        console.log(tournament);
    };
    EditTournamentComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditTournamentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-tournament',
            template: __webpack_require__(/*! ./edit-tournament.component.html */ "./src/app/tournament/edit-tournament/edit-tournament.component.html"),
            styles: [__webpack_require__(/*! ./edit-tournament.component.scss */ "./src/app/tournament/edit-tournament/edit-tournament.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["TournamentResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], EditTournamentComponent);
    return EditTournamentComponent;
}());



/***/ }),

/***/ "./src/app/tournament/tournament-detail/tournament-detail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/tournament/tournament-detail/tournament-detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Turnier Details</h1>\r\n<ng-container *ngIf=\"tournament$ | async as tournament\">\r\n  <p>\r\n    {{ tournament | json}}\r\n  </p>\r\n  <a [routerLink]=\"['/tournament/edit', tournament.id]\">Turnier bearbeiten</a>\r\n  <a [routerLink]=\"['/tournament/all']\">Turnierliste</a>\r\n  <table>\r\n    <tr>\r\n      <td>Name: </td><td>{{ tournament.name }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Kategorie: </td><td>{{ loc[tournament.category] }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Typ: </td><td>{{ loc[tournament.gender] }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Datum: </td><td>{{ tournament.date | date :'shortDate'}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Spielsystem: </td><td>{{ loc[tournament.playMode] }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Beschreibung: </td><td>{{ tournament.description }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Startgebühr: </td><td>{{ tournament.entryFee }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Preisgeld: </td><td>{{ tournament.priceMoney }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Kontakt: </td><td>{{ tournament.contact }}</td>\r\n    </tr>\r\n  </table>\r\n  <button (click)=\"deleteTournament(tournament)\" class=\"btn btn-danger mr-2\">Turnier Löschen</button>\r\n</ng-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/tournament/tournament-detail/tournament-detail.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/tournament/tournament-detail/tournament-detail.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvdXJuYW1lbnQvdG91cm5hbWVudC1kZXRhaWwvdG91cm5hbWVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tournament/tournament-detail/tournament-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tournament/tournament-detail/tournament-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TournamentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentDetailComponent", function() { return TournamentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ "./src/app/api/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_localizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/localizer */ "./src/app/shared/localizer.ts");






var TournamentDetailComponent = /** @class */ (function () {
    function TournamentDetailComponent(ts, route, router) {
        this.ts = ts;
        this.route = route;
        this.router = router;
        this.loc = src_app_shared_localizer__WEBPACK_IMPORTED_MODULE_5__["loc"];
    }
    TournamentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tournament$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return params.get('id'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) { return _this.ts.retrieveTournamentUsingGET(parseInt(id, 10)); }));
    };
    TournamentDetailComponent.prototype.deleteTournament = function (tournament) {
        var _this = this;
        this.ts.deleteTournamentUsingDELETE(tournament.id).subscribe(function () {
            return _this.router.navigate(['tournament/all']);
        });
    };
    TournamentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tournament-detail',
            template: __webpack_require__(/*! ./tournament-detail.component.html */ "./src/app/tournament/tournament-detail/tournament-detail.component.html"),
            styles: [__webpack_require__(/*! ./tournament-detail.component.scss */ "./src/app/tournament/tournament-detail/tournament-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["TournamentResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TournamentDetailComponent);
    return TournamentDetailComponent;
}());



/***/ }),

/***/ "./src/app/tournament/tournament-list/tournament-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/tournament/tournament-list/tournament-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Turniere\r\n</h1>\r\n<a [routerLink]=\"['/tournament/edit/0']\">Turnier anlegen</a>\r\n<table mat-table [dataSource]=tournaments class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"id\">\r\n    <th mat-header-cell *matHeaderCellDef> Id </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.id}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.name}} \r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"category\">\r\n    <th mat-header-cell *matHeaderCellDef> Kategorie </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{loc[user.category]}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"contact\">\r\n    <th mat-header-cell *matHeaderCellDef> Kontakt </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.contact}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"date\">\r\n    <th mat-header-cell *matHeaderCellDef> Datum </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.date | date :'shortDate'}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"description\">\r\n    <th mat-header-cell *matHeaderCellDef> Beschreibung </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.description}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"entryFee\">\r\n    <th mat-header-cell *matHeaderCellDef> Startgebühr </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.entryFee}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"gender\">\r\n    <th mat-header-cell *matHeaderCellDef> Typ </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{loc[user.gender]}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"playMode\">\r\n    <th mat-header-cell *matHeaderCellDef> Spielsystem </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{loc[user.playMode]}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"priceMoney\">\r\n    <th mat-header-cell *matHeaderCellDef> Preisgeld </th>\r\n    <td mat-cell *matCellDef=\"let user\"> {{user.priceMoney}} </td>\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay\" (click)=\"goDetails(row)\"></tr>\r\n</table>"

/***/ }),

/***/ "./src/app/tournament/tournament-list/tournament-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/tournament/tournament-list/tournament-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvdXJuYW1lbnQvdG91cm5hbWVudC1saXN0L3RvdXJuYW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tournament/tournament-list/tournament-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tournament/tournament-list/tournament-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: TournamentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentListComponent", function() { return TournamentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ "./src/app/api/services.ts");
/* harmony import */ var src_app_shared_localizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/localizer */ "./src/app/shared/localizer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TournamentListComponent = /** @class */ (function () {
    function TournamentListComponent(ts, router, route) {
        this.ts = ts;
        this.router = router;
        this.route = route;
        this.tournaments = [];
        this.columnsToDisplay = [
            'id',
            'name',
            'category',
            'gender',
            'date',
            'playMode',
        ];
        this.loc = src_app_shared_localizer__WEBPACK_IMPORTED_MODULE_3__["loc"];
    }
    TournamentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ts.getAllTournamentsUsingGET().subscribe(function (t) {
            _this.tournaments = t;
        });
    };
    TournamentListComponent.prototype.goDetails = function (tournament) {
        this.router.navigate(['../details/', tournament.id], { relativeTo: this.route });
    };
    TournamentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tournament-list',
            template: __webpack_require__(/*! ./tournament-list.component.html */ "./src/app/tournament/tournament-list/tournament-list.component.html"),
            styles: [__webpack_require__(/*! ./tournament-list.component.scss */ "./src/app/tournament/tournament-list/tournament-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["TournamentResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TournamentListComponent);
    return TournamentListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\development\BeachvolleyballPortal\bv-portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map