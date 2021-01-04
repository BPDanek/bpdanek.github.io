/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
var React = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@types/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ReactDOM = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@types/react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var App = __webpack_require__(1);
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)), document.getElementById('root'));
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (false) {}



/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ App
/* harmony export */ });
/* harmony import */ var _pages_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function App() {
    return React.createElement(_pages_Page__WEBPACK_IMPORTED_MODULE_0__.default, { page: "Projects" });
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pages": () => /* binding */ pages,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
var React = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
__webpack_require__(3);
var SiteNavigator = __webpack_require__(5);
var MeController = __webpack_require__(7);
var PostsController = __webpack_require__(14);
var ProjectsController = __webpack_require__(16);
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
        var currentPageAsComponent = React.createElement("div", null);
        switch (this.state.page) {
            case pages.ME:
                currentPageAsComponent = React.createElement(MeController, null);
                break;
            case pages.POSTS:
                currentPageAsComponent = React.createElement(PostsController, null);
                break;
            case pages.PROJECTS:
                currentPageAsComponent = React.createElement(ProjectsController, null);
                break;
            default:
                break;
        }
        return (React.createElement("div", { className: "site-navigator" },
            React.createElement(SiteNavigator, { pageChangeParentReference: this.handlePageChange }),
            currentPageAsComponent));
    };
    return Page;
}(React.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* imported and used in Page.tsx */\n.site-navigator {\n    margin: auto;\n    width: 90%;\n}\n\n#main {\n    background: #ffffffff;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
var React = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var pages = __webpack_require__(2);
__webpack_require__(6);
;
var SiteNavigator = /** @class */ (function (_super) {
    __extends(SiteNavigator, _super);
    function SiteNavigator(props) {
        return _super.call(this, props) || this;
    }
    SiteNavigator.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "site-navigator-container" },
            React.createElement("div", { className: "site-navigator-flex-wrapper" }, Object.keys(pages).map(function (pageKey, index) {
                return (React.createElement("div", { className: "site-navigator-individual-button" },
                    React.createElement("button", { className: "site-navigator-individual-button-tag", onClick: function () {
                            return _this.props.pageChangeParentReference(pages[pageKey]);
                        } }, React.createElement("p", { className: "site-navigator-individual-button-sub-tag" }, pages[pageKey]))));
            }))));
    };
    return SiteNavigator;
}(React.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteNavigator);


