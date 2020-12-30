/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _content_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './index.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null,
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_content_App__WEBPACK_IMPORTED_MODULE_1__.default, null)), document.getElementById('root'));
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (false) {}


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _pages_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_pages_Page__WEBPACK_IMPORTED_MODULE_1__.default, { page: "Projects" }), document.querySelector('#main'));


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pages": () => /* binding */ pages,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SiteNavigator_SiteNavigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _page_me_MeController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _page_posts_PostsController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _page_projects_ProjectsController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var pages = {
    ME: 'Me',
    POSTS: 'Posts',
    PROJECTS: 'Projects'
};
;
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { page: pages.PROJECTS };
        _this.handlePageChange = _this.handlePageChange.bind(_this); // bind this function to specifically this class, if referenced it will come back to here
        return _this;
    }
    //page should be element of const pages (defined above)
    Page.prototype.handlePageChange = function (newPageAsString) {
        if (newPageAsString === pages.ME ||
            newPageAsString === pages.POSTS ||
            newPageAsString === pages.PROJECTS) {
            this.setState({ page: newPageAsString });
        }
    };
    Page.prototype.render = function () {
        var currentPageAsComponent = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null);
        switch (this.state.page) {
            case pages.ME:
                currentPageAsComponent = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_page_me_MeController__WEBPACK_IMPORTED_MODULE_3__.default, null);
                break;
            case pages.POSTS:
                currentPageAsComponent = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_page_posts_PostsController__WEBPACK_IMPORTED_MODULE_4__.default, null);
                break;
            case pages.PROJECTS:
                currentPageAsComponent = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_page_projects_ProjectsController__WEBPACK_IMPORTED_MODULE_5__.default, null);
                break;
            default:
                break;
        }
        return (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "site-navigator" },
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_SiteNavigator_SiteNavigator__WEBPACK_IMPORTED_MODULE_2__.default, { pageChangeParentReference: this.handlePageChange }),
            currentPageAsComponent));
    };
    return Page;
}(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),
/* 3 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (2:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| /* imported and used in Page.tsx */\n> .site-navigator {\n|     margin: auto;\n|     width: 90%;");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



;
;
var ProjectsController = /** @class */ (function (_super) {
    __extends(ProjectsController, _super);
    function ProjectsController(props) {
        return _super.call(this, props) || this;
    }
    ProjectsController.prototype.render = function () {
        var _this = this;
        return (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "site-navigator-container" },
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "site-navigator-flex-wrapper" }, Object.keys(_Page__WEBPACK_IMPORTED_MODULE_1__.pages).map(function (pageKey, index) {
                return (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "site-navigator-individual-button" },
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", { className: "site-navigator-individual-button-tag", onClick: function () {
                            return _this.props.pageChangeParentReference(_Page__WEBPACK_IMPORTED_MODULE_1__.pages[pageKey]);
                        } }, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", { className: "site-navigator-individual-button-sub-tag" }, _Page__WEBPACK_IMPORTED_MODULE_1__.pages[pageKey]))));
            }))));
    };
    return ProjectsController;
}(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsController);


