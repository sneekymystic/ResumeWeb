import { Component, Input, OnInit } from "@angular/core";
import { BaseComponent } from "../../../common/base.component";

@Component({
    selector:'home-skill-component',
    templateUrl:'./home-skills.component.html',
    styleUrls:['./home-skills.component.css']
})
export class HomeSkillComponent extends BaseComponent implements OnInit{
@Input()
    backgroundColor:string = 'white';
   
    ngOnInit(){
  
    }
}