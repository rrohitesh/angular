import {Router,RouterModule} from'@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './navbar/home.component';
import {NotFoundComponent} from './not-found.component';
// import {AuthGuard} from './auth-guard.service';


export const routing = RouterModule.forRoot([
    {path:'',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'**',component:NotFoundComponent}
])