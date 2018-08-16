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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<router-outlet></router-outlet>\n<footer-component></footer-component>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/home.component */ "./src/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about/about.component */ "./src/components/about/about.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header/header.component */ "./src/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/components/footer/footer.component.ts");
/* harmony import */ var _components_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/header/home-header.component */ "./src/components/home/header/home-header.component.ts");
/* harmony import */ var _components_home_work_home_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/work/home-work.component */ "./src/components/home/work/home-work.component.ts");
/* harmony import */ var _components_home_skills_home_skills_component_tss_home_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home/skills/home-skills.component.tss/home-skills.component */ "./src/components/home/skills/home-skills.component.tss/home-skills.component.ts");
/* harmony import */ var _components_home_extras_home_extra_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home/extras/home-extra.component */ "./src/components/home/extras/home-extra.component.ts");
/* harmony import */ var _components_home_education_home_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/home/education/home-education.component */ "./src/components/home/education/home-education.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_about_mission_about_mission_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/about/mission/about-mission.component */ "./src/components/about/mission/about-mission.component.ts");
/* harmony import */ var _components_about_story_about_story_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/about/story/about-story.component */ "./src/components/about/story/about-story.component.ts");
/* harmony import */ var _components_about_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/about/hobbies/hobbies.component */ "./src/components/about/hobbies/hobbies.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/common.service */ "./src/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                //Home Section
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_8__["HomeHeaderComponent"],
                _components_home_work_home_work_component__WEBPACK_IMPORTED_MODULE_9__["HomeWorkComponent"],
                _components_home_skills_home_skills_component_tss_home_skills_component__WEBPACK_IMPORTED_MODULE_10__["HomeSkillComponent"],
                _components_home_extras_home_extra_component__WEBPACK_IMPORTED_MODULE_11__["HomeExtraComponent"],
                _components_home_education_home_education_component__WEBPACK_IMPORTED_MODULE_12__["HomeEducationComponent"],
                //About Section 
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _components_about_mission_about_mission_component__WEBPACK_IMPORTED_MODULE_14__["AboutMission"],
                _components_about_story_about_story_component__WEBPACK_IMPORTED_MODULE_15__["AboutStory"],
                _components_about_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_16__["AboutHobbies"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_13__["AppRoutes"])
            ],
            providers: [_services_common_service__WEBPACK_IMPORTED_MODULE_17__["CommonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/home/home.component */ "./src/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/about/about.component */ "./src/components/about/about.component.ts");


var AppRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
];


/***/ }),

/***/ "./src/components/about/about.component.css":
/*!**************************************************!*\
  !*** ./src/components/about/about.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/about/about.component.html":
/*!***************************************************!*\
  !*** ./src/components/about/about.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <about-mission \n        [backgroundColor]=\"bgColorScheme.mission\" \n        [textColor]=\"textColor.mission\">\n    </about-mission>\n\n    <about-story\n        [backgroundColor]=\"bgColorScheme.story\" \n        [textColor]=\"textColor.story\">\n    </about-story>\n\n    <about-hobbies\n        [backgroundColor]=\"bgColorScheme.hobbies\" \n        [textColor]=\"textColor.hobbies\"></about-hobbies>\n</main>"

/***/ }),

/***/ "./src/components/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/components/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.bgColorScheme = {
            mission: '#B8336A',
            story: '#546A7B',
            hobbies: '#07BEB8'
        };
        this.textColor = {
            mission: 'white',
            story: 'azure',
            hobbies: 'white'
        };
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about-component',
            template: __webpack_require__(/*! ./about.component.html */ "./src/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/components/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/components/about/hobbies/hobbies.component.css":
/*!************************************************************!*\
  !*** ./src/components/about/hobbies/hobbies.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    clear: both;\n    text-align: center;\n}\n\n.hobbies{\n    padding: 15px;\n    font-family: 'Noticia Text', serif;\n    font-size: 16px;\n    margin-top: 15px;\n    border-radius: 18px;  \n}"

/***/ }),

/***/ "./src/components/about/hobbies/hobbies.component.html":
/*!*************************************************************!*\
  !*** ./src/components/about/hobbies/hobbies.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hobbies\" [style.backgroundColor]=\"backgroundColor\" [style.color]=\"textColor\">\n    <div class=\"hobbies-section\">\n\n        <div class=\"hobbies\">\n            <h2>Hobbies</h2>\n            <p> In my spare time I enjoy hanging out with my family and friends. I am a huge dog lover so I'll usually go outside\n                and play with my dogs. I also enjoy reading and watching movies. My favorite tv show is Law &amp; Order:\n                SVU.\n            </p>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/components/about/hobbies/hobbies.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/about/hobbies/hobbies.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutHobbies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutHobbies", function() { return AboutHobbies; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/base.component */ "./src/components/common/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutHobbies = /** @class */ (function (_super) {
    __extends(AboutHobbies, _super);
    function AboutHobbies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutHobbies.prototype.ngOnInit = function () {
    };
    AboutHobbies = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about-hobbies',
            template: __webpack_require__(/*! ./hobbies.component.html */ "./src/components/about/hobbies/hobbies.component.html"),
            styles: [__webpack_require__(/*! ./hobbies.component.css */ "./src/components/about/hobbies/hobbies.component.css")]
        })
    ], AboutHobbies);
    return AboutHobbies;
}(_common_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/components/about/mission/about-mission.component.css":
/*!******************************************************************!*\
  !*** ./src/components/about/mission/about-mission.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mission{\n    padding: 15px;\n    font-family: 'Noticia Text', serif;\n    font-size: 16px;\n    margin-top: 15px;\n    border-radius: 18px;\n}\n\n"

/***/ }),

