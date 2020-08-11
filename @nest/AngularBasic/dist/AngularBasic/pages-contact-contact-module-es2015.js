(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"],{

/***/ "./src/app/components/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 17, vars: 0, consts: [["form", ""], [1, "c_Input"], ["for", "nombre"], ["type", "text", "name", "nombre", "id", "nombre", "autocomplete", "on"], ["for", "telf"], ["type", "tel", "name", "telf", "id", "telf", "autocomplete", "on"], ["for", "fecha"], ["type", "date", "name", "fecha", "id", "fecha", "autocomplete", "on"], ["type", "submit"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Telf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[form][_ngcontent-%COMP%] {\n  margin: 2rem auto;\n  background: gainsboro;\n  padding: 2rem;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-flow: column wrap;\n}\n\n.c_Input[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-family: \"Montserrat\", sans-serif;\n}\n\ninput[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:active {\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  padding: 0.6rem 2.4rem;\n  color: white;\n  background: red;\n  border: none;\n  cursor: pointer;\n  margin: 1rem auto;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.card_Pers[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n  border: 1px solid #d86262;\n  margin: 3rem 0;\n  border-radius: 6px;\n}\n\n.card_Pers[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 14rem;\n  padding: 2rem;\n  border: 0.5px solid white;\n  border-radius: 6px;\n  margin: 2rem;\n}\n\n.indicador[_ngcontent-%COMP%] {\n  background: magenta;\n  color: white;\n  display: inline-flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n  margin: 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL0Q6XFxWSVNVQUxTVFVESU9DT0RFXFxDVVJTTyBBTkdVTEFSLU5FU1QgRlVMTFNUQUNLXFxBTkdVTEFSX05FU1RKU18yOFxcQW5ndWxhckJhc2ljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3JtXFxmb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDREo7O0FES0E7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FES0E7RUFDSSxjQUFBO0FDRko7O0FETUE7RUFDSSxlQUFBO0VBQ0EscUNBQUE7QUNISjs7QURJSTtFQUVJLGFBQUE7QUNIUjs7QURPQTtFQUNJLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURRQTtFQUNJLGtCQUFBO0FDTEo7O0FEUUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNMQTs7QURRQTtFQUNLLGFBQUE7RUFDRCxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRE9JO0VBR0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1BSOztBRFlBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbltmb3JtXSB7XHJcbiAgICBtYXJnaW46MnJlbSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDpnYWluc2Jvcm87XHJcbiAgICBwYWRkaW5nOjJyZW07XHJcbiAgICBcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICAvLyBoZWlnaHQ6MTByZW07XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxufVxyXG4uY19JbnB1dCB7XHJcbiAgICBtYXJnaW46MXJlbSAwO1xyXG5cclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgcGFkZGluZzouNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OlwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgJjpmb2N1cyxcclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjZyZW0gMi40cmVtO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOnJlZDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBtYXJnaW46MXJlbSBhdXRvO1xyXG59XHJcblxyXG5cclxubGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjFyZW07XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbm9wYWNpdHk6LjM7XHJcbmN1cnNvcjpub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmNhcmRfUGVycyB7XHJcbiAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjE2LCA5OCwgOTgpO1xyXG4gICAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gICAgPiAqIHtcclxuICAgICAgICAvLyBwYWRkaW5nOjJyZW07XHJcbiAgICAgICAgLy8gaGVpZ2h0OjJyZW07XHJcbiAgICAgICAgd2lkdGg6MTRyZW07XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBib3JkZXI6IC41cHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMnJlbTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5pbmRpY2Fkb3Ige1xyXG4gICAgYmFja2dyb3VuZDptYWdlbnRhO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBoZWlnaHQ6M3JlbTtcclxuICAgIG1hcmdpbjogLjVyZW0gMDtcclxufVxyXG5cclxuIiwiW2Zvcm1dIHtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xufVxuXG4uY19JbnB1dCB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG5pbnB1dCB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufVxuaW5wdXQ6Zm9jdXMsIGlucHV0OmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgcGFkZGluZzogMC42cmVtIDIuNHJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbn1cblxubGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmNhcmRfUGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDg2MjYyO1xuICBtYXJnaW46IDNyZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmNhcmRfUGVycyA+ICoge1xuICB3aWR0aDogMTRyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlcjogMC41cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiAycmVtO1xufVxuXG4uaW5kaWNhZG9yIHtcbiAgYmFja2dyb3VuZDogbWFnZW50YTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDNyZW07XG4gIG1hcmdpbjogMC41cmVtIDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/form/form.component */ "./src/app/components/form/form.component.ts");



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 4, vars: 0, consts: [["page", ""]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [src_app_components_form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/contact/contact.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_components_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/form/form.component */ "./src/app/components/form/form.component.ts");







class ContactModule {
}
ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactModule_Factory(t) { return new (t || ContactModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: "", component: _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] }
            ]),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"],
        src_app_components_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"],
                    src_app_components_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        { path: "", component: _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] }
                    ]),
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-contact-contact-module-es2015.js.map