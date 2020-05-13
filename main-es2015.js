(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/upload */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-upload.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/space */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-space.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input-number.js");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons-provider.module */ "./src/app/icons-provider.module.ts");
/* harmony import */ var _pages_face_detection_face_detection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/face-detection/face-detection.component */ "./src/app/pages/face-detection/face-detection.component.ts");
















const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/face_detection' },
    {
        path: 'face_detection',
        component: _pages_face_detection_face_detection_component__WEBPACK_IMPORTED_MODULE_13__["FaceDetectionComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_12__["IconsProviderModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormModule"],
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_5__["NzUploadModule"],
            ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__["NzSpaceModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__["NzInputNumberModule"],
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageModule"],
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { declarations: [_pages_face_detection_face_detection_component__WEBPACK_IMPORTED_MODULE_13__["FaceDetectionComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_12__["IconsProviderModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_5__["NzUploadModule"],
        ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__["NzSpaceModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__["NzInputNumberModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_face_detection_face_detection_component__WEBPACK_IMPORTED_MODULE_13__["FaceDetectionComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _icons_provider_module__WEBPACK_IMPORTED_MODULE_12__["IconsProviderModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormModule"],
                    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_5__["NzUploadModule"],
                    ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_8__["NzSpaceModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectModule"],
                    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__["NzInputNumberModule"],
                    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageModule"],
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");






class AppComponent {
    constructor() {
        this.isCollapsed = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 4, consts: [[1, "app-layout"], ["nzCollapsible", "", "nzWidth", "256px", "nzBreakpoint", "md", 1, "menu-sidebar", 3, "nzCollapsed", "nzTrigger", "nzCollapsedChange"], [1, "sidebar-logo"], ["href", "https://ng.ant.design/", "target", "_blank"], ["src", "https://ng.ant.design/assets/img/logo.svg", "alt", "logo"], ["nz-menu", "", "nzTheme", "dark", "nzMode", "inline", 3, "nzInlineCollapsed"], ["nz-menu-item", "", "nzIcon", "dashboard", "nzMatchRouter", ""], ["routerLink", "/face_detection"], [1, "app-header"], [1, "header-trigger", 3, "click"], ["nz-icon", "", 1, "trigger", 3, "nzType"], [1, "inner-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-sider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCollapsedChange", function AppComponent_Template_nz_sider_nzCollapsedChange_1_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Simon Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u4EBA\u8138\u8BC6\u522B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_14_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCollapsed", ctx.isCollapsed)("nzTrigger", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzInlineCollapsed", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isCollapsed ? "menu-unfold" : "menu-fold");
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzSiderComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_2__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzHeaderComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.app-layout[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.menu-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n}\n.header-trigger[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 20px 24px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s, padding 0s;\n}\n.trigger[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding-left: 24px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #001529;\n  transition: all 0.3s;\n}\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\nnz-header[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n  z-index: 2;\n}\n.app-header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding: 0;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\nnz-content[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n.inner-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NpbW9uLWxhYi9zaW1vbi1sYWIvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUNDRjtBREVBO0VBQ0UsYUFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNGRjtBREtBO0VBQ0UsY0FBQTtBQ0hGO0FETUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDSkY7QURPQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0xGO0FEUUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlFQUFBO0VBQ0Esc0JBQUE7QUNORjtBRFNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDUEY7QURVQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FDUkY7QURXQTtFQUNFLFlBQUE7QUNURjtBRFlBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXkgICAgICAgICAgICAgICAgOiBmbGV4O1xuICB0ZXh0LXJlbmRlcmluZyAgICAgICAgIDogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nIDogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5hcHAtbGF5b3V0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1lbnUtc2lkZWJhciB7XG4gIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICB6LWluZGV4ICAgOiAxMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJveC1zaGFkb3c6IDJweCAwIDZweCByZ2JhKDAsIDIxLCA0MSwgLjM1KTtcbn1cblxuLmhlYWRlci10cmlnZ2VyIHtcbiAgaGVpZ2h0ICAgIDogNjRweDtcbiAgcGFkZGluZyAgIDogMjBweCAyNHB4O1xuICBmb250LXNpemUgOiAyMHB4O1xuICBjdXJzb3IgICAgOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzLCBwYWRkaW5nIDBzO1xufVxuXG4udHJpZ2dlcjpob3ZlciB7XG4gIGNvbG9yOiAjMTg5MGZmO1xufVxuXG4uc2lkZWJhci1sb2dvIHtcbiAgcG9zaXRpb24gICAgOiByZWxhdGl2ZTtcbiAgaGVpZ2h0ICAgICAgOiA2NHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIG92ZXJmbG93ICAgIDogaGlkZGVuO1xuICBsaW5lLWhlaWdodCA6IDY0cHg7XG4gIGJhY2tncm91bmQgIDogIzAwMTUyOTtcbiAgdHJhbnNpdGlvbiAgOiBhbGwgLjNzO1xufVxuXG4uc2lkZWJhci1sb2dvIGltZyB7XG4gIGRpc3BsYXkgICAgICAgOiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodCAgICAgICAgOiAzMnB4O1xuICB3aWR0aCAgICAgICAgIDogMzJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNpZGViYXItbG9nbyBoMSB7XG4gIGRpc3BsYXkgICAgICAgOiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbiAgICAgICAgOiAwIDAgMCAyMHB4O1xuICBjb2xvciAgICAgICAgIDogI2ZmZjtcbiAgZm9udC13ZWlnaHQgICA6IDYwMDtcbiAgZm9udC1zaXplICAgICA6IDE0cHg7XG4gIGZvbnQtZmFtaWx5ICAgOiBBdmVuaXIsIEhlbHZldGljYSBOZXVlLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5uei1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aCAgOiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICBoZWlnaHQgICAgOiA2NHB4O1xuICBwYWRkaW5nICAgOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAyMSwgNDEsIC4wOCk7XG59XG5cbm56LWNvbnRlbnQge1xuICBtYXJnaW46IDI0cHg7XG59XG5cbi5pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZyAgICAgIDogMjRweDtcbiAgYmFja2dyb3VuZCAgIDogI2ZmZjtcbiAgLy8gaGVpZ2h0ICAgIDogMTAwJTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG4uYXBwLWxheW91dCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubWVudS1zaWRlYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJveC1zaGFkb3c6IDJweCAwIDZweCByZ2JhKDAsIDIxLCA0MSwgMC4zNSk7XG59XG4uaGVhZGVyLXRyaWdnZXIge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzLCBwYWRkaW5nIDBzO1xufVxuLnRyaWdnZXI6aG92ZXIge1xuICBjb2xvcjogIzE4OTBmZjtcbn1cbi5zaWRlYmFyLWxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogIzAwMTUyOTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uc2lkZWJhci1sb2dvIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5zaWRlYmFyLWxvZ28gaDEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5uei1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbn1cbi5hcHAtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDIxLCA0MSwgMC4wOCk7XG59XG5uei1jb250ZW50IHtcbiAgbWFyZ2luOiAyNHB4O1xufVxuLmlubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons-provider.module */ "./src/app/icons-provider.module.ts");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/__ivy_ngcc__/fesm2015/ant-design-icons-angular-icons.js");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config/config.module */ "./src/app/config/config.module.ts");


















const antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_13__;
const icons = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);
Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["zh_CN"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"].forRoot(icons),
            _config_config_module__WEBPACK_IMPORTED_MODULE_14__["ConfigModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"], _config_config_module__WEBPACK_IMPORTED_MODULE_14__["ConfigModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"].forRoot(icons),
                    _config_config_module__WEBPACK_IMPORTED_MODULE_14__["ConfigModule"],
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__["zh_CN"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/config/config.module.ts":
/*!*****************************************!*\
  !*** ./src/app/config/config.module.ts ***!
  \*****************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _default_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-config.service */ "./src/app/config/default-config.service.ts");




class ConfigModule {
}
ConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConfigModule });
ConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConfigModule_Factory(t) { return new (t || ConfigModule)(); }, providers: [_default_config_service__WEBPACK_IMPORTED_MODULE_2__["DefaultConfigService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfigModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [_default_config_service__WEBPACK_IMPORTED_MODULE_2__["DefaultConfigService"]],
                exports: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/config/default-config.service.ts":
/*!**************************************************!*\
  !*** ./src/app/config/default-config.service.ts ***!
  \**************************************************/
/*! exports provided: DefaultConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultConfigService", function() { return DefaultConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DefaultConfigService {
    constructor() { }
    get DEFAULT_FACE_DETECTOR() {
        return 'ssd_mobilenetv1';
    }
    get DEFAULT_INPUT_SIZE() {
        return 160;
    }
    get DEFAULT_MIN_CONFIDENCE() {
        return 5;
    }
    get MODELS_DIR() {
        return '/assets/models';
    }
}
DefaultConfigService.ɵfac = function DefaultConfigService_Factory(t) { return new (t || DefaultConfigService)(); };
DefaultConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DefaultConfigService, factory: DefaultConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/icons-provider.module.ts":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/__ivy_ngcc__/fesm2015/ant-design-icons-angular-icons.js");




const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutline"]];
class IconsProviderModule {
}
IconsProviderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); }, providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
    ], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsProviderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                providers: [
                    { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/face-detection/face-detection.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/face-detection/face-detection.component.ts ***!
  \******************************************************************/
/*! exports provided: FaceDetectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceDetectionComponent", function() { return FaceDetectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! face-api.js */ "./node_modules/face-api.js/build/es6/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_config_default_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/default-config.service */ "./src/app/config/default-config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/space */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-space.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/upload */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-upload.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input-number.js");




















function FaceDetectionComponent_nz_form_item_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u8F93\u5165\u5C3A\u5BF8");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-control", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "nz-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "nz-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "nz-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", 416);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", 512);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", 608);
} }
class FaceDetectionComponent {
    constructor(fb, el, defaultConfig, http, message) {
        this.fb = fb;
        this.el = el;
        this.defaultConfig = defaultConfig;
        this.http = http;
        this.message = message;
        /**
         * 上传图片
         *
         */
        this.beforeUpload = (file) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.previewUrl = yield blob2Base64(file);
            this.updateResults();
            return false;
        });
    }
    get imageUrl() {
        return this.validateForm.value.imageUrl;
    }
    get faceDetector() {
        return this.validateForm.value.faceDetector;
    }
    get minConfidence() {
        return this.validateForm.value.minConfidence / 10;
    }
    get inputSize() {
        return this.validateForm.value.inputSize;
    }
    getCurrentFaceDetector() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { MODELS_DIR } = this.defaultConfig;
            switch (this.faceDetector) {
                case 'ssd_mobilenetv1':
                    yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["nets"].ssdMobilenetv1.load(MODELS_DIR);
                    return new face_api_js__WEBPACK_IMPORTED_MODULE_2__["SsdMobilenetv1Options"]({
                        minConfidence: this.minConfidence,
                    });
                case 'tiny_face_detector':
                    yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["nets"].tinyFaceDetector.load(MODELS_DIR);
                    return new face_api_js__WEBPACK_IMPORTED_MODULE_2__["TinyFaceDetectorOptions"]({
                        inputSize: this.inputSize,
                        scoreThreshold: this.minConfidence,
                    });
                default:
                    break;
            }
        });
    }
    ngAfterViewInit() {
        this.inputImgEl = this.el.nativeElement.querySelector('#inputImg');
        this.canvas = this.el.nativeElement.querySelector('#overlay');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { DEFAULT_FACE_DETECTOR, DEFAULT_INPUT_SIZE, DEFAULT_MIN_CONFIDENCE, } = this.defaultConfig;
            this.validateForm = this.fb.group({
                imageUrl: [''],
                faceDetector: [DEFAULT_FACE_DETECTOR],
                inputSize: [DEFAULT_INPUT_SIZE],
                minConfidence: [DEFAULT_MIN_CONFIDENCE],
            });
            this.previewUrl = '/assets/img/p1.jpg';
        });
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // for (const i in this.validateForm.controls) {
            //   if (this.validateForm.controls.hasOwnProperty(i)) {
            //     const element = this.validateForm.controls[i];
            //     element.markAsDirty();
            //     element.updateValueAndValidity();
            //   }
            // }
            if (!this.imageUrl) {
                this.message.create('warning', '请输入图片地址');
                return;
            }
            yield this.getImageFromOrigin(this.imageUrl);
            this.updateResults();
        });
    }
    updateResults() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const results = yield face_api_js__WEBPACK_IMPORTED_MODULE_2__["detectAllFaces"](this.inputImgEl, yield this.getCurrentFaceDetector());
            face_api_js__WEBPACK_IMPORTED_MODULE_2__["matchDimensions"](this.canvas, this.inputImgEl);
            face_api_js__WEBPACK_IMPORTED_MODULE_2__["draw"].drawDetections(this.canvas, face_api_js__WEBPACK_IMPORTED_MODULE_2__["resizeResults"](results, this.inputImgEl));
        });
    }
    getImageFromOrigin(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.http
                .get(url, { responseType: 'blob' })
                .toPromise();
            this.previewUrl = yield blob2Base64(result);
            this.validateForm.patchValue({ imageUrl: '' });
        });
    }
}
FaceDetectionComponent.ɵfac = function FaceDetectionComponent_Factory(t) { return new (t || FaceDetectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_config_default_config_service__WEBPACK_IMPORTED_MODULE_4__["DefaultConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"])); };
FaceDetectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FaceDetectionComponent, selectors: [["app-face-detection"]], decls: 32, vars: 14, consts: [["nz-form", "", 1, "form", 3, "formGroup"], [1, "preview"], ["id", "inputImg", 3, "src"], ["id", "overlay"], ["nzFor", "imageUrl", 3, "nzSpan"], [3, "nzSpan"], ["nz-input", "", "formControlName", "imageUrl", "id", "imageUrl"], ["nz-button", "", "nzType", "primary", "type", "submit", 3, "click"], [3, "nzBeforeUpload", "nzShowUploadList"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"], ["nzFor", "faceDetector", 3, "nzSpan"], ["formControlName", "faceDetector", "id", "faceDetector", 1, "full-width"], ["nzLabel", "SSD Mobilenet V1", "nzValue", "ssd_mobilenetv1"], ["nzLabel", "Tiny Face Detector", "nzValue", "tiny_face_detector"], [4, "ngIf"], ["nzFor", "minConfidence", 3, "nzSpan"], ["formControlName", "minConfidence", 3, "nzMin", "nzMax", "nzStep"], ["nzFor", "inputSize", 3, "nzSpan"], ["formControlName", "inputSize", "id", "inputSize", 1, "full-width"], ["nzLabel", "160 x 160", 3, "nzValue"], ["nzLabel", "224 x 224", 3, "nzValue"], ["nzLabel", "320 x 320", 3, "nzValue"], ["nzLabel", "416 x 416", 3, "nzValue"], ["nzLabel", "512 x 512", 3, "nzValue"], ["nzLabel", "608 x 608", 3, "nzValue"]], template: function FaceDetectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u56FE\u7247\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-space");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaceDetectionComponent_Template_button_click_12_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-upload", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u9009\u62E9\u56FE\u7247");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-form-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u9762\u90E8\u68C0\u6D4B\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "nz-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, FaceDetectionComponent_nz_form_item_26_Template, 11, 8, "nz-form-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nz-form-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u6700\u5C0F\u7F6E\u4FE1\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "nz-input-number", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.previewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzBeforeUpload", ctx.beforeUpload)("nzShowUploadList", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.faceDetector === "tiny_face_detector");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMin", 1)("nzMax", 10)("nzStep", 1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormControlComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceItemComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_14__["NzUploadComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__["NzOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_18__["NzInputNumberComponent"]], styles: [".form[_ngcontent-%COMP%] {\n  max-width: 500px;\n  height: 100%;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.preview[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto 40px;\n  max-width: 400px;\n}\n.preview[_ngcontent-%COMP%]   #inputImg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.preview[_ngcontent-%COMP%]   #overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NpbW9uLWxhYi9zaW1vbi1sYWIvc3JjL2FwcC9wYWdlcy9mYWNlLWRldGVjdGlvbi9mYWNlLWRldGVjdGlvbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcGFnZXMvZmFjZS1kZXRlY3Rpb24vZmFjZS1kZXRlY3Rpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREZBO0VBTUksV0FBQTtBQ0RKO0FETEE7RUFXSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhY2UtZGV0ZWN0aW9uL2ZhY2UtZGV0ZWN0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQgICA6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcmV2aWV3IHtcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgbWFyZ2luICAgOiAwIGF1dG8gNDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcblxuICAjaW5wdXRJbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cblxuICAjb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcCAgICAgOiAwO1xuICAgIGxlZnQgICAgOiAwO1xuICAgIHJpZ2h0ICAgOiAwO1xuICAgIGJvdHRvbSAgOiAwO1xuICB9XG59XG4iLCIuZm9ybSB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJldmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG8gNDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cbi5wcmV2aWV3ICNpbnB1dEltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByZXZpZXcgI292ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FaceDetectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-face-detection',
                templateUrl: './face-detection.component.html',
                styleUrls: ['./face-detection.component.less'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: src_app_config_default_config_service__WEBPACK_IMPORTED_MODULE_4__["DefaultConfigService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }]; }, null); })();
const blob2Base64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = () => {
            reject(Error('[blob2Base64] 转换失败'));
        };
    });
};


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/simon-lab/simon-lab/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map