/***/ }),
/* 5 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .site-navigator-container {\n|     background: #ffffffff;\n|     padding: 10px 10px 10px 10px;");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _assets_Me_Data_data_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_IMG_6700_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _assets_images_IMG_6700_jpeg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_IMG_6700_jpeg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_github_logo_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _assets_images_github_logo_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_github_logo_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_twitter_logo_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _assets_images_twitter_logo_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_twitter_logo_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_linkedin_logo_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _assets_images_linkedin_logo_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_linkedin_logo_jpeg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_Me_Data_data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


//images




//content that is imported from a json

;
;
var text_data = /*#__PURE__*/ (_assets_Me_Data_data_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache || (_assets_Me_Data_data_json__WEBPACK_IMPORTED_MODULE_6___namespace_cache = __webpack_require__.t(_assets_Me_Data_data_json__WEBPACK_IMPORTED_MODULE_6__, 2)));
var MeController = /** @class */ (function (_super) {
    __extends(MeController, _super);
    function MeController(props) {
        return _super.call(this, props) || this;
    }
    MeController.prototype.render = function () {
        return (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "me-page-flexbox-wrapper" },
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "me-bio-column" },
                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null,
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("img", { className: "me-bio-column-image", src: (_assets_images_IMG_6700_jpeg__WEBPACK_IMPORTED_MODULE_2___default()), alt: "photo of me on the pacific coast" })),
                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "me-bio-column-bio" },
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", null, "Creator, student, scholar, engineer."),
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", null, "Seeking Full-stack, Front-end, Machine Learning, Research early career engineering roles"),
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "me-bio-column-links" },
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null,
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", { href: "https://github.com/BPDanek" },
                                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("img", { className: "Github-link", src: (_assets_images_github_logo_jpeg__WEBPACK_IMPORTED_MODULE_3___default()) }))),
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null,
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", { href: "https://www.linkedin.com/in/benjaminpdanek/" },
                                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("img", { className: "LinkedIn-link", src: (_assets_images_linkedin_logo_jpeg__WEBPACK_IMPORTED_MODULE_5___default()) }))),
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null,
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", { href: "https://twitter.com/Benjamindanek" },
                                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("img", { className: "Twitter-link", src: (_assets_images_twitter_logo_jpeg__WEBPACK_IMPORTED_MODULE_4___default()) }))))),
                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "me-navigator-for-content-column" },
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", { href: "#about" },
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h4", null, "About")),
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", { href: "#courses" },
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h4", null, "Courses")),
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", { href: "#goals" },
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h4", null, "Goals")))),
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "me-content-column" },
                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { id: "about" },
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h2", null, "About"),
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", null, text_data.about_section)),
                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { id: "courses" },
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h2", null, "Courses"),
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, text_data.courses_section.map(function (course_data) {
                        return (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null,
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h3", null, course_data[0]),
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", null, course_data[1])));
                    }))),
                Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { id: "goals" },
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h2", null, "Goals"),
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, text_data.goals_section.map(function (goal_data) {
                        return (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null,
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h3", null, goal_data[0]),
                            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", null, goal_data[1])));
                    }))))));
    };
    return MeController;
}(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeController);


