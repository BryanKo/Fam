webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app-container {\n  height: 100vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div id=\"app-container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reco_service__ = __webpack_require__("../../../../../src/app/reco.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















/*
The appRoutes array of routes describes how to navigate. Pass it to the RouterModule.forRoot method in the module imports to configure the router. Each Route maps a URL path to a component. There are no leading slashes in the path.

The order of the routes in the configuration matters and this is by design. The router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes.

Given this configuration, when the browser URL for this application becomes /register, the router matches that URL to the route path /register and displays the RegisterComponent after a RouterOutlet that you've placed in the host view's HTML (app.component.html).

The ** path in the last route is a wildcard. The router will select this route if the requested URL doesn't match any paths for routes defined earlier in the configuration. This is useful for displaying a "404 - Not Found" page or redirecting to another route.
*/
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_16__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_12__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_19__filter_pipe__["a" /* MyFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBiu2zNzWivvQnbjTCnf0lHkqYqS8B0A7o'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__reco_service__["a" /* RecoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    // Service for registering new user
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        /*
        this.http.post(url, body, option) returns an Observable. Think of an Observable as a stream of events published by some source. To listen for events in this stream, subscribe to the Observable. These subscriptions specify the actions to take when the web request produces a success event (with the hero data in the event payload) or a fail event (with the error in the payload).
        */
        // connect to server with http://ec2-107-23-73-244.compute-1.amazonaws.com
        // connect ot server with http://localhost
        return this.http.post('http://ec2-107-23-73-244.compute-1.amazonaws.com:8080/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Service for logging in user
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://ec2-107-23-73-244.compute-1.amazonaws.com:8080/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Service for displaying user profile
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://ec2-107-23-73-244.compute-1.amazonaws.com:8080/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // Store user loggedin user info in localStorage
    AuthService.prototype.storeUserInfo = function (user) {
        localStorage.setItem('user', user);
        var myInt = setInterval(function () {
            if (!document.hasFocus()) {
                localStorage.clear();
                clearInterval(myInt);
            }
        }, 600000); // 10 minutes
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyFilterPipe = (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (reviews, usrn) {
        // Check if search term is undefined
        if (usrn === undefined)
            return reviews;
        if (reviews === undefined)
            return [];
        // Return updated review list
        return reviews.filter(function (review) {
            return review.username.toLowerCase().includes(usrn.toLowerCase());
        });
    };
    return MyFilterPipe;
}());
MyFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'userFilter',
        pure: false
    })
], MyFilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#home-container {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n#home-main {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/home-bgd.jpg") + ");\n  height: 93%;\n  position: relative;\n}\n\n#home-effect {\n  background-color: rgba(0, 0, 0, 0.6);\n  height: 100%;\n}\n\n#home-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n#home-title {\n  font-size: 60px;\n  font-family: monospace;\n  color: white;\n  text-align: center;\n}\n\n#home-search {\n  padding: 15px;\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n}\n\n#home-map {\n  height: 100%;\n}\n\nagm-map {\n  height: 100%;\n}\n\n.rev-list {\n  width: 50vh;\n}\n\n.glyphicon-star {\n  color: gold;\n}\n\n.input-group {\n  height: 100%;\n}\n\n.form-control {\n  height: 100%;\n  border: none;\n}\n\n.input-group-addon {\n  background-color: white;\n}\n\n.input-group-addon button {\n  background-color: white;\n  border: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home-container\">\n  <div id=\"home-main\">\n    <div id=\"home-effect\"></div>\n    <div id=\"home-content\">\n      <div id=\"home-title\">\n        Welcome to Fam\n      </div>\n      <div id=\"home-search\">\n        <div class=\"input-group input-group-lg\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for any location\" [(ngModel)]=\"address\" name=\"address\">\n          <span class=\"input-group-addon\">\n            <button (click)=\"onSearch()\">\n              <span class=\"glyphicon glyphicon-search\"></span>\n            </button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"home-map\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"false\" [disableDoubleClickZoom]=\"true\">\n      <agm-marker *ngFor=\"let reco of recos\" [latitude]=\"reco.lat\" [longitude]=\"reco.lng\">\n        <agm-info-window class=\"info-window\">\n          <h4 class=\"page-header\">\n            {{reco.title}}\n            <span *ngFor=\"let i of starArr.slice(0,reco.stars)\" class=\"glyphicon glyphicon-star\"></span>\n          </h4>\n          <h4>{{reco.name}}</h4>\n          <p>Category: {{reco.categ}}</p>\n          <p>Description: {{reco.desc}}</p>\n          <p>Direction: {{reco.direct}}</p>\n        </agm-info-window>\n      </agm-marker>\n    </agm-map>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reco_service__ = __webpack_require__("../../../../../src/app/reco.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(recoService, mapsApiLoader) {
        this.recoService = recoService;
        this.mapsApiLoader = mapsApiLoader;
        this.starArr = new Array(5);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lat = 36.9910;
        this.lng = -122.0490;
        this.zoom = 13;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
        this.recoService.getRecos().subscribe(function (recos) {
            _this.recos = recos;
        });
    };
    HomeComponent.prototype.onSearch = function () {
        var _this = this;
        // Angular2 wrapper for google maps API
        this.mapsApiLoader.load().then(function () {
            // Geocoding
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': _this.address }, function (results, status) {
                if (status == 'OK') {
                    console.log(results[0].formatted_address);
                    _this.lat = results[0].geometry.location.lat();
                    _this.lng = results[0].geometry.location.lng();
                }
            });
        });
        // Scroll to map
        $('html,body').animate({
            scrollTop: $("#home-map").offset().top
        }, 'slow');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__reco_service__["a" /* RecoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__reco_service__["a" /* RecoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login-box {\n  border: outset 2px;\n  width: 50%;\n  margin: auto;\n  padding: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Login form that will be submitted to database -->\n\n<h2 class=\"page-header text-center\">Login</h2>\n<div id=\"login-box\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" />\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary center-block\" value=\"Submit\" />\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            this.router.navigate(['/map']);
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
            loggedin: true
        };
        /*
        Front-end for user login. Always delegate data access to a supporting service class. In this case, auth.service takes care of data access.
        */
        this.authService.loginUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('Logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserInfo(JSON.stringify(data.user));
                _this.router.navigate(['/map']);
            }
            else {
                _this.flashMessagesService.show('Login failed. Please try again', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-container {\n  height: 100%;\n  margin: 0;\n}\n\n.col-md-4, .col-md-8 {\n  padding: 0;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" class=\"row\">\n  <div class=\"col-md-4\">\n    <app-sidebar (notify)=\"onNotify($event)\" lat={{this.lat}} lng={{this.lng}} [recosList]=\"recos\"></app-sidebar>\n  </div>\n  <div class=\"col-md-8\">\n    <app-map [lat]=\"lat\" [lng]=\"lng\" [recosList]=\"recos\"></app-map>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reco_service__ = __webpack_require__("../../../../../src/app/reco.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(router, recoService, mapsApiLoader) {
        this.router = router;
        this.recoService = recoService;
        this.mapsApiLoader = mapsApiLoader;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('user')) {
            this.router.navigate(['/']);
        }
        this.recoService.getRecos().subscribe(function (recos) {
            _this.recos = recos;
        });
    };
    MainComponent.prototype.onNotify = function (address) {
        var _this = this;
        this.mapsApiLoader.load().then(function () {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == 'OK') {
                    console.log(results[0].formatted_address);
                    _this.lat = results[0].geometry.location.lat();
                    _this.lng = results[0].geometry.location.lng();
                }
            });
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__reco_service__["a" /* RecoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__reco_service__["a" /* RecoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _c || Object])
], MainComponent);

var _a, _b, _c;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 100%;\n}\n\n.rev {\n  width: 50vh;\n}\n\n.glyphicon-star {\n  color: gold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"false\" (mapClick)=\"mapClick($event)\">\n  <agm-marker *ngFor=\"let reco of recosList\" [latitude]=\"reco.lat\" [longitude]=\"reco.lng\" (markerClick)=\"markerClick($event)\">\n    <agm-info-window class=\"info-window\">\n      <div class=\"rev\">\n        <h4 class=\"page-header\">\n          {{reco.title}}<br>\n          <span *ngFor=\"let i of starArr.slice(0,reco.stars)\" class=\"glyphicon glyphicon-star\"></span>\n        </h4>\n        <h4>{{reco.name}}</h4>\n        <p>By: {{reco.username}}</p>\n        <p>Category: {{reco.categ}}</p>\n        <p>Description: {{reco.desc}}</p>\n        <p>Direction: {{reco.direct}}</p>\n      </div>\n    </agm-info-window>\n  </agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = (function () {
    function MapComponent(mapsApiLoader) {
        this.mapsApiLoader = mapsApiLoader;
        // Used just because ngFor only works with iterables instead of numbers
        this.starArr = new Array(5);
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lat = 36.9910;
        this.lng = -122.0490;
        this.zoom = 13;
        this.reviewBool = false;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
    };
    MapComponent.prototype.mapClick = function ($event) {
    };
    MapComponent.prototype.markerClick = function ($event) {
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MapComponent.prototype, "lat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MapComponent.prototype, "lng", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "recosList", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */]) === "function" && _a || Object])
], MapComponent);

var _a;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  border-radius: 0;\n  margin: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nSee https://angular.io/docs/ts/latest/guide/template-syntax.html#!#binding-syntax for data binding syntax.\n\nThe RouterLink directives on the anchor tags give the router control over those elements. The navigation paths are fixed, so you can assign a string to the routerLink (a \"one-time\" binding).\n\nThe RouterLinkActive directive on each anchor tag helps visually distinguish the anchor for the currently selected \"active\" route. The router adds the active CSS class to the element when the associated RouterLink becomes active. You can add this directive to the anchor or to its parent element.\n-->\n<nav id=\"myNav\" class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact: true}\" routerLink=\"/\"><img src=\"../assets/fam_logo.ico\" alt=\"Fam\" /></a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul *ngIf=\"loggedIn(); else loggedout\" class=\"nav navbar-nav navbar-right\">\n        <li routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact: true}\"><a routerLink=\"/map\">Map</a></li>\n        <li routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact: true}\"><a routerLink=\"/profile\">Profile</a></li>\n        <li (click)=\"onLogout()\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact: true}\"><a routerLink=\"#\">Logout</a></li>\n      </ul>\n      <ng-template #loggedout>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact: true}\"><a routerLink=\"/register\">Register</a></li>\n          <li routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact: true}\"><a routerLink=\"/login\">Login</a></li>\n        </ul>\n      </ng-template>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    /*
    Dependency injection is a way to supply a new instance of a class with the fully-formed dependencies it requires. Most dependencies are services. Angular uses dependency injection to provide new components with the services they need. Angular can tell which services a component needs by looking at the types of its constructor parameters.
    */
    function NavbarComponent(router, flashMessagesService) {
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.loggedIn = function () {
        if (localStorage.getItem('user')) {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.onLogout = function () {
        this.flashMessagesService.show('Logged out', { cssClass: 'alert-success', timeout: 3000 });
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>404</h1>\n  <h3>Return to the <a routerLink=\"/\">home</a> page</h3>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}'s Profile</h2>\n\n  <!-- Display user profile name and email-->\n  <div>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\n      <li class=\"list-group-item\">Email: {{user.email}}</li>\n    </ul>\n\n  <!-- Display user reviews in a feed template iteratively-->\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let reco of (recos | userFilter: user.username)\">\n        <h4>{{reco.title}} || {{reco.stars}}/5</h4>\n        <h4>{{reco.name}}</h4>\n        <p>By: {{reco.username}}</p>\n        <p>Category: {{reco.categ}}</p>\n        <p>Description: {{reco.desc}}</p>\n        <p>Direction: {{reco.direct}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reco_service__ = __webpack_require__("../../../../../src/app/reco.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(router, authService, recoService) {
        this.router = router;
        this.authService = authService;
        this.recoService = recoService;
        this.recos = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('user')) {
            this.router.navigate(['/']);
        }
        this.user = JSON.parse(localStorage.getItem('user'));
        this.recoService.getRecos().subscribe(function (recos) {
            _this.recos = recos;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__reco_service__["a" /* RecoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__reco_service__["a" /* RecoService */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/reco.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecoService = (function () {
    function RecoService(http) {
        this.http = http;
    }
    RecoService.prototype.addReview = function (reviewLoc) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        /*
        this.http.post(url, body, option) returns an Observable. Think of an Observable as a stream of events published by some source. To listen for events in this stream, subscribe to the Observable. These subscriptions specify the actions to take when the web request produces a success event (with the hero data in the event payload) or a fail event (with the error in the payload).
        */
        // connect to server with http://ec2-107-23-73-244.compute-1.amazonaws.com
        // connect ot server with http://localhost
        return this.http.post('http://ec2-107-23-73-244.compute-1.amazonaws.com:8080/recos/addReco', reviewLoc, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    RecoService.prototype.getRecos = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://ec2-107-23-73-244.compute-1.amazonaws.com:8080/recos/getReco', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return RecoService;
}());
RecoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RecoService);

var _a;
//# sourceMappingURL=reco.service.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#register-box {\n  border: outset 2px;\n  width: 50%;\n  margin: auto;\n  padding: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">Register</h2>\n<div id=\"register-box\">\n  <form (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" />\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary center-block\" value=\"Submit\" />\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    // These are injected from @Injectables
    function RegisterComponent(authService, flashMessagesService, router) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            this.router.navigate(['/map']);
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            loggedin: true
        };
        /*
        Front-end for user registeration. Always delegate data access to a supporting service class. In this case, auth.service takes care of data access.
        */
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('Welcome!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show('Registeration failed. Please try again', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search {\n  border-bottom: solid lightgray 1px;\n  padding: 10px;\n  height: 15%;\n}\n\n.recos-list {\n  margin: 0;\n  height: 85%;\n  overflow-y: scroll;\n}\n\n.recos-list button {\n  border-radius: 0;\n}\n\n.reco-form {\n  padding: 5px;\n  height: 85%;\n  overflow-y: scroll;\n}\n\n.reco-form .form-group {\n  margin: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar search and review -->\n<div class=\"search\">\n  <form>\n    <div class=\"form-group form-group-md\">\n      <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" class=\"form-control\" placeholder=\"Search for a location\"/>\n      <button (click)=\"onSearch()\" class=\"btn btn-default btn-block\">Search</button>\n    </div>\n  </form>\n</div>\n\n<!-- Feed of reviews-->\n<ng-template #reviewFalse>\n  <div class=\"recos-list\">\n    <h3 class=\"text-center\">Reviews</h3>\n    <button (click)=\"onReview()\" class=\"btn btn-success btn-block\">Add Review</button>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let reco of recosList\">\n        <h4>{{reco.title}} || {{reco.stars}}/5</h4>\n        <h4>{{reco.name}}</h4>\n        <p>By: {{reco.username}}</p>\n        <p>Category: {{reco.categ}}</p>\n        <p>Description: {{reco.desc}}</p>\n        <p>Direction: {{reco.direct}}</p>\n      </li>\n    </ul>\n  </div>\n</ng-template>\n\n<!-- Review form for user input-->\n<div *ngIf=\"reviewBool; else reviewFalse\" class=\"reco-form\">\n  <h3 class=\"text-center\">Review New Location</h3>\n  <form class=\"form-horizontal form-group form-group-sm row\">\n    <div class=\"form-group form-group-sm row\">\n      <label class=\"col-sm-2 control-label\">Username:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"user.username\" readonly/>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group form-group-sm row\">\n      <label class=\"col-sm-2 control-label\">Title:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"eg. Santa Cruz Boardwalk\" [(ngModel)]=\"name\" name=\"name\" />\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group form-group-sm row\">\n      <label class=\"col-sm-2 control-label\">Location: </label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"eg. 400 Beach St, Santa Cruz, CA 95060\" [(ngModel)]=\"loc\" name=\"loc\" />\n        <button (click)=\"currLoc()\" class=\"btn btn-default btn-block\">Verify</button>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group form-group-sm row\">\n      <label class=\"col-sm-2 control-label\">Star :</label>\n      <div class=\"col-sm-10\">\n        <p><input type=\"text\" placeholder=\"0-5\" [(ngModel)]=\"star\" name=\"star\" /> /5</p>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group form-group-sm row\">\n      <label class=\"col-sm-2 control-label\">Category: </label>\n      <div class=\"col-sm-10\">\n        <select class=\"form-control\" [(ngModel)]=\"categ\" name=\"categ\">\n          <option>Hikes</option>\n          <option>Restaurants</option>\n          <option>Parks</option>\n          <option>Other</option>\n        </select>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group form-group-sm row\">\n      <label class=\"col-sm-2 control-label\">Description:</label>\n      <div class=\"col-sm-10\">\n        <textarea rows=\"5\" class=\"form-control\" placeholder=\"Description of location/ activities/ accessability/ etc.\" [(ngModel)]=\"desc\" name=\"desc\"></textarea>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group form-group-sm row\">\n      <label class=\"col-sm-2 control-label\">Direction:</label>\n      <div class=\"col-sm-10\">\n        <textarea rows=\"5\" class=\"form-control\" placeholder=\"How do you get there?\" [(ngModel)]=\"direct\" name=\"direct\"></textarea>\n      </div>\n    </div>\n    <br>\n    <div class=\"form-group form-group-sm row text-center\">\n      <div class=\"col-sm-10 col-sm-offset-2\">\n        <button (click)=\"submitReview()\" class=\"btn btn-primary\">Submit</button>\n        <button (click)=\"cancelReview()\" class=\"btn btn-danger\">Cancel</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reco_service__ = __webpack_require__("../../../../../src/app/reco.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = (function () {
    function SidebarComponent(recoService, flashMessagesService, router, authService) {
        this.recoService = recoService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
        this.authService = authService;
        // Get correct location
        this.currLocBool = false;
        this.currLocCnt = 0;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('user')) {
            this.router.navigate(['/']);
        }
        this.reviewBool = false;
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    // Brings up the review form
    SidebarComponent.prototype.onReview = function () {
        this.reviewBool = true;
    };
    // Cancels review
    SidebarComponent.prototype.cancelReview = function () {
        if (confirm("Are you sure you want to cancel your review?")) {
            this.reviewBool = false;
            this.clear();
        }
        else {
            this.reviewBool = true;
        }
    };
    // Submits review
    SidebarComponent.prototype.submitReview = function () {
        // this.notify.emit(this.loc);
        var _this = this;
        // swapped name/name and loc/loc so that the name of the location is the adr while the title will be the name of the review
        var reviewLoc = {
            username: this.user.username,
            name: this.loc,
            loc: this.name,
            lat: this.lat,
            lng: this.lng,
            star: this.star,
            categ: this.categ,
            desc: this.desc,
            direct: this.direct,
        };
        // console.log(this.currLocCnt + " " + this.currLocBool);
        // console.log("username: " + this.user.username);
        console.log(this.lat + ", " + this.lng + "\nThis is from sidebar.components.ts\nFrom review section #2");
        if (this.currLocBool == false) {
            alert("Please click 'Verify' under the Review Section");
        }
        else {
            this.recoService.addReview(reviewLoc).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessagesService.show('Review added', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/map']);
                }
                else {
                    _this.flashMessagesService.show('Review not added', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/map']);
                }
            });
            this.currLocCnt = 0;
            this.currLocBool = false;
            this.clear();
            this.reviewBool = false;
        }
    };
    // When addres is searched, pass this.address -> main -> map
    SidebarComponent.prototype.onSearch = function () {
        this.notify.emit(this.address);
    };
    SidebarComponent.prototype.currLoc = function () {
        this.notify.emit(this.loc);
        console.log(this.lat + ", " + this.lng + "\nThis is from sidebar.components.ts\nFrom review section");
        this.currLocCnt++;
        if (this.currLocCnt >= 2)
            this.currLocBool = true;
        console.log(this.currLocCnt + " " + this.currLocBool);
    };
    SidebarComponent.prototype.clear = function () {
        this.loc = '',
            this.name = '',
            this.star = null,
            this.categ = '',
            this.desc = '',
            this.direct = '';
    };
    return SidebarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SidebarComponent.prototype, "recosList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SidebarComponent.prototype, "lat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SidebarComponent.prototype, "lng", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SidebarComponent.prototype, "notify", void 0);
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__reco_service__["a" /* RecoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__reco_service__["a" /* RecoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], SidebarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/assets/home-bgd.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home-bgd.b877d304b12d87e749fc.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map