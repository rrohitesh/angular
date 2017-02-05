import {Component} from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import {LoginValidator} from './login-form.validator';
import {Router} from '@angular/router';
 

@Component({
        selector:'login-form',
        templateUrl:'app/login/login-form.component.html'
})

export class LoginComponent {

     loginForm : FormGroup;

       constructor(fb:FormBuilder,private _router:Router){
        this.loginForm = fb.group({
            username: ['',Validators.compose([Validators.required,LoginValidator.cannotContainSpace])],
            password:['',Validators.required]
        });
    }
    
     login(){
         if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin')
         this._router.navigate(['home']);
         else
         alert("Invalid username or password");
         console.log(this.loginForm.value);
     }
    

}