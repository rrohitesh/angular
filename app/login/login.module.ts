import { NgModule }      from '@angular/core';
import { LoginComponent }   from '../login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
 


@NgModule({
  imports:      [ FormsModule,ReactiveFormsModule,CommonModule ],
  declarations: [ LoginComponent],
  exports:[LoginComponent]
 
})
export class LoginModule {


  
 }
