"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const login_form_validator_1 = require("./login-form.validator");
const router_1 = require("@angular/router");
let LoginComponent = class LoginComponent {
    constructor(fb, _router) {
        this._router = _router;
        this.loginForm = fb.group({
            username: ['', forms_1.Validators.compose([forms_1.Validators.required, login_form_validator_1.LoginValidator.cannotContainSpace])],
            password: ['', forms_1.Validators.required]
        });
    }
    login() {
        if (this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin')
            this._router.navigate(['home']);
        else
            alert("Invalid username or password");
        console.log(this.loginForm.value);
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        templateUrl: 'app/login/login-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map