/***/ "./src/components/about/mission/about-mission.component.html":
/*!*******************************************************************!*\
  !*** ./src/components/about/mission/about-mission.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mission\" [style.backgroundColor]=\"backgroundColor\" [style.color]=\"textColor\">\n    <div class=\"mission-section\">\n\n        <div class=\"content-wrap\">\n            <h2>Mission</h2>\n            <p>To get a job as a Software/Web Developer and gain experience to become a professional developer so that I can\n                contribute to society and creatively solve problems.</p>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/components/about/mission/about-mission.component.ts":
/*!*****************************************************************!*\
  !*** ./src/components/about/mission/about-mission.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutMission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMission", function() { return AboutMission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/base.component */ "./src/components/common/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutMission = /** @class */ (function (_super) {
    __extends(AboutMission, _super);
    function AboutMission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutMission.prototype.ngOnInit = function () {
    };
    AboutMission = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about-mission',
            template: __webpack_require__(/*! ./about-mission.component.html */ "./src/components/about/mission/about-mission.component.html"),
            styles: [__webpack_require__(/*! ./about-mission.component.css */ "./src/components/about/mission/about-mission.component.css")]
        })
    ], AboutMission);
    return AboutMission;
}(_common_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/components/about/story/about-story.component.css":
/*!**************************************************************!*\
  !*** ./src/components/about/story/about-story.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh2{\n    text-align: center;\n    margin-top: 15px;\n}\n\n.story{\n    font-family: 'Noticia Text', serif;\n    font-size: 16px;\n    border-radius: 18px;\n    padding: 20px;\n    margin-top: 15px;\n}\n\n.puzzle{\n    width: 200px;\n    height: auto;\n    border-style: outset;\n    border-width: 5px;\n    float: right;\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n    margin-top: 100px;\n    margin-left: 20px;\n}"

/***/ }),

/***/ "./src/components/about/story/about-story.component.html":
/*!***************************************************************!*\
  !*** ./src/components/about/story/about-story.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"story\" [style.backgroundColor]=\"backgroundColor\" [style.color]=\"textColor\">\n\n    <div class=\"content-wrap\">\n        <h2>My Story</h2>\n        <p>I am an aspiring program developer at the University of Oklahoma with 3 years of experience in programming languages\n            such as Java, Python, and .NET. Recently, I have been teaching myselfAngular,Javascript and Typescript and created\n            this website. Unlike most people, my upbringing was very unconventional which gave me over 10 years of experience\n            in customer service. I've grown up in the hospitality industry (literally) for as long as I can remember. I started\n            answering phone calls and greeting customers at the mere age of 8 years old. Of course, it wasn't anything like\n            the Suite Life of Zack &amp; Cody but it was still pretty fun nonetheless! I met people from different backgrounds\n            every single day and still do.</p>\n\n        <p>I realized I wanted to go into the business field after taking a Marketing course at Francis Tuttle Technology Center\n            in my junior year. The program was a two-year program which I finished within a year and recieved my Associates\n            in Marketing &amp; Communication. On top of my classes, I also competed in the 2014 Oklahoma DECA State Competition\n            and won 4th place in my division. In my senior year of high school, like most students, I didn't know what I\n            wanted to be when I grew up. I took my first web design class and enjoyed it a lot. I liked it because of how\n            much creativity and coding was involved. It reminded me of a puzzle. I have always enjoyed doing puzzles since\n            they are challenging and coding was no different to me.\n\n            <img class=\"puzzle\" src=\"../../assets/img/puzzle.jpg\" alt=\"puzzle\">\n\n            <p>However, it wasn't until my sophomore year of college that I found my true passion when I took my first MIS class.\n                I wanted to combine technology, customer service, and business. Being the curious person I am, I walked up\n                to my professor on the first day of class and asked him if there was room for creativity in this major and\n                he said, \"Absolutely!\". It was right then and there that I knew what I wanted to be when I grew up. That\n                same day, I went to my advisor and declared Management Information Systems as my major and have enjoyed it\n                ever since!</p>\n    </div>\n</section>"

/***/ }),

