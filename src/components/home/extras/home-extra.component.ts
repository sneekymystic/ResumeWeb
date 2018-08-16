import { Component, Input, OnInit } from "@angular/core";
import { BaseComponent } from "../../common/base.component";

@Component({
    selector: 'home-extra-component',
    templateUrl: './home-extra.component.html',
    styleUrls: ['./home-extra.component.css']
})

export class HomeExtraComponent extends BaseComponent implements OnInit {
    @Input()
    backgroundColor: string = 'white';

    ngOnInit() {
    }
}