(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bass-bass-module"],{

/***/ "./src/app/pages/bass/bass.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/bass/bass.component.ts ***!
  \**********************************************/
/*! exports provided: BassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BassComponent", function() { return BassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BassComponent {
    constructor() { }
    ngOnInit() {
    }
}
BassComponent.ɵfac = function BassComponent_Factory(t) { return new (t || BassComponent)(); };
BassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BassComponent, selectors: [["app-bass"]], decls: 3, vars: 0, consts: [["page", ""]], template: function BassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bass Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jhc3MvYmFzcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bass',
                templateUrl: './bass.component.html',
                styleUrls: ['./bass.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/bass/bass.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/bass/bass.module.ts ***!
  \*******************************************/
/*! exports provided: BassModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BassModule", function() { return BassModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _bass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bass.component */ "./src/app/pages/bass/bass.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class BassModule {
}
BassModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BassModule });
BassModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BassModule_Factory(t) { return new (t || BassModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: "", component: _bass_component__WEBPACK_IMPORTED_MODULE_2__["BassComponent"] }
            ]),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BassModule, { declarations: [_bass_component__WEBPACK_IMPORTED_MODULE_2__["BassComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BassModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _bass_component__WEBPACK_IMPORTED_MODULE_2__["BassComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        { path: "", component: _bass_component__WEBPACK_IMPORTED_MODULE_2__["BassComponent"] }
                    ]),
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-bass-bass-module-es2015.js.map