/***/ "./src/components/about/story/about-story.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/about/story/about-story.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutStory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutStory", function() { return AboutStory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/base.component */ "./src/components/common/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutStory = /** @class */ (function (_super) {
    __extends(AboutStory, _super);
    function AboutStory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutStory.prototype.ngOnInit = function () {
    };
    AboutStory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about-story',
            template: __webpack_require__(/*! ./about-story.component.html */ "./src/components/about/story/about-story.component.html"),
            styles: [__webpack_require__(/*! ./about-story.component.css */ "./src/components/about/story/about-story.component.css")]
        })
    ], AboutStory);
    return AboutStory;
}(_common_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/components/common/base.component.ts":
/*!*************************************************!*\
  !*** ./src/components/common/base.component.ts ***!
  \*************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        //Default colors
        this.backgroundColor = 'white';
        this.textColor = 'black';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BaseComponent.prototype, "textColor", void 0);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/components/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/components/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n    background: black;\n    color: white;\n    font-size: 30px;\n    font-family: 'Noticia Text', serif;\n    padding-left: 5px;\n}\n\nfooter {\n    text-align: center;\n    font-size: 18px;\n}\n\nfooter h2 {\n    font-size: 60px;\n    color: white;\n    margin-top: 10px;\n    \n}\n\n.contactinfo a {\n    margin: 10px;\n    padding: 20px;\n    display: inline-block;\n}\n\n.linkedin{\n    color:white;\n}\n\n.email{\n    color:white;\n}\n\n.copyright {\n    font-size: 12px;\n    text-align: center;\n    margin: 0;\n}\n"

/***/ }),

/***/ "./src/components/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/components/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"content-wrap\">\n        <h2>Let's Keep in Touch!</h2>\n\n        <div id=\"contact\" class=\"contactinfo\">\n            <a href=\"mailto: Chandni.Raman@ou.edu\">\n                    <i class=\"email fas fa-envelope fa-3x\"></i>\n               </a>\n\n            <a href=\"https://www.linkedin.com/in/chandni-raman\" target=\"_blank\" class=\"linkedin\">\n                <i class=\"fab fa-linkedin fa-3x\" aria-hidden=\"true\">&nbsp;</i>\n            </a>\n        </div>\n    </div>\n\n</footer>"

/***/ }),

/***/ "./src/components/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/components/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer-component',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/components/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/components/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/components/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-icon{\n    margin-bottom: 5px;\n    border-radius: 26%;\n    border-style: solid;\n    margin-left: 5px;\n    margin-top: 5px;\n    background-color: #12c5fb;\n    border-style: outset;\n   \n}\n\n.home-icon:hover{\n    -webkit-animation: shake .5s infinite;\n            animation: shake .5s infinite;\n}\n\n.about-icon{\n    margin-bottom: 10px;\n    border-radius: 26%;\n    border-style: solid;\n    margin-left: 5px;\n    margin-top: 5px;\n    background-color: #12c5fb;\n    border-style: outset;\n}\n\n.about-icon:hover{\n    -webkit-animation: shake .5s infinite;\n            animation: shake .5s infinite;\n}\n\n.email-icon{\n    margin-bottom: 10px;\n    border-radius: 26%;\n    border-style: solid;\n    float: right;\n    margin-right: 5px;\n    margin-top: 5px;\n    background-color: #654D75;\n    border-style: outset;\n   \n}\n\n@-webkit-keyframes shake {\n    0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\n    10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\n    30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\n    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\n    50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\n    70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\n    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\n    90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\n    100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\n}\n\n@keyframes shake {\n    0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\n    10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\n    30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\n    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\n    50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\n    70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\n    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\n    90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\n    100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\n}\n\nnav {\n    text-align: left;\n    background: #C0C0C0;\n    border-radius: 7px;\n    /* background: rgb(240,65,43);\n    background: radial-gradient(circle, rgba(240,65,43,1) 0%, rgba(160,0,100,1) 100%), #ad0e64; */\n    top: 0;\n    width: 100%;\n    font-family: 'Noticia Text', serif;\n}\n\nnav a {\n    display: inline-block;\n    padding: 10px 20px;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-weight: 700;\n    color: white;\n    text-align: center;\n}\n"

/***/ }),

/***/ "./src/components/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/components/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home\">\n    <!--Navigation-->\n    <nav>\n        <a routerLink=\"/home\" class=\"home-icon\">\n            <i class=\"fas fa-home fa-2x\"></i>\n            <br>Home</a>\n\n        <a routerLink=\"/about\" class=\"about-icon\">\n            <i class=\"fas fa-question fa-2x \"></i>\n            <br>About</a>\n\n        <a href=\"mailto: Chandni.Raman@ou.edu\" class=\"email-icon\">\n            <i class=\"email fas fa-envelope fa-2x\"></i>\n            <br>E-mail</a>\n    </nav>\n\n</header>"

/***/ }),

