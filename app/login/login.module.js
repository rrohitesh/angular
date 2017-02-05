"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const login_component_1 = require("../login/login.component");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule, common_1.CommonModule],
        declarations: [login_component_1.LoginComponent],
        exports: [login_component_1.LoginComponent]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map