/***/ }),
/* 6 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".site-navigator-container {\n    background: #ffffffff;\n    padding: 10px 10px 10px 10px;\n    height: 40px;\n}\n\n.site-navigator-flex-wrapper {\n    display: flex;\n}\n.site-navigator-individual-button {\n    width: 30%; /* anything above 30% produces the same result? */\n}\n\n.site-navigator-individual-button-tag {\n    background-color: #ffffffff;\n\n    border: 0.5px;\n    border-style: solid;\n    border-radius: 5px;\n    width: 99%;\n    height: 45px;\n\n    transition-duration: 0.4s;\n}\n\n.site-navigator-individual-button-tag:hover {\n    background-color: #C3D4E2;\n}\n\n.site-navigator-individual-button-sub-tag {\n    font-family: Arial;\n\n    margin-top: 10px; /* to center text when font changes */\n    text-align: center; /* affects margin-top */\n    font-size: 15pt; /* affects margin-top */\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
__webpack_require__(8);
//images
var image_of_me_headshot = __webpack_require__(9);
var github_logo = __webpack_require__(10);
var twitter_logo = __webpack_require__(11);
var linkedin_logo = __webpack_require__(12);
//content that is imported from a json
var data_asset = __webpack_require__(13);
;
;
var text_data = data_asset;
var MeController = /** @class */ (function (_super) {
    __extends(MeController, _super);
    function MeController(props) {
        return _super.call(this, props) || this;
    }
    MeController.prototype.render = function () {
        return (React.createElement("div", { className: "me-page-flexbox-wrapper" },
            React.createElement("div", { className: "me-bio-column" },
                React.createElement("div", null,
                    React.createElement("img", { className: "me-bio-column-image", src: image_of_me_headshot, alt: "photo of me on the pacific coast" })),
                React.createElement("div", { className: "me-bio-column-bio" },
                    React.createElement("p", null, "Creator, student, scholar, engineer."),
                    React.createElement("p", null, "Seeking Full-stack, Front-end, Machine Learning, Research early career engineering roles"),
                    React.createElement("div", { className: "me-bio-column-links" },
                        React.createElement("div", null,
                            React.createElement("a", { href: "https://github.com/BPDanek" },
                                React.createElement("img", { className: "Github-link", src: github_logo }))),
                        React.createElement("div", null,
                            React.createElement("a", { href: "https://www.linkedin.com/in/benjaminpdanek/" },
                                React.createElement("img", { className: "LinkedIn-link", src: linkedin_logo }))),
                        React.createElement("div", null,
                            React.createElement("a", { href: "https://twitter.com/Benjamindanek" },
                                React.createElement("img", { className: "Twitter-link", src: twitter_logo }))))),
                React.createElement("div", { className: "me-navigator-for-content-column" },
                    React.createElement("a", { href: "#about" },
                        React.createElement("h4", null, "About")),
                    React.createElement("a", { href: "#courses" },
                        React.createElement("h4", null, "Courses")),
                    React.createElement("a", { href: "#goals" },
                        React.createElement("h4", null, "Goals")))),
            React.createElement("div", { className: "me-content-column" },
                React.createElement("div", { id: "about" },
                    React.createElement("h2", null, "About"),
                    React.createElement("p", null, text_data.about_section)),
                React.createElement("div", { id: "courses" },
                    React.createElement("h2", null, "Courses"),
                    React.createElement("div", null, text_data.courses_section.map(function (course_data) {
                        return (React.createElement("div", null,
                            React.createElement("h3", null, course_data[0]),
                            React.createElement("p", null, course_data[1])));
                    }))),
                React.createElement("div", { id: "goals" },
                    React.createElement("h2", null, "Goals"),
                    React.createElement("div", null, text_data.goals_section.map(function (goal_data) {
                        return (React.createElement("div", null,
                            React.createElement("h3", null, goal_data[0]),
                            React.createElement("p", null, goal_data[1])));
                    }))))));
    };
    return MeController;
}(React.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeController);


/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".me-page-flexbox-wrapper {\n    display: flex;\n    font-family: Georgia;\n    padding-left: 8px;\n    padding-right: 20px;\n}\n\n.me-bio-column {\n    background: #f3f3f3ff;\n    padding: 10px 15px 10px 15px; /* clockwise directions (top, right, bottom, left) */\n    flex: 20%;\n    border-radius: 10px;\n}\n\n.me-content-column {\n    padding-left: 15px;\n    background: #ffffffff;\n    flex: 80%;\n}\n\n.me-content-column p {\n    padding-left: 40px;\n}\n\n.me-bio-column p {\n    margin: 10px;\n}\n\n.me-bio-column-bio {\n    padding-bottom: 20px;\n}\n\n.me-bio-column-image {\n    height: 200px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 5%;\n}\n\n.me-bio-column-links {\n    display: flex;\n}\n\n.Github-link, .LinkedIn-link, .Twitter-link {\n    margin: 5px;\n    height: 20px;\n}\n\na:link, a:visited, a:active  {\n    color: black;\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/IMG_6700.jpeg");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/github_logo.jpeg");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/twitter_logo.jpeg");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/linkedin_logo.jpeg");

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = JSON.parse("{\"about_section\":\"about me section (from json)\",\"courses_section\":[[\"course 1 title\",\"Lorem ipsum dolor sit amet, pri ea case simul, eros ullamcorper ex sit. Ne usu facete tincidunt, noster lucilius no per. Zril apeirian elaboraret est. Lorem ipsum dolor sit amet, pri ea case simul, eros ullamcorper ex sit. Ne usu facete tincidunt, noster lucilius no per. Zril apeirian elaboraret est.\"],[\"course 2 title\",\"Lorem ipsum dolor sit amet, adipiscing interpretaris mediocritatem vel eu. Ad vis alia disputando, per id noster comprehensam. Mei eu aliquid maiestatis, nulla lucilius reprehendunt. Lorem ipsum dolor sit amet, adipiscing interpretaris mediocritatem vel eu. Ad vis alia disputando, per id noster comprehensam. Mei eu aliquid maiestatis, nulla lucilius reprehendunt.\"],[\"course 3 title\",\"Lorem ipsum dolor sit amet, possim omnium vix ne. Unum prompta eloquentiam no duo, per an tation scripta malorum. Pertinax persequeris vim te. Congue virtute.       \\\"Lorem ipsum dolor sit amet, possim omnium vix ne. Unum prompta eloquentiam no duo, per an tation scripta malorum. Pertinax persequeris vim te. Congue virtute.\"],[\"course 4 title\",\"Lorem ipsum dolor sit amet, no agam nibh democritum duo. Option scripta an per, mel legere accusata id, cu has ancillae offendit. Sit cu erant. Lorem ipsum dolor sit amet, no agam nibh democritum duo. Option scripta an per, mel legere accusata id, cu has ancillae offendit. Sit cu erant.\"]],\"goals_section\":[[\"goal 1 title\",\"Est ex virtute oportere splendide, alii utamur suavitate duo ad, sit etiam dicit in. Mea an nostro prompta. Tation verear has no. An animal tamquam. Lorem ipsum dolor sit amet, dolores temporibus te vim. Legere vituperata ei pri, duo falli everti cu. Illud nulla invidunt cu vis, vel at nibh nulla mnesarchum. Vis an ocurreret scriptorem mediocritatem, delectus liberavisse quo te. Sit ad aliquid noluisse, sed cibo iriure id. Meliore quaestio petentium pri id, partem suscipiantur est ex.\"],[\"goal 2 title\",\"Sea cu animal consequat, stet euripidis cum at. Erant repudiare nec id, cibo commune at his, pri legere recteque in. Mei recusabo mandamus te, omnis. Lorem ipsum dolor sit amet, eu duis persecuti necessitatibus eum, animal constituam sea ad, nec error mediocrem ei. Id scripta deserunt sed, detraxit assueverit omittantur no duo. Equidem adipisci tacimates ne cum, ea aperiri euripidis liberavisse vim, graece oportere necessitatibus his ex. Ad quo regione tractatos.\\n\\nVix scripta ceteros convenire in, et tota mentitum definitiones sed. Quo in porro utamur.\"]]}");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
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
        return (React.createElement("div", { className: "posts-controller" },
            React.createElement("h3", null, "I have no posts to show off for now, come back soon because this will be the next Hacker News")));
    };
    return PostsController;
}(React.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsController);