/***/ "./src/components/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/components/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-component',
            template: __webpack_require__(/*! ./header.component.html */ "./src/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/components/home/education/home-education.component.css":
/*!********************************************************************!*\
  !*** ./src/components/home/education/home-education.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".education-icon{\n    color: black;\n \n}\n\nh2{\n    /* background-image: radial-gradient(circle, #d6311a, #c91332, #b60043, #9e004e, #830855); */\n    font-size: 30px;\n    font-family: 'Noticia Text', serif;\n    padding-left: 5px;\n    text-align: center;\n}\n\n.schools{\n    padding-left: 5px;\n}\n\n.education{\n    margin-top: 15px;\n    padding: 15px;\n    border-radius: 14px;\n}\n\n.education-icon{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/components/home/education/home-education.component.html":
/*!*********************************************************************!*\
  !*** ./src/components/home/education/home-education.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- // Education -->\n<section class=\"education\" [style.backgroundColor] = 'backgroundColor' [style.color] = \"textColor\" >\n    <div class=\"content-wrap\">\n        <div class=\"education-icon\">\n            <i class=\"fas fa-graduation-cap fa-6x\"></i>\n             <h2>Education</h2>\n        </div>\n        <div class=\"schools\">\n            <!-- School details: copy this whole block to add more schools. -->\n            <div>\n                <h3>Bachelor of Management Information Systems, Expected Gradation Date: December 2018</h3>\n                <p>University of Oklahoma</p>\n                <p>Major GPA: 3.0</p>\n            </div>\n            <div>\n                <p>Courses Included:</p>\n                <ul>\n                    <li>Python for Non-Majors</li>\n                    <li>Web Development and E-commerce</li>\n                    <li>Java Programming</li>\n\n                </ul>\n            </div>\n            <!-- End of school details. -->\n\n            <div class=\"content-wrap\">\n                <div>\n                    <h3>Marketing &amp; Communications Associate, May 2014</h3>\n                    <p class=\"uppercase\">Francis Tuttle Technology Center</p>\n                    <p>Major GPA: 3.5</p>\n                </div>\n\n                <div>\n                    <p>This was a two-year program which I finished within a year during my junior year of high school.</p>\n                    <ul>\n                        <li>Won 4th place in Oklahoma State DECA Competition</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/components/home/education/home-education.component.ts":
/*!*******************************************************************!*\
  !*** ./src/components/home/education/home-education.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeEducationComponent", function() { return HomeEducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/base.component */ "./src/components/common/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeEducationComponent = /** @class */ (function (_super) {
    __extends(HomeEducationComponent, _super);
    function HomeEducationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeEducationComponent.prototype.ngOnInit = function () {
    };
    HomeEducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-education-component',
            template: __webpack_require__(/*! ./home-education.component.html */ "./src/components/home/education/home-education.component.html"),
            styles: [__webpack_require__(/*! ./home-education.component.css */ "./src/components/home/education/home-education.component.css")]
        })
    ], HomeEducationComponent);
    return HomeEducationComponent;
}(_common_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/components/home/extras/home-extra.component.css":
/*!*************************************************************!*\
  !*** ./src/components/home/extras/home-extra.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    font-size: 30px;\n    font-family: 'Noticia Text', serif;\n    padding-left: 5px;\n    text-align: center;\n}\n.extracurricular{\n    margin-top: 15px;\n    border-radius: 14px;\n    padding-bottom: 10px;\n}\n.content-wrap{\n    padding: 10px;\n\n}\n.upb-img-container{\n    margin-top: -25px;\n    margin-right: 25px;\n    float:right;\n    -webkit-transform: rotate(20deg);\n            transform: rotate(20deg);\n}\n.upb-img{\n    width: 400px;\n    height: auto;\n    border: 8px white solid;  \n}\n.tape{\n    margin-left: 180px;\n    position: relative;\n    top: 10px;\n    z-index: 10;\n    background-color:rgba(280,255,255,.8);;\n    height: 40px;\n    width: 40px;\n    align-content: center;\n}\n/* Image 2 */\n.upb-img2-container{\n  \n    margin-right: 30px;\n    float:right;\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n    position: absolute;\n    right: 27px;\n    margin-top: 250px;\n}\n.htu-img{\n    width: 300px;\n    height: auto;\n    border: 8px white solid;  \n}\n.tape2{\n    margin-left: 135px;\n    position: relative;\n    top: 10px;\n    z-index: 10;\n    background-color:rgba(280,255,255,.8);;\n    height: 40px;\n    width: 40px;\n    align-content: center;\n}"

/***/ }),

