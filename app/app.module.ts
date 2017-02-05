import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {LoginModule} from './login/login.module';
import {HomeModule} from './navbar/home.module';
 import {routing} from './app.routing';
import {NotFoundComponent} from './not-found.component'

 

@NgModule({
  imports:      [ BrowserModule ,LoginModule,routing,HomeModule],
  declarations: [ AppComponent,NotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