/***/ }),
/* 15 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".posts-controller {\n    font-family: Arial;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
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

var data_asset = __webpack_require__(18);
var projects_text_data = data_asset;
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
        var projectsNavigationColumnElement = React.createElement("h4", null, "There are no projects");
        if (this.state.current_post_index != -1) {
            projectsNavigationColumnElement =
                (React.createElement("div", null, projects_text_data.projects.map(function (post_data, post_index) {
                    return (React.createElement("button", { className: "projects-page-navigation-column-button-tag", onClick: function () {
                            _this.setState({ current_post_index: post_index });
                        } },
                        React.createElement("p", { className: "projects-page-navigation-column-button-sub-tag" }, post_data[0])));
                })));
        }
        return (projectsNavigationColumnElement);
    };
    // renders a post at the index
    ProjectsController.prototype.renderPost = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, projects_text_data.projects[this.state.current_post_index][0]),
            React.createElement("p", null, projects_text_data.projects[this.state.current_post_index][1])));
    };
    ProjectsController.prototype.render = function () {
        return (React.createElement("div", { className: "projects-page-flexbox-wrapper" },
            React.createElement("div", { className: "projects-page-navigation-column" }, this.renderProjectsNavigatorColumn()),
            React.createElement("div", { className: "projects-page-content-column" }, this.renderPost())));
    };
    return ProjectsController;
}(React.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsController);


/***/ }),
/* 17 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".projects-page-flexbox-wrapper {\n    display: flex;\n    font-family: Arial;\n}\n\n.projects-page-navigation-column {\n    padding-left: 20px;\n    padding-top: 42px; /* should be roughly aligned with the header in projects-page-content-column */\n}\n\n.projects-page-content-column {\n    padding-left: 13px;\n    padding-right: 20%;\n    padding-top: 30px; /* related to projects-page-navigation-column padding-top*/\n}\n\n.projects-page-navigation-column-button-tag {\n    background-color: #ffffff;\n\n    border: 0px;\n    border-style: solid;\n    border-radius: 5px;\n\n    height: 100%;\n\n    margin-bottom: 5px;\n    margin-right: 0px;\n\n    transition-duration: 0.4s;\n}\n\n.projects-page-navigation-column-button-tag:hover {\n    background-color: #C3D4E2;\n}\n\n.projects-page-navigation-column-button-sub-tag {\n    font-size: 15px;\n    text-align: left;\n    width: 150px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 18 */
/***/ ((module) => {

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;