/***/ "./src/components/home/extras/home-extra.component.html":
/*!**************************************************************!*\
  !*** ./src/components/home/extras/home-extra.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---Extracurriculars---->\n<section \n    class=\"extracurricular\" \n    [style.backgroundColor] = 'backgroundColor'\n    [style.color]= \"textColor\" >\n\n    <div class=\"content-wrap\">\n        <h2>Extracurriculars</h2>\n        <div class=\"extras\">\n            <div class=\"upb-img-container\">\n                <div class=\"tape\"></div>\n                <img \n                    class=\"upb-img\" \n                    src=\"../../assets/img/bigevent.jpg\">\n            </div>\n            <div class=\"upb-img2-container\">\n                    <div class=\"tape2\"></div>\n                    <img \n                        class=\"htu-img\" \n                        src=\"../../assets/img/ideas.JPG\">\n                </div>\n        <div class=\"content-wrap\">\n            <h3>Union Programming Board (UPB)</h3>\n            <p>Member since 2015</p>\n            <p>Student-led organization that hosts events for students to engage them.</p>\n            <ul>\n                <li>Brainstormed ideas for event planning</li>\n                <li>Set up and tear down for events in a timely manner</li>\n                <li>Collaborate with other members to create promotion schedule for events</li>\n                <li>Participated in the Big Event</li>\n            </ul>\n        </div>\n    </div>\n\n        <div class=\"content-wrap\">\n            <h3>Management Information Systems Student Association (MISSA)</h3>\n            <p>Member since 2015</p>\n            <p>Academic-related student organization.</p>\n            <ul>\n                <li>Participated by attending Lunch N' Learns and meetings</li>\n            </ul>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/components/home/extras/home-extra.component.ts":
/*!************************************************************!*\
  !*** ./src/components/home/extras/home-extra.component.ts ***!
  \************************************************************/
/*! exports provided: HomeExtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeExtraComponent", function() { return HomeExtraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/base.component */ "./src/components/common/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeExtraComponent = /** @class */ (function (_super) {
    __extends(HomeExtraComponent, _super);
    function HomeExtraComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backgroundColor = 'white';
        return _this;
    }
    HomeExtraComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HomeExtraComponent.prototype, "backgroundColor", void 0);
    HomeExtraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-extra-component',
            template: __webpack_require__(/*! ./home-extra.component.html */ "./src/components/home/extras/home-extra.component.html"),
            styles: [__webpack_require__(/*! ./home-extra.component.css */ "./src/components/home/extras/home-extra.component.css")]
        })
    ], HomeExtraComponent);
    return HomeExtraComponent;
}(_common_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/components/home/header/home-header.component.css":
/*!**************************************************************!*\
  !*** ./src/components/home/header/home-header.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrap{\n    padding-top:7px;\n}\n/* Header Elements */\n.home-header\n{\n    padding-bottom: 40px;\n    padding-right: 10px;\n    padding-left: 10px;\n    position: relative;\n    margin-top: 10px;\n    background-color: rgb(255, 184, 209);\n    color: rgb(86, 82, 84);\n    border-radius: 14px;\n}\n.home-header h1,\n.home-header h2 {\n    margin: 10px;\n}\n.home-header h1{\n    margin-top: -1px;\n    padding-top: 15px;\n    font-family: 'Noticia Text', serif;\n}\n.home-header h2 {\n    padding-bottom: 10px;\n}\nh4{\n    font-size: 1.2rem;\n    display: inline;\n}\n.profile-img {\n    border-radius: 50%;\n    border: 4px white dashed;\n    padding: 5px;\n    shape-image-threshold: 0.5;\n    shape-outside: circle(50%);\n    margin-right: 18px;\n    float: left;\n    height: 200px;   \n}\n.intro{\n    font-size: 1.2rem;\n}\n/* Skill Elements */\n.skillset{\n    display: initial;\n    margin-left: 5px;\n}\n.skill-tag{\n    background: purple;\n    color: white;\n    margin-left: 5px;\n    margin-right: 5px;\n    display: inline-block;\n    height: 45px;\n    border: 2px solid white;\n    border-radius: 10px;\n    padding: 10px;\n    border-style: outset;\n}\n/* Download Button Elements  */\n.btn-container {\n    text-align: right;\n    margin-right: 5px;\n    padding-top: 2rem;\n}\n.btn-download{\n    height: 50px;\n    font-size: 14px;\n    border-radius: 10%;\n    border-width: 2px;\n    font-size: 1.1rem;\n    background-color: lavenderblush;\n    color: darkslategrey;\n}\n.btn-download:hover{\n    transition: -webkit-transform .2s ease-in;\n    transition: transform .2s ease-in;\n    transition: transform .2s ease-in, -webkit-transform .2s ease-in;\n    -webkit-transform: scale(1.09);\n            transform: scale(1.09);\n}\n\n\n"

/***/ }),

