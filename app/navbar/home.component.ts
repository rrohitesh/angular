import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector:'nav-menu',
    templateUrl:'app/navbar/home.component.html'
})


export class HomeComponent{

    constructor(private _router:Router){

    }
 
    logout(){      
        
        this._router.navigate(['']);
    }

     ngOnDestroy() {
      alert("called");
   }

}