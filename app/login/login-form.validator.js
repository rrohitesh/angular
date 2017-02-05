"use strict";
class LoginValidator {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }
}
exports.LoginValidator = LoginValidator;
//# sourceMappingURL=login-form.validator.js.map