/***/ }),
/* 7 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .me-page-flexbox-wrapper {\n|     display: flex;\n|     font-family: Georgia;");

/***/ }),
/* 8 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),
/* 9 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),
/* 10 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),
/* 11 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '�' (1:4)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"about_section\":\"about me section (from json)\",\"courses_section\":[[\"course 1 title\",\"Lorem ipsum dolor sit amet, pri ea case simul, eros ullamcorper ex sit. Ne usu facete tincidunt, noster lucilius no per. Zril apeirian elaboraret est. Lorem ipsum dolor sit amet, pri ea case simul, eros ullamcorper ex sit. Ne usu facete tincidunt, noster lucilius no per. Zril apeirian elaboraret est.\"],[\"course 2 title\",\"Lorem ipsum dolor sit amet, adipiscing interpretaris mediocritatem vel eu. Ad vis alia disputando, per id noster comprehensam. Mei eu aliquid maiestatis, nulla lucilius reprehendunt. Lorem ipsum dolor sit amet, adipiscing interpretaris mediocritatem vel eu. Ad vis alia disputando, per id noster comprehensam. Mei eu aliquid maiestatis, nulla lucilius reprehendunt.\"],[\"course 3 title\",\"Lorem ipsum dolor sit amet, possim omnium vix ne. Unum prompta eloquentiam no duo, per an tation scripta malorum. Pertinax persequeris vim te. Congue virtute.       \\\"Lorem ipsum dolor sit amet, possim omnium vix ne. Unum prompta eloquentiam no duo, per an tation scripta malorum. Pertinax persequeris vim te. Congue virtute.\"],[\"course 4 title\",\"Lorem ipsum dolor sit amet, no agam nibh democritum duo. Option scripta an per, mel legere accusata id, cu has ancillae offendit. Sit cu erant. Lorem ipsum dolor sit amet, no agam nibh democritum duo. Option scripta an per, mel legere accusata id, cu has ancillae offendit. Sit cu erant.\"]],\"goals_section\":[[\"goal 1 title\",\"Est ex virtute oportere splendide, alii utamur suavitate duo ad, sit etiam dicit in. Mea an nostro prompta. Tation verear has no. An animal tamquam. Lorem ipsum dolor sit amet, dolores temporibus te vim. Legere vituperata ei pri, duo falli everti cu. Illud nulla invidunt cu vis, vel at nibh nulla mnesarchum. Vis an ocurreret scriptorem mediocritatem, delectus liberavisse quo te. Sit ad aliquid noluisse, sed cibo iriure id. Meliore quaestio petentium pri id, partem suscipiantur est ex.\"],[\"goal 2 title\",\"Sea cu animal consequat, stet euripidis cum at. Erant repudiare nec id, cibo commune at his, pri legere recteque in. Mei recusabo mandamus te, omnis. Lorem ipsum dolor sit amet, eu duis persecuti necessitatibus eum, animal constituam sea ad, nec error mediocrem ei. Id scripta deserunt sed, detraxit assueverit omittantur no duo. Equidem adipisci tacimates ne cum, ea aperiri euripidis liberavisse vim, graece oportere necessitatibus his ex. Ad quo regione tractatos.\\n\\nVix scripta ceteros convenire in, et tota mentitum definitiones sed. Quo in porro utamur.\"]]}");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


;
;
var PostsController = /** @class */ (function (_super) {
    __extends(PostsController, _super);
    function PostsController(props) {
        return _super.call(this, props) || this;
    }
    PostsController.prototype.render = function () {
        return (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "posts-controller" },
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h3", null, "I have no posts to show off for now, come back soon because this will be the next Hacker News")));
    };
    return PostsController;
}(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsController);


/***/ }),
/* 14 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .posts-controller {\n|     font-family: Arial;\n| }");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _assets_Projects_Data_data_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_Projects_Data_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var projects_text_data = /*#__PURE__*/ (_assets_Projects_Data_data_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_assets_Projects_Data_data_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_assets_Projects_Data_data_json__WEBPACK_IMPORTED_MODULE_2__, 2)));
;
;
var ProjectsController = /** @class */ (function (_super) {
    __extends(ProjectsController, _super);
    function ProjectsController(props) {
        var _this = _super.call(this, props) || this;
        if (projects_text_data.projects.length > 0) {
            _this.state = { current_post_index: 0 };
        }
        else {
            _this.state = { current_post_index: -1 }; // in case there are no projects to post about
        }
        return _this;
    }
    ProjectsController.prototype.renderProjectsNavigatorColumn = function () {
        // need to check if there are any projects to list; ideally this never happens since we should always have a "home" post
        var _this = this;
        var projectsNavigationColumnElement = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h4", null, "There are no projects");
        if (this.state.current_post_index != -1) {
            projectsNavigationColumnElement =
                (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, projects_text_data.projects.map(function (post_data, post_index) {
                    return (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", { className: "projects-page-navigation-column-button-tag", onClick: function () {
                            _this.setState({ current_post_index: post_index });
                        } },
                        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", { className: "projects-page-navigation-column-button-sub-tag" }, post_data[0])));
                })));
        }
        return (projectsNavigationColumnElement);
    };
    // renders a post at the index
    ProjectsController.prototype.renderPost = function () {
        return (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null,
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h2", null, projects_text_data.projects[this.state.current_post_index][0]),
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", null, projects_text_data.projects[this.state.current_post_index][1])));
    };
    ProjectsController.prototype.render = function () {
        return (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "projects-page-flexbox-wrapper" },
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "projects-page-navigation-column" }, this.renderProjectsNavigatorColumn()),
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", { className: "projects-page-content-column" }, this.renderPost())));
    };
    return ProjectsController;
}(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsController);


