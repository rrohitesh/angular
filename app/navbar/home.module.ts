import { NgModule }      from '@angular/core';
import { HomeComponent }   from '../navbar/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
 


@NgModule({
  imports:      [ FormsModule,ReactiveFormsModule,CommonModule ],
  declarations: [ HomeComponent],
  exports:[HomeComponent]
 
})
export class HomeModule {

    
 }