/***/ "./src/components/home/header/home-header.component.html":
/*!***************************************************************!*\
  !*** ./src/components/home/header/home-header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home-header\" [style.backgroundColor]=\"backgroundColor\" [style.color]=\"textColor\">\n\n    <div class=\"content-wrap\">\n        <!--Image -->\n        <img class=\"profile-img\" src=\"../../assets/img/profile.jpg\" alt=\"Chandni Raman\">\n        <!--Intro-->\n        <div class=\"column-wide personal-intro\">\n            <h1>Chandni Raman</h1>\n            <p class=\"intro\">Hi there! Welcome to my website! My name is Chandni and I am a first-generation student at the University of\n                Oklahoma. My major is Management Information Systems (MIS). I also have an Associate's degree in Marketing\n                which I received in my junior year of high school through a vocational school. I am currently seeking a job\n                in Software/Web Development.</p>\n   \n                <h4>Featured Skills:</h4>\n            <p class=\"skillset\">   \n                <span class=\"skill-tag\">Angular</span>\n                <span class=\"skill-tag\">JavaScript</span>\n                <span class=\"skill-tag\">Java</span>\n                <span class=\"skill-tag\">HTML5</span>\n                <span class=\"skill-tag\">CSS</span>\n                <span class=\"skill-tag\">Python</span>\n                <span class=\"skill-tag\">.NET</span>\n            </p>\n        </div>\n\n    </div>\n\n    <div class=\"btn-container\">\n        <a href=\"/assets/resume.pdf\" download>\n            <button class=\"btn-download\">Download Resume PDF </button>\n        </a>\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/components/home/header/home-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/home/header/home-header.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHeaderComponent", function() { return HomeHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/base.component */ "./src/components/common/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeHeaderComponent = /** @class */ (function (_super) {
    __extends(HomeHeaderComponent, _super);
    function HomeHeaderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backgroundColor = 'white';
        return _this;
    }
    HomeHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HomeHeaderComponent.prototype, "backgroundColor", void 0);
    HomeHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-header-component',
            template: __webpack_require__(/*! ./home-header.component.html */ "./src/components/home/header/home-header.component.html"),
            styles: [__webpack_require__(/*! ./home-header.component.css */ "./src/components/home/header/home-header.component.css")]
        })
    ], HomeHeaderComponent);
    return HomeHeaderComponent;
}(_common_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/components/home/home.component.css":
/*!************************************************!*\
  !*** ./src/components/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/components/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<home-header-component \n    [backgroundColor]=\"bgColorScheme.header\"\n    [textColor] =\"textColor.header\">\n    </home-header-component>\n<main>\n    <home-work-component \n        [backgroundColor]=\"bgColorScheme.work\" \n        [textColor] =\"textColor.work\" >\n    </home-work-component>\n\n    <home-skill-component \n        [backgroundColor]=\"bgColorScheme.skills\" \n        [textColor] =\"textColor.skills\">\n    </home-skill-component>\n\n    <home-education-component \n        [backgroundColor]=\"bgColorScheme.education\"\n        [textColor] =\"textColor.education\">\n    </home-education-component>\n\n    <home-extra-component \n        [backgroundColor]=\"bgColorScheme.extracurricular\"\n        [textColor] =\"textColor.extracurricular\">\n    </home-extra-component>\n</main>\n\n"

/***/ }),

/***/ "./src/components/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/components/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.bgColorScheme = {
            education: '#14A098',
            extracurricular: '#0D1B2A',
            header: '#FFB8D1 ',
            skills: '#CB2D6f',
            work: '#0F292F '
        };
        this.textColor = {
            education: 'lightcyan',
            extracurricular: 'lavender',
            header: '#565254',
            skills: 'whitesmoke',
            work: 'darkgrey'
        };
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-component',
            template: __webpack_require__(/*! ./home.component.html */ "./src/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/components/home/skills/home-skills.component.tss/home-skills.component.css":
/*!****************************************************************************************!*\
  !*** ./src/components/home/skills/home-skills.component.tss/home-skills.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    font-family: 'Noticia Text', serif;\n    padding-left: 5px;\n    font-size: 30px;\n    text-align: center;\n}\n\nh4{\n    font-family: 'Noticia Text', serif;\n}\n\nh5{\n    font-family: 'Noticia Text', serif;\n}\n\n.language-list > li,.framework-list>li ,.tools-list>li{\n    display: inline-block;\n    margin: 3px;\n}\n\n.language-skill{\n    background: lightseagreen;\n    color: white;\n    margin-left: 5px;\n    margin-right: 5px;\n    display: inline-block;\n    height: 45px;\n    border: 2px solid white;\n    border-radius: 10px;\n    padding: 10px;\n    border-style: outset;\n}\n\n.framework-skill{\n    background: burlywood;\n    color: white;\n    margin-left: 5px;\n    margin-right: 5px;\n    display: inline-block;\n    height: 45px;\n    border: 2px solid white;\n    border-radius: 10px;\n    padding: 10px;\n    border-style: outset;\n}\n\n.tool-skill{\n    background: lightcoral;\n    color: white;\n    margin-left: 5px;\n    margin-right: 5px;\n    display: inline-block;\n    height: 45px;\n    border: 2px solid white;\n    border-radius: 10px;\n    padding: 10px;\n    border-style: outset;\n}\n\n.skills{\n    padding: 15px;\n    margin-top: 15px;\n    font-size: 18px;\n    border-radius: 14px;\n}\n\n.skills-icon{  \n    text-align: center;\n}\n\n.skills-icon > i{\n    color: #13c520f2;\n}\n\n\n\n"

/***/ }),

