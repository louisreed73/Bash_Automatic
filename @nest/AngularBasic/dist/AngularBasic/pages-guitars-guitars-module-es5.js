function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-guitars-guitars-module"], {
  /***/
  "./src/app/pages/guitars/guitars.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/guitars/guitars.component.ts ***!
    \****************************************************/

  /*! exports provided: GuitarsComponent */

  /***/
  function srcAppPagesGuitarsGuitarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuitarsComponent", function () {
      return GuitarsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GuitarsComponent = /*#__PURE__*/function () {
      function GuitarsComponent() {
        _classCallCheck(this, GuitarsComponent);
      }

      _createClass(GuitarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GuitarsComponent;
    }();

    GuitarsComponent.ɵfac = function GuitarsComponent_Factory(t) {
      return new (t || GuitarsComponent)();
    };

    GuitarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GuitarsComponent,
      selectors: [["app-guitars"]],
      decls: 3,
      vars: 0,
      consts: [["page", ""]],
      template: function GuitarsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Guitars Works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2d1aXRhcnMvZ3VpdGFycy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuitarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-guitars',
          templateUrl: './guitars.component.html',
          styleUrls: ['./guitars.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/guitars/guitars.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/guitars/guitars.module.ts ***!
    \*************************************************/

  /*! exports provided: GuitarsModule */

  /***/
  function srcAppPagesGuitarsGuitarsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuitarsModule", function () {
      return GuitarsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _guitars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guitars.component */
    "./src/app/pages/guitars/guitars.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GuitarsModule = function GuitarsModule() {
      _classCallCheck(this, GuitarsModule);
    };

    GuitarsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GuitarsModule
    });
    GuitarsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GuitarsModule_Factory(t) {
        return new (t || GuitarsModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: "",
        component: _guitars_component__WEBPACK_IMPORTED_MODULE_2__["GuitarsComponent"]
      }]), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuitarsModule, {
        declarations: [_guitars_component__WEBPACK_IMPORTED_MODULE_2__["GuitarsComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuitarsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_guitars_component__WEBPACK_IMPORTED_MODULE_2__["GuitarsComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: "",
            component: _guitars_component__WEBPACK_IMPORTED_MODULE_2__["GuitarsComponent"]
          }]), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-guitars-guitars-module-es5.js.map