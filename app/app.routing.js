"use strict";
const router_1 = require("@angular/router");
const login_component_1 = require("./login/login.component");
const home_component_1 = require("./navbar/home.component");
const not_found_component_1 = require("./not-found.component");
// import {AuthGuard} from './auth-guard.service';
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map