/***/ "./src/components/home/skills/home-skills.component.tss/home-skills.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/components/home/skills/home-skills.component.tss/home-skills.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--//Skills -->\n<section class=\"skills\" [style.backgroundColor]='backgroundColor' [style.color]=\"textColor\">\n    <div class=\"content-wrap\">\n        <div class=\"skills-icon\">\n            <i class=\"fas fa-check fa-8x\"></i>\n\n            <h2>Qualifications</h2>\n        </div>\n        <ul>\n            <!-- <li>Proficient in Angular, JavaScript, SQL, Java, HTML5, CSS, Python, .NET</li> -->\n\n\n        </ul>\n    </div>\n    <div class=\"technical-container\">\n        <h4>Technical Skills</h4>\n        <div class=\"container\">\n\n            <div>\n                <h5>Languages</h5>\n                <ul class=\"language-list\">\n                    <li class=\"language-skill\">JavaScript</li>\n                    <li class=\"language-skill\">Java</li>\n                    <li class=\"language-skill\">Python</li>\n                    <li class=\"language-skill\">CSS</li>\n                    <li class=\"language-skill\">HTML</li>\n                    <li class=\"language-skill\">SQL</li>\n                </ul>\n            </div>\n            <div>\n                <h5> Frameworks</h5>\n                <ul class=\"framework-list\">\n                    <li class=\"framework-skill\">Angular</li>\n                    <li class=\"framework-skill\">.NET</li>\n                    <li class=\"framework-skill\">Node</li>\n                    <li class=\"framework-skill\">Bootstrap</li>\n                </ul>\n            </div>\n            <div>\n                <h5> Tools</h5>\n                <ul class=\"tools-list\">\n                    <li class=\"tool-skill\" >GitHub</li>\n                    <li class=\"tool-skill\">Tableau</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"personal-container\">\n            <h4>Personal Skills</h4>\n            <div class=\"personalskills\">\n                <ul class=\"personal-list\">\n                    <li>Adapt to different environments</li>\n                    <li>Experience in Customer Service</li>\n                    <li>Work under pressure</li>\n\n                    <li>Fluent in speaking Gujarati</li>\n                    <li>Knowledgable in Microsoft Suite</li>\n                    <li>Proficient in Social Media Marketing</li>\n                </ul>\n            </div>\n        </div>\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/components/home/skills/home-skills.component.tss/home-skills.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/components/home/skills/home-skills.component.tss/home-skills.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HomeSkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSkillComponent", function() { return HomeSkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/base.component */ "./src/components/common/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeSkillComponent = /** @class */ (function (_super) {
    __extends(HomeSkillComponent, _super);
    function HomeSkillComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backgroundColor = 'white';
        return _this;
    }
    HomeSkillComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HomeSkillComponent.prototype, "backgroundColor", void 0);
    HomeSkillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-skill-component',
            template: __webpack_require__(/*! ./home-skills.component.html */ "./src/components/home/skills/home-skills.component.tss/home-skills.component.html"),
            styles: [__webpack_require__(/*! ./home-skills.component.css */ "./src/components/home/skills/home-skills.component.tss/home-skills.component.css")]
        })
    ], HomeSkillComponent);
    return HomeSkillComponent;
}(_common_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/components/home/work/home-work.component.css":
/*!**********************************************************!*\
  !*** ./src/components/home/work/home-work.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".work{\n  border-radius: 14px;\n}\nh2{\n    font-size: 30px;\n    font-family: 'Noticia Text', serif;\n    padding-left: 5px;\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 20px;\n}\n/* .jobs{\n    padding-left: 5px;\n} */\nh4 a{\n  color: darkgrey;\n}\n.panel-body{\n  padding-bottom: 10px;\n}\n.content-wrap{\n    padding: 15px;\n    font-family: 'Noticia Text', serif;\n    font-size: 16px;\n    margin-top: 15px;\n    border-radius: 18px\n}\n.work-icon{\n    padding-top: 30px;\n    text-align: center;\n    border: 6px solid;\n    width: 165px;\n    border-radius: 100%;\n    height: 135px;\n    margin: auto;\n    background: gold;\n    color: #ECB617;\n    box-shadow: 5px 0px #B27D11;\n}\n/* WebKit and Opera browsers */\n@-webkit-keyframes spinner {\n    from { -webkit-transform: rotateY(0deg);    }\n    to   { -webkit-transform: rotateY(-360deg); }\n  }\n/* all other browsers */\n@keyframes spinner {\n    from {\n      -webkit-transform: rotateY(0deg);\n              transform: rotateY(0deg);\n    }\n    to {\n      -webkit-transform: rotateY(-360deg);\n              transform: rotateY(-360deg);\n    }\n  }\n#spinner {\n    -webkit-animation-name: spinner;\n    -webkit-animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-duration: 5s;\n\n    animation-name: spinner;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    -webkit-animation-duration: 6s;\n            animation-duration: 6s;\n\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n  }\n#spinner:hover {\n    -webkit-animation-play-state: paused;\n    animation-play-state: paused;\n  }\n\n "

/***/ }),

/***/ "./src/components/home/work/home-work.component.html":
/*!***********************************************************!*\
  !*** ./src/components/home/work/home-work.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- // Work Experience -->\n<section class=\"work\" [style.backgroundColor]='backgroundColor' [style.color]='textColor'>\n    <div class=\"content-wrap\">\n        <div style=\"\n            text-align:  center;\n            display:  flex;\">\n            <div id=\"spinner\" class=\"work-icon\">\n                \"\n                <i class=\"fas fa-briefcase fa-6x\" style=\"text-align: center;margin-top:  -20px;\"></i>\n            </div>\n        </div>\n\n        <h2>Work Experience</h2>\n\n        <div class=\"container-jobs\">\n            <div class=\"panel-group\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <a data-toggle=\"collapse\" href=\"#job1\">Administrative Office Assistant <i class=\"fas fa-sort-down arrow\"></i></a>\n                        </h4>\n                    </div>\n                    <div id=\"job1\" class=\"panel-collapse collapse\">\n                        <p class=\"uppercase\"> OU Writing Center</p>\n                        <p>August 2017 - Present</p>\n                        <div class=\"panel-body\">Greet guests in friendly manner, check in customers and schedule appointments using data entry skills,\n                            show eagerness to learn by asking question, set up workstation in various locations. Use problem-solving\n                            skills to resolve conflicts between consultants and writers, troubleshoot technical difficulties\n                            with devices such as IPads, and computers.\n                        </div>\n                    </div>\n                </div>\n                <!-- end of Job Details block. -->\n                <div class=\"panel-group\"></div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <div class=\"panel-title\">\n                            <h4>\n                                <a data-toggle=\"collapse\" href=\"#job2\">Crew Member <i class=\"fas fa-sort-down arrow\"></i></a>\n                            </h4>\n                        </div>\n                        <div id=\"job2\" class=\"panel-collapse collapse\">\n                            <p class=\"uppercase\">Braum's</p>\n                            <p>May 2012 - August 2016</p>\n                            <div class=\"panel-body\">\n                                Greeted customers by welcoming them with a smile, demonstrated leadership by training new workers, explaining and demonstrating\n                                tasks, packed groceries in a quick and timely manner, managed inventory by counting items\n                                using quantitative skills, demonstrated reliability by working overtime when requested by\n                                supervisors.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"panel-group\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">\n                            <div class=\"panel-title\">\n                                <h4>\n                                    <a data-toggle=\"collapse\" href=\"#job3\">Store Associate<i class=\"fas fa-sort-down arrow\"></i></a>\n                                </h4>\n                            </div>\n                            <div id=\"job3\" class=\"panel-collapse collapse\">\n                                <p class=\"uppercase\">TJ Maxx</p>\n                                <p>February 2015 - June 2015</p>\n                                <div class=\"panel-body\">\n                                    Increased sales by persuading customers to sign up for the store’s rewards program, handled monetary cash transactions while\n                                    engaging in a conversation with customers, stocked and organized shelves in a neat and\n                                    organized manner, observed customers to prevent theft in a subtle and friendly manner.\n                                    <ul>\n                                        <li>Received recognition for increasing sales by 5&#37;</li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/components/home/work/home-work.component.ts":
/*!*********************************************************!*\
  !*** ./src/components/home/work/home-work.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeWorkComponent", function() { return HomeWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/base.component */ "./src/components/common/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeWorkComponent = /** @class */ (function (_super) {
    __extends(HomeWorkComponent, _super);
    function HomeWorkComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeWorkComponent.prototype.ngOnInit = function () {
    };
    HomeWorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-work-component',
            template: __webpack_require__(/*! ./home-work.component.html */ "./src/components/home/work/home-work.component.html"),
            styles: [__webpack_require__(/*! ./home-work.component.css */ "./src/components/home/work/home-work.component.css")]
        })
    ], HomeWorkComponent);
    return HomeWorkComponent;
}(_common_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/common.service.ts":
/*!****************************************!*\
  !*** ./src/services/common.service.ts ***!
  \****************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    CommonService.prototype.getUserName = function () {
        return "Chandni Raman";
    };
    CommonService.prototype.getEmail = function () {
        return "email@website.com";
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chan/Documents/ResumeWeb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map