/***/ }),
/* 16 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> .projects-page-flexbox-wrapper {\n|     display: flex;\n|     font-family: Arial;");

/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"projects\":[[\"Lorem ipsum 1\",\"Dolor sit amet, possit placerat complectitur per no, ut sit quem alia dicit. Sed ut populo corrumpit abhorreant, vocent prodesset vis cu, pro suas viderer forensibus ei. Eos ea scriptorem vituperatoribus, ut postea omittam vel, eum liber accommodare et. \\n\\tUnum periculis mea et, ei his error integre, eu nam comprehensam necessitatibus. Eos no alii ridens, oratio omittantur pri te, qui illud fuisset id.\\n\\nEt torquatos tincidunt cotidieque duo, nam ea sadipscing consectetuer, solum ignota vel eu. Prima primis mel an, ex per dicat utinam omittam. Ex vide omittantur qui, vel in labores adversarium. Sea percipitur cotidieque et, sed viris incorrupte et. Cum cu assum postea, duo ei quod tibique verterem, rebum constituam mediocritatem has in.\\n\\nMeis prodesset id eam. Prima verear aperiam pro an, ex simul dolorem est. Ei nam novum audiam menandri, gubergren efficiantur eum ei, est at meis laoreet feugait. An aperiam voluptatibus eum. Mea ad equidem principes conclusionemque. Te meliore scripserit vim.\\n\\nQuo ut facete mandamus. Eu his clita salutandi torquatos, graeci iracundia evertitur est ne. Error consequat abhorreant mea ex. Mandamus argumentum eam ne, cibo consul labore sed ad. Sea dolores delectus no, no cum nonumy eirmod expetendis.\\n\\nSolet explicari constituto ex has, est in gloriatur interpretaris mediocritatem, errem facete intellegam qui eu. Sed id quas consequuntur, viris facete euripidis nec in, vix ferri pericula an. Ignota putent usu an, ex mea exerci nusquam tibique. Patrioque temporibus at duo.\\n\\nUsu facer deseruisse ad. Eu his mollis aeterno disputando, ei nec scaevola dissentiet. Vim et cibo placerat intellegat, ei eam dictas gubergren torquatos. Praesent conceptam nec cu. Ei has vidisse numquam, molestie volutpat imperdiet ei pro.\\n\\nHis ei brute tollit voluptatum, lorem explicari eos id, at adipiscing consectetuer est. Ei agam decore rationibus has. Quaeque phaedrum nam te, suavitate tincidunt vis at, quo eu quando luptatum. Cum vitae iisque voluptatum ea. Cu magna mollis vim, agam oporteat dissentias his ut, duis nulla persequeris est ut. No augue melius adversarium sit.\\n\\nEum in inermis accusamus gubergren, falli mucius eos ut. Detraxit assentior in has. Pro ei ludus theophrastus. Ne eum exerci laudem omnesque. Habeo quando no nec, nec cu repudiare posidonium dissentias, regione propriae accusamus ei duo.\\n\\nPer ne nulla phaedrum. Aeque choro veniam mea et, qualisque definiebas an has. Persius euismod propriae vis id, mundi exerci sanctus ne vel. Duo ei erat efficiendi, duo eu cetero nostrum liberavisse.\\n\\nSimul elitr sit an, nec admodum maiorum lobortis ne. At mei probatus praesent, est error dolore petentium in, per ex inimicus iracundia sadipscing. Quo simul molestie scripserit ex, eu his illud legendos salutandi. Nihil posidonium has ea.\\n\\nInvidunt vivendum te vim, sint natum dignissim quo ex. Duo sint patrioque dissentiet ea. In veritus consetetur vel, est eu deserunt iracundia, est ut amet congue. Fabulas prodesset sit ut, at duis sonet qui. Esse ferri at pro. Pro cu impedit civibus abhorreant, mea nemore eligendi no.\\n\\nVerear civibus liberavisse no est, mentitum apeirian ex pri. Nec wisi expetenda et. Dolores luptatum eu vel. Ex nostrud explicari eum. Vim vidit.\"],[\"Lorem ipsum 2\",\"Ex cum libris molestie referrentur. Iudico persius definitiones sea te, pro scripta prodesset et, ubique graecis deleniti duo ut. Erat elitr iudico mel eu, vis eu vide numquam. Te nibh tantas corrumpit sit. Mei amet nibh ad. Atqui detracto honestatis nam ad.\\n\\nEum te fierent propriae iudicabit. Urbanitas definitiones te pro, torquatos complectitur eu vel. Vim augue nostro te, ei vim essent aliquam, eu labores facilisi omittantur quo. Eos ei liber choro persequeris, enim aliquando quaerendum ut est, dignissim vituperata ad sea. Quo ei erant omnesque definiebas, vis fierent vulputate te, est cu probo magna vivendum.\\n\\nEx vim facer scaevola adolescens, sed ut summo percipitur consequuntur, nam ad graeco voluptaria. No dissentiet contentiones vis, te nec suscipit accommodare, per at soleat commodo sapientem. Ut movet nonumes sea, et quo solum fuisset laboramus. Ex vis utamur pertinax, quo an adipisci recusabo consetetur. In est meliore detracto definitionem, sea meis graecis vulputate ut, omnis insolens eam ut.\\n\\nUsu eu mentitum imperdiet. Ne consul putant quaestio vix, eu vel volumus recusabo, posidonium consequuntur nam cu. Ne dolore qualisque definitionem per, ne sit wisi omnis, cum mutat rationibus reformidans cu. At tempor altera reprehendunt quo, has et enim similique.\\n\\nPri gloriatur consectetuer at, mei et alia ipsum dicat. Mea congue incorrupte ut, no summo intellegam quaerendum qui. Has id tota exerci probatus. Utamur posidonium vis ex.\\n\\nVel quas novum expetendis an, sed ea omnis illud, at sed justo solet inciderint. Quodsi legendos ea has, diceret blandit has te. Falli petentium dissentias et vim, ut mei consetetur consectetuer, nam feugait contentiones id. In pri diam ullum. Nam no porro vidisse sadipscing, causae vidisse cum eu, ius soleat similique intellegam ea.\\n\\nAmet modo mutat ea his. Omnis posidonium eu vim, sed aliquam consequat eu. Graeco copiosae partiendo te sea, in mel exerci fierent consequuntur, te mei solum discere appetere. Modo sonet incorrupte usu an, errem veniam nullam ne eam. Bonorum vivendo incorrupte vix at. Eu usu munere semper euripidis. Ne oratio mucius habemus pri, duo eu nemore pertinacia, postulant torquatos interesset id ius.\\n\\nCu has error nemore epicuri. An eam similique argumentum, erant nostrud no vix, has no antiopam deterruisset. Vix eu iisque blandit, quo movet sanctus et. Velit explicari an nam. Mel ut insolens moderatius. Quo ei utinam labores, dicta tation ut sit. Tantas melius ei pro, no consul partem adipisci his.\\n\\nAn eos duis dicta scripta, constituto scriptorem ex nam. Ut delicata recteque scripserit vis, ne nihil clita offendit nam, no molestie mediocrem sea. Ex porro reprehendunt est, iusto epicuri his an. Solum persequeris cu nec, ut sea amet semper, cibo exerci dolore ut sea.\\n\\nDebet facete qui cu, nusquam ocurreret eu ius. Tale vocent dolores est ne. Ad atqui vidisse est, delenit invenire voluptaria ea vim, mutat nostro consequat eum te. Ad quis necessitatibus nec, vis in praesent explicari repudiandae, erat simul invidunt ea usu.\\n\\nHinc fugit virtute nam eu, ex scripta aperiri deseruisse sit, at nibh consulatu conceptam sed. Et eam nostrud dissentiunt, eam te inani populo splendide. Mel eu augue singulis.\"],[\"Lorem ipsum 3\",\"Mei blandit salutatus ei. Ne est commune constituto, nec at harum dicant. Euismod perfecto ut mel, ei duo blandit platonem, has platonem temporibus signiferumque et. Mea no audiam lobortis consetetur, et viderer volumus vel. Id cum dicit tamquam scribentur, ea eum sale impedit.\\n\\nIdque saperet laboramus ut duo. Te denique antiopam eum, ne velit fabulas mel. Et iuvaret fierent eos. Mea tempor voluptatibus ne, mea dicam labore gubergren an. Officiis electram cotidieque ex ius, exerci ceteros ne sit, graece ridens inciderint mei at. Ei autem utamur inermis usu, pri ne quem case ceteros, modus feugiat appellantur est et.\\n\\nCu hendrerit intellegebat vel. Sea semper detracto qualisque ne. Summo partiendo est ad, cum vocent placerat euripidis ne. An mea minim fuisset reprehendunt, ius ei eligendi senserit, ne ludus qualisque posidonium ius. Qui dolore accommodare et, et eam phaedrum democritum. Facete prodesset mel ei, id eum doctus meliore delicatissimi, his eu denique tacimates.\\n\\nId labore eloquentiam reformidans has, et liberavisse complectitur eam, at choro similique dissentiet eum. Qui commodo equidem et, quas oportere scribentur eu eam. Eos audire noluisse et. Id sumo semper sit, prima utroque signiferumque ne sea, ad eam mundi soluta rationibus. Ex cibo harum salutandi qui, mel ne probo melius suscipit, falli cetero cu nam. Sea eu quis vero dicta.\\n\\nTe sanctus habemus gloriatur vix, affert latine tritani usu ut. Et his quas tincidunt, eam et esse vero corrumpit. Vel in mollis equidem labores. Sale officiis iudicabit id mea, ad erroribus consetetur sit. Unum exerci sapientem usu et, ut dico audiam adipiscing usu. Pri ne veri omnis, error persius phaedrum duo ex.\\n\\nAn pro partem intellegebat, decore eleifend explicari cu ius, malis luptatum periculis ut mea. No quo etiam denique voluptaria, pro vero docendi no, et est inani omittam. Quo choro quidam ad, qui latine delectus philosophia id, ad illum accumsan pri. Duo vitae partiendo an.\\n\\nSententiae argumentum has id. Eu etiam aperiam pri, sonet facilisi prodesset no usu. Habeo eirmod utroque ad cum, legimus efficiantur te sea, at facilis oporteat expetenda mei. Est at fabulas fuisset dissentias, ad brute bonorum cum, idque copiosae similique sit in. Duo dictas tamquam id. Mel mollis omittantur ut, viris tincidunt sed no.\\n\\nVero adolescens ut has. At propriae accusata postulant sed, at pro eius vituperata percipitur, et cum consulatu liberavisse. Oblique aliquid debitis vel te. Sit ut debet discere. Sed et mollis atomorum tincidunt, zril graecis ea nec.\\n\\nAliquam contentiones vel ei. Ut cum velit labores praesent, ex quot porro sed, ut simul maiestatis intellegebat usu. Vitae saperet sapientem cu mel. Eu quas vocibus est, iudico feugiat minimum ea sit.\\n\\nEi illum doming nonumes usu, mei eius partem at. Tale soluta dissentias at vis, cu mei ignota sapientem sadipscing, te probo dicit elaboraret pro. Sed cu timeam audire. Mundi delicatissimi ea sed. Cu everti postulant scripserit per, wisi graeci ut cum, quo solet dolores maiestatis ne.\\n\\nPri an ipsum feugait. Vel vivendo efficiendi et, maluisset accusamus has ea, has deleniti intellegam suscipiantur et. Ea pri veniam laoreet forensibus. Id sed alii diceret.\"]]}");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => Object.getPrototypeOf(obj) : (obj) => obj.__proto__;
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(key => def[key] = () => value[key]);
/******/ 			}
/******/ 			def['default'] = () => value;
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;