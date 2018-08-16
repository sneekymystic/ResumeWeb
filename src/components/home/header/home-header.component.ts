import { Component, OnInit ,Input} from "@angular/core";
import { BaseComponent } from "../../common/base.component";

@Component({
    selector:'home-header-component',
    templateUrl:'./home-header.component.html',
    styleUrls:['./home-header.component.css']
})

export class HomeHeaderComponent extends BaseComponent implements OnInit{
@Input()
    backgroundColor: string = 'white';

    ngOnInit() {
    }
}