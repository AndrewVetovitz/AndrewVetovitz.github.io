webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<about id=\"about\"></about>\n<work id=\"work\"></work>\n<projects id=\"projects\"></projects>\n<contact id=\"contact\"></contact>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_about_content_about_content_component__ = __webpack_require__("../../../../../src/app/components/about-content/about-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_work_work_component__ = __webpack_require__("../../../../../src/app/components/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_contact_links_contact_links_component__ = __webpack_require__("../../../../../src/app/components/contact-links/contact-links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_forms_service__ = __webpack_require__("../../../../../src/app/services/forms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_page_scroll__ = __webpack_require__("../../../../ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_scrollspy__ = __webpack_require__("../../../../ngx-scrollspy/ngx-scrollspy.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_height_service__ = __webpack_require__("../../../../../src/app/services/height.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components








// Application routing

// Forms



// Nav bar scrolling

// Page scrolling

// Services

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_about_content_about_content_component__["a" /* AboutContentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_work_work_component__["a" /* WorkComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_contact_links_contact_links_component__["a" /* ContactLinksComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_page_scroll__["a" /* NgxPageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_scrollspy__["a" /* ScrollSpyModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* appRouting */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_forms_service__["a" /* FormsService */],
                __WEBPACK_IMPORTED_MODULE_16__services_height_service__["a" /* HeightService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");


var websiteRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forRoot(websiteRoutes);


/***/ }),

/***/ "../../../../../src/app/components/about-content/about-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container header-container\">\n  <h1 class=\"text-center header\">{{ title }}</h1>\n  <div class=\"about-text text-justify\">\n    <p>\n      Always be positive, always be willing to take risks, always be willing to fail.\n      Growth cannot come from comfort and progress can only be made by challenging the status quo.\n    </p>\n    <p>\n      Cleveland born, aspiring entrepreneur and stock enthusiast. New York bound one step at a time.\n      Looking past failure constantly.\n    </p>\n    <p>\n      Tech enthusiast always chasing harder and steeper challenges.\n      Searching bit by bit through Stack Overflow.\n    </p>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/about-content/about-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding-bottom: 3em; }\n\n@media (min-width: 750px) {\n  .container {\n    max-width: 925px; } }\n\n.header {\n  font-family: 'Bungee', cursive;\n  font-size: calc(1.2vw + 38.1428px);\n  font-weight: 500;\n  margin-bottom: 30px; }\n\n.about-text {\n  font-size: 26px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about-content/about-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutContentComponent = (function () {
    function AboutContentComponent() {
    }
    AboutContentComponent.prototype.ngOnInit = function () {
        this.updateTitle(window.innerWidth);
    };
    AboutContentComponent.prototype.onResize = function (event) {
        this.updateTitle(window.innerWidth);
    };
    AboutContentComponent.prototype.updateTitle = function (width) {
        if (width <= 749) {
            this.title = 'my aspiration';
        }
        else {
            this.title = '───my aspiration───';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AboutContentComponent.prototype, "onResize", null);
    AboutContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'about-content',
            template: __webpack_require__("../../../../../src/app/components/about-content/about-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about-content/about-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutContentComponent);
    return AboutContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-container\" #about>\n  <div class=\"image\">\n  </div>\n  <div class=\"title text-center\">\n    <p>Hi, I'm</p>\n    <p class=\"name\">Andrew Vetovitz</p>\n  </div>\n  <div class=\"content\">\n    <about-content></about-content>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-container {\n  display: block; }\n\n.image-container {\n  width: 100%;\n  height: auto;\n  position: relative;\n  float: right;\n  overflow: visible; }\n\n.image {\n  background-image: url(https://res.cloudinary.com/dg25vxfyl/image/upload/q_100/v1515015167/mountain_fxeiu1.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  min-height: 1848px;\n  width: 100%;\n  position: relative;\n  overflow: visible; }\n\n.title {\n  margin-top: -1500px;\n  color: #FFF;\n  font-size: 30px;\n  line-height: 31px;\n  position: relative;\n  width: 100%; }\n\n.name {\n  font-size: 60px;\n  line-height: 20px;\n  font-family: 'Allan', cursive; }\n\n.content {\n  margin-top: 1050px;\n  position: relative;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_height_service__ = __webpack_require__("../../../../../src/app/services/height.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(heightService) {
        this.heightService = heightService;
    }
    AboutComponent.prototype.onResize = function () {
        this.heightService.aboutH = this.elementView.nativeElement.offsetHeight;
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        this.heightService.aboutH = this.elementView.nativeElement.offsetHeight;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('about'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AboutComponent.prototype, "elementView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AboutComponent.prototype, "onResize", null);
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_height_service__["a" /* HeightService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact-links/contact-links.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav justify-content-center fa-5x\">\n    <li>\n      <a href=\"https://github.com/AndrewVetovitz\" target=\"_blank\">\n        <div title=\"Githhub\" class=\"icon-container github-styling\">\n          <i class=\"fab fa-github icon-styling\"></i>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://www.linkedin.com/in/andrewvetovitz\" target=\"_blank\">\n        <div title=\"Linkedin\" class=\"icon-container linkedin-styling\">\n          <i class=\"fab fa-linkedin-in icon-styling\"></i>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"../../../../images/vetovitz_andrew_resume.pdf\" download>\n        <div title=\"Resume\" class=\"icon-container resume-styling\">\n          <i class=\"fas fa-file-alt icon-styling\"></i>\n        </div>\n      </a>\n    </li>\n    <li>\n      <a href=\"mailto:andrewvetovitz@gmail.com?subject=Hello!&body=Dear%20Andrew%2C%0D%0A%0D%0A\">\n        <div title=\"Email\" class=\"icon-container mail-styling\">\n          <i class=\"fas fa-envelope icon-styling\"></i>\n        </div>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact-links/contact-links.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav {\n  min-width: 150px; }\n\n.icon-container {\n  width: 100px;\n  height: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\nul li {\n  margin: 0 10px 20px 10px; }\n  ul li i {\n    height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.github-styling {\n  background-color: #FFF;\n  color: #111; }\n\n.linkedin-styling {\n  background-color: #0077B5;\n  color: #FFF; }\n\n.resume-styling {\n  background-color: #6ABA77;\n  color: #FFF; }\n\n.mail-styling {\n  background-color: #D33;\n  color: #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact-links/contact-links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactLinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactLinksComponent = (function () {
    function ContactLinksComponent() {
    }
    ContactLinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'contact-links',
            template: __webpack_require__("../../../../../src/app/components/contact-links/contact-links.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact-links/contact-links.component.scss")]
        })
    ], ContactLinksComponent);
    return ContactLinksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" #contact>\n  <h1 class=\"text-center\">Contact me today</h1>\n  <div class=\"text-center\">Do you have a project that you want brought to life or just need to chat? Feel free to reach out to me!</div>\n  <br>\n  <br>\n  <form (ngSubmit)=\"submit()\" [formGroup]=\"form\">\n    <div class=\"form-group\">\n      <label class=\"asterisk\"><strong>Full Name</strong></label>\n      <div [ngClass]=\"layoutClass\">\n        <div [ngClass]=\"spaceClass\">\n          <input [ngClass]=\"cssInvalid('firstname')\" class=\"form-control width100\" formControlName=\"firstname\">\n          <label><strong>First Name</strong></label>\n        </div>\n        <div class=\"nameSpace\"></div>\n        <div [ngClass]=\"spaceClass\">\n          <input [ngClass]=\"cssInvalid('lastname')\" class=\"form-control width100\" formControlName=\"lastname\">\n          <label><strong>Last Name</strong></label>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <strong><label class=\"asterisk\">Email</label></strong>\n      <input [ngClass]=\"cssInvalid('email')\" type=\"email\" class=\"form-control\" formControlName=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label class=\"asterisk\"><strong>Message</strong></label>\n      <textarea [ngClass]=\"cssInvalid('message')\" class=\"form-control\" formControlName=\"message\"></textarea>\n    </div>\n\n    <!--Anti scraper field-->\n    <input type=\"text\" name=\"_gotcha\" style=\"display:none\" formControlName=\"_gotcha\">\n\n    <!--submission button-->\n    <div class=\"parent\">\n      <div *ngIf=\"isSubmitted\">\n        <div class=\"circle\"><strong>You're Awesome!</strong></div>\n      </div>\n      <button class=\"custom-button noselect\">\n        Message me\n      </button>\n    </div>\n    <div class=\"text-center\" *ngIf=\"isSubmitted\">\n      I'll get back to you as soon as I can!\n    </div>\n  </form>\n  <contact-links></contact-links>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  min-height: 100%;\n  width: 100%; }\n\nform {\n  margin-bottom: 30px; }\n\n.container {\n  padding-top: 3em;\n  padding-bottom: 3em; }\n\n@media (min-width: 750px) {\n  .container {\n    max-width: 700px; } }\n\nh1 {\n  font-family: \"Roboto\", sans-serif; }\n\nlabel.asterisk:after {\n  content: \" *\";\n  color: #F00; }\n\n.nameSpace {\n  width: 5%; }\n\n.inputSpace {\n  width: 47.5%; }\n\n.width100 {\n  width: 100%; }\n\n.parent {\n  text-align: center;\n  position: relative; }\n\n.custom-button {\n  display: block;\n  border: none;\n  border-radius: 50%;\n  width: 175px;\n  height: 175px;\n  outline: none;\n  margin: auto; }\n\n.circle {\n  width: 175px;\n  height: 175px;\n  line-height: 175px;\n  font-size: 20px;\n  font-family: 'Exo', sans-serif;\n  background-color: #F00;\n  position: absolute;\n  border-radius: 50%;\n  top: calc(50% - 87.5px);\n  left: calc(50% - 87.5px);\n  -webkit-animation: pulse 2s;\n          animation: pulse 2s; }\n\n@-webkit-keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 #ff2d65; }\n  70% {\n    box-shadow: 0 0 0 20px rgba(255, 45, 101, 0); }\n  100% {\n    box-shadow: 0 0 0 0 rgba(255, 45, 101, 0); } }\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 #ff2d65; }\n  70% {\n    box-shadow: 0 0 0 20px rgba(255, 45, 101, 0); }\n  100% {\n    box-shadow: 0 0 0 0 rgba(255, 45, 101, 0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_forms_service__ = __webpack_require__("../../../../../src/app/services/forms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_height_service__ = __webpack_require__("../../../../../src/app/services/height.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(formService, heightService) {
        this.formService = formService;
        this.heightService = heightService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.updateLayout(window.innerWidth);
        this.submitted = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', {
                validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(1)],
                updateOn: 'submit'
            }),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', {
                validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(1)],
                updateOn: 'submit'
            }),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', {
                validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email],
                updateOn: 'submit'
            }),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', {
                validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(1)],
                updateOn: 'submit'
            }),
            _gotcha: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', {
                updateOn: 'submit'
            })
        });
    };
    ContactComponent.prototype.onResize = function (event) {
        this.updateLayout(window.innerWidth);
        this.heightService.contactH = this.elementView.nativeElement.offsetHeight;
    };
    ContactComponent.prototype.ngAfterViewInit = function () {
        this.heightService.contactH = this.elementView.nativeElement.offsetHeight;
    };
    ContactComponent.prototype.updateLayout = function (width) {
        if (width >= 400) {
            this.layoutClass = 'form-inline';
            this.spaceClass = 'inputSpace';
        }
        else {
            this.spaceClass = 'width100';
            this.layoutClass = '';
        }
    };
    ContactComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            this.isSubmitted = true;
            this.submitted = false;
            var body = {
                name: this.form.value.firstname + ' ' + this.form.value.lastname,
                email: this.form.value.email,
                message: this.form.value.message,
                _gotcha: this.form.value._gotcha
            };
            this.formService.postFormData(body).subscribe(function (data) {
                _this.form.reset();
            });
        }
        else {
            this.submitted = true;
        }
    };
    ContactComponent.prototype.isFieldValid = function (field) {
        return this.form.get(field).valid;
    };
    ContactComponent.prototype.cssInvalid = function (field) {
        if (!this.isFieldValid(field) && this.submitted) {
            return 'is-invalid';
        }
        return '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('contact'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ContactComponent.prototype, "elementView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContactComponent.prototype, "onResize", null);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_forms_service__["a" /* FormsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_height_service__["a" /* HeightService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav [ngClass]=\"transparent\" class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"main-nav\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand noselect name-transition\">{{name }}</div>\n    <button class=\"navbar-toggler navbar-toggler-right custom-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n          <a pageScroll\n             [pageScrollInterruptible]=\"false\"\n             [pageScrollDuration]=\"800\"\n             pageScrollOffset={{offset}}\n             class=\"nav-link\"\n             routerLink=\"/about\"\n             href=\"#about\"\n             [ngClass]=\"{'active': sections[0].active}\">About <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n          <a pageScroll\n             [pageScrollInterruptible]=\"false\"\n             [pageScrollDuration]=\"800\"\n             pageScrollOffset={{offset}}\n             class=\"nav-link\"\n             routerLink=\"/work\"\n             href=\"#work\"\n             [ngClass]=\"{'active': sections[1].active}\">Work <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n          <a pageScroll\n             [pageScrollInterruptible]=\"false\"\n             [pageScrollDuration]=\"800\"\n             pageScrollOffset={{offset}}\n             class=\"nav-link\"\n             routerLink=\"/projects\"\n             href=\"#projects\"\n             [ngClass]=\"{'active': sections[2].active}\">Projects <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n          <a pageScroll\n             [pageScrollInterruptible]=\"false\"\n             [pageScrollDuration]=\"800\"\n             pageScrollOffset={{offset}}\n             class=\"nav-link\"\n             routerLink=\"/contact\"\n             href=\"#contact\"\n             [ngClass]=\"{'active': sections[3].active}\">Contact <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n  margin: 0 115px 0 35px; }\n\n@media (max-width: 991px) {\n  .container-fluid {\n    margin: 0 0 0 20px; } }\n\n.navbar {\n  background-color: transparent;\n  min-height: 70px;\n  padding: 40px 10px 40px 10px;\n  transition: background .5s ease-in-out,padding .5s ease-in-out; }\n\n@media (max-width: 991px) {\n  .navbar {\n    padding: 0 20px 0 20px; } }\n\n.custom-nav {\n  padding: 0 20px 0 20px;\n  background-color: #2D3047;\n  min-height: 70px; }\n\n.custom-toggle {\n  background: #DDD;\n  border-color: #DDD; }\n\nbutton:focus {\n  outline: none !important;\n  box-shadow: none; }\n\n.navbar-brand {\n  color: #FFF;\n  font-size: calc(1.58vw + 30.9340px);\n  font-family: 'Allan', cursive;\n  padding: 0;\n  height: 70px;\n  line-height: 70px; }\n  .navbar-brand:hover {\n    color: #FFF; }\n\n.name-transition {\n  transition: opacity 1s;\n  opacity: 1; }\n\n.navbar-toggle {\n  /* (80px - button height 34px) / 2 = 23px */\n  margin-top: 18px;\n  padding: 9px 10px !important; }\n\n@media (min-width: 768px) {\n  .navbar-nav > li > a {\n    /* (80px - line-height of 27px) / 2 = 26.5px */\n    padding-top: 21.5px;\n    padding-bottom: 21.5px;\n    line-height: 27px; } }\n\nul li a {\n  color: #FFF;\n  font-size: 21px;\n  font-family: 'Space Mono', monospace;\n  text-transform: uppercase;\n  padding: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  ul li a.nav-link {\n    text-align: center; }\n  ul li a:focus {\n    color: #FFF; }\n  ul li a:hover {\n    color: #F00; }\n  ul li a.active {\n    color: #F00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_height_service__ = __webpack_require__("../../../../../src/app/services/height.service.ts");
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
    function NavbarComponent(heightService) {
        this.heightService = heightService;
        this.offset = '68';
        this.height = [];
        this.sections = [
            { active: true, id: 'about' },
            { active: false, id: 'work' },
            { active: false, id: 'projects' },
            { active: false, id: 'contact' },
        ];
    }
    NavbarComponent.prototype.onResize = function () {
        this.height[0] = this.heightService.aboutH - 75;
        this.height[1] = this.heightService.workH + this.height[0] - 5;
        this.height[2] = this.heightService.projectsH + this.height[1];
        this.height[3] = this.heightService.contactH + this.height[2];
    };
    NavbarComponent.prototype.onScroll = function () {
        var scrollH = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.checkContent(scrollH);
        this.customNav(scrollH);
    };
    NavbarComponent.prototype.checkContent = function (scrollH) {
        if (scrollH >= 0 && scrollH < this.height[0]) {
            this.updateLink('about');
        }
        else if (scrollH >= this.height[0] && scrollH < this.height[1]) {
            this.updateLink('work');
        }
        else if (scrollH >= this.height[1] && scrollH < this.height[2]) {
            this.updateLink('projects');
        }
        else {
            this.updateLink('contact');
        }
    };
    NavbarComponent.prototype.customNav = function (scrollH) {
        if (scrollH < 1000) {
            this.transparent = '';
            this.name = '';
        }
        else {
            this.transparent = 'custom-nav';
            this.name = 'Andrew Vetovitz';
        }
    };
    NavbarComponent.prototype.ngAfterViewChecked = function () {
        this.height[0] = this.heightService.aboutH - 75;
        this.height[1] = this.heightService.workH + this.height[0] - 5;
        this.height[2] = this.heightService.projectsH + this.height[1];
        this.height[3] = this.heightService.contactH + this.height[2];
    };
    NavbarComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.selectSection$.subscribe(function (id) {
            _this.updateLink(id);
        });
    };
    NavbarComponent.prototype.updateLink = function (id) {
        this.sections.forEach(function (section) {
            section.active = section.id === id;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */])
    ], NavbarComponent.prototype, "selectSection$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavbarComponent.prototype, "onScroll", null);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_height_service__["a" /* HeightService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/projects/project-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROJECTDATA; });
var PROJECTDATA = [
    { name: "Personal Website", link: "https://github.com/AndrewVetovitz/andrewvetovitz.github.io-personal-website",
        source: "https://res.cloudinary.com/dg25vxfyl/image/upload/q_100/v1515014552/computerScreens_twyfnt.jpg" },
    { name: "QuadTree Imaging", link: "https://github.com/AndrewVetovitz/QuadTreeImaging",
        source: "https://res.cloudinary.com/dg25vxfyl/image/upload/q_100/v1515014567/apple_aqcjn0.png" },
    { name: "Emoji Hunter", link: "https://github.com/skylerreimer/Emoji-Hunter",
        source: "https://res.cloudinary.com/dg25vxfyl/image/upload/q_100/v1515014547/emoji_o9kni8.svg" },
    { name: "Project Kindness", link: "https://github.com/AndrewVetovitz/projectKindness",
        source: "https://res.cloudinary.com/dg25vxfyl/image/upload/q_100/v1515014546/heart_bbetjn.png" },
];


/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\" #project>\n  <div class=\"container\">\n    <h1 class=\"text-center header\">{{ title }}</h1>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 text-left\" *ngFor=\"let project of projects\">\n        <div class=\"project-container\">\n          <a href=\"{{ project.link }}\" target=\"_blank\">\n            <img class=\"img-fluid img-thumbnail project-image\" src=\"{{ project.source }}\" alt=\"{{ project.name }}\">\n          </a>\n          <div class=\"link-text\">\n            <a href=\"{{ project.link }}\" target=\"_blank\">\n              <span class=\"project-text\">{{ project.name }}</span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  width: 100%;\n  background-color: #7CB; }\n\n.container {\n  padding-top: 3em;\n  padding-bottom: 3em; }\n\n.project-container {\n  padding: 30px;\n  min-width: 275px; }\n\n.header {\n  font-family: 'Bungee', cursive;\n  font-size: calc(1.039vw + 41.673px);\n  font-weight: 500;\n  margin-bottom: 30px; }\n\n.project-image {\n  width: 275px;\n  height: 275px;\n  border-radius: 30px;\n  border: solid #000 10px; }\n\na {\n  margin: 0 auto 15px auto;\n  display: table; }\n\n.project-text {\n  font-size: 2em;\n  font-family: \"Helvetica Neue\", Helvetica,Arial, sans-serif; }\n\n.link-text {\n  text-align: center; }\n  .link-text a {\n    color: #000;\n    text-decoration: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_data__ = __webpack_require__("../../../../../src/app/components/projects/project-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_height_service__ = __webpack_require__("../../../../../src/app/services/height.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = (function () {
    function ProjectsComponent(heightService) {
        this.heightService = heightService;
        this.projects = __WEBPACK_IMPORTED_MODULE_1__project_data__["a" /* PROJECTDATA */];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.updateTitle(window.innerWidth);
    };
    ProjectsComponent.prototype.onResize = function (event) {
        this.updateTitle(window.innerWidth);
        this.heightService.projectsH = this.elementView.nativeElement.offsetHeight;
    };
    ProjectsComponent.prototype.ngAfterViewInit = function () {
        this.heightService.projectsH = this.elementView.nativeElement.offsetHeight;
    };
    ProjectsComponent.prototype.updateTitle = function (width) {
        if (width <= 575) {
            this.title = 'projects';
        }
        else {
            this.title = '───projects───';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('project'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ProjectsComponent.prototype, "elementView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProjectsComponent.prototype, "onResize", null);
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'projects',
            template: __webpack_require__("../../../../../src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_height_service__["a" /* HeightService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/work/work-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WORKDATA; });
var WORKDATA = [
    { name: "Goldman Sachs",
        url: "https://res.cloudinary.com/dg25vxfyl/image/upload/q_100/v1515014573/goldman-sachs_logo_mbtp72.jpg",
        alttext: "Goldman Sachs Logo",
        title: "Summer Anaylst Intern, Summer 2018",
        location: "New York, NY",
        link: "https://res.cloudinary.com/dg25vxfyl/image/upload/q_100/v1515014573/goldman-sachs_logo_mbtp72.jpg",
        description: "Incoming 2018 Summer Analyst for Goldman Sachs" },
    { name: "The Scott's Miracle Gro Company",
        url: "https://res.cloudinary.com/dg25vxfyl/image/upload/q_100/v1515014549/scotts_miracle_gro_p2ced4.png",
        alttext: "The Scott's Miracle Gro Company",
        title: "Web Application Developer Intern, Summer 2017",
        location: "Marysville, OH",
        link: "https://scottsmiraclegro.com/",
        description: "" +
            "This was my first time work on web applications. " +
            "Giving me new insite into buisness teamwork and working on core application backend and API functionality. " +
            "I also experienced my first buisness mistakes and trying to solve them, driving core buisness growth. " },
    { name: "IFAAADev",
        url: "https://res.cloudinary.com/dg25vxfyl/image/upload/q_100/v1515014562/IFAADev_gtycub.png",
        alttext: "IFAADev",
        title: "Independent Contractor, Since May 2017",
        location: "Cleveland, OH",
        link: "https://ifaadev.com/",
        description: "" +
            "I currently work as a contractor helping bring alive applications and websites. " +
            "/my largest project is working on ourparking.space which is a digitized parking website for buisnesses and events. " +
            "This posed significant challengs using web API's as well as hosting services and frontend technologies. " +
            "I had to work as a buisness analyst for this project as well to collect requirments and demo the projeject to the client. " },
    { name: "Mayfield High School",
        url: "https://res.cloudinary.com/dg25vxfyl/image/upload/q_100/v1515014555/mayfield_high_gqqedz.jpg",
        alttext: "Mayfield High School",
        title: "Class of 2014",
        location: "Mayfield Village, OH",
        link: "https://www.mayfieldschools.org/mayfieldhighschool_home.aspx",
        description: "" +
            "I am grateful to Mayfield for allowing me to be myself. " +
            "This was the first time I truly had friends and being able to find myself as a person. " +
            "My experiences here helped shape my career path into engineering and always looking to make the world a better place. " },
];


/***/ }),

/***/ "../../../../../src/app/components/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\" #work>\n  <div class=\"container\">\n    <h1 class=\"text-center header\">{{ title }}</h1>\n    <div *ngFor=\"let info of workdata\">\n      <div class=\"row content-buffer\">\n        <div class=\"col-xl-5 col-lg-5 col-md-5 image-buffer\">\n          <img src=\"{{ info.url }}\" class=\"img-fluid work-images\" alt=\"{{ info.alttext }}\">\n        </div>\n        <div class=\"col-xl-7 col-lg-7 col-md-7 text\">\n          <div class=\"p-div\">\n            <h3 class=\"work-name\">\n              <a  href=\"{{ info.link }}\" target=\"_blank\">{{ info.name }}</a>\n            </h3>\n          </div>\n          <div class=\"p-div\">\n            <h6 class=\"title\"><strong>{{ info.title }}</strong></h6>\n          </div>\n          <div class=\"p-div\">\n            <p class=\"location\"><strong>{{ info.location }}</strong></p>\n          </div>\n          <div>\n            <p class=\"space\">&nbsp;</p>\n          </div>\n          <div class=\"p-div\">\n            <p class=\"description\">{{ info.description }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/work/work.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  min-height: calc(100% - 70px);\n  width: 100%; }\n\n.container {\n  padding-top: 3em;\n  padding-bottom: 3em; }\n\n@media (min-width: 750px) {\n  .container {\n    max-width: 925px; } }\n\n.header {\n  font-family: 'Bungee', cursive;\n  font-size: calc(1.51316vw + 41.673px);\n  font-weight: 500;\n  margin-bottom: 30px; }\n\n.p-div {\n  margin-bottom: 5px;\n  min-height: 23px; }\n\ndiv img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n.work-images {\n  border-radius: 30px;\n  height: 245.38px;\n  width: 302.0087964px; }\n\n.work-name a {\n  text-decoration: none;\n  font-family: 'Open Sans Condensed', sans-serif;\n  color: #2274A5;\n  font-size: 24px;\n  height: 34px; }\n\n.title {\n  color: #8F3985; }\n\n.space {\n  height: 23px; }\n\n.location {\n  font-size: 15px;\n  font-family: \"Roboto\", sans-serif;\n  color: #555; }\n\n.description {\n  color: #656D6D; }\n\np {\n  margin-bottom: 0; }\n\n.image-buffer {\n  margin-bottom: 20px; }\n\n.content-buffer {\n  margin-bottom: 35px; }\n\n@media (max-width: 768px) {\n  .content-buffer {\n    width: 302px;\n    margin: auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__work_data__ = __webpack_require__("../../../../../src/app/components/work/work-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_height_service__ = __webpack_require__("../../../../../src/app/services/height.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkComponent = (function () {
    function WorkComponent(heightService) {
        this.heightService = heightService;
        this.workdata = __WEBPACK_IMPORTED_MODULE_1__work_data__["a" /* WORKDATA */];
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.updateTitle(window.innerWidth);
    };
    WorkComponent.prototype.onResize = function (event) {
        this.updateTitle(window.innerWidth);
        this.heightService.workH = this.elementView.nativeElement.offsetHeight;
    };
    WorkComponent.prototype.ngAfterViewInit = function () {
        this.heightService.workH = this.elementView.nativeElement.offsetHeight;
    };
    WorkComponent.prototype.updateTitle = function (width) {
        if (width <= 575) {
            this.title = 'my life';
        }
        else {
            this.title = '───my life───';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('work'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], WorkComponent.prototype, "elementView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WorkComponent.prototype, "onResize", null);
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'work',
            template: __webpack_require__("../../../../../src/app/components/work/work.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/work/work.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_height_service__["a" /* HeightService */]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/forms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsService = (function () {
    function FormsService(http) {
        this.http = http;
    }
    FormsService.prototype.postFormData = function (body) {
        var url = 'https://formspree.io/andrewvetovitz@gmail.com';
        return this.http.post(url, body);
    };
    FormsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FormsService);
    return FormsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/height.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeightService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeightService = (function () {
    function HeightService() {
        this.aboutH = 0;
        this.workH = 0;
        this.projectsH = 0;
        this.contactH = 0;
    }
    HeightService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HeightService);
    return HeightService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map