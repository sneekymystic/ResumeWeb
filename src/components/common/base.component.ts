import { Input } from "@angular/core";

export class BaseComponent {
    //Default colors
    @Input()
    backgroundColor: string = 'white';

    @Input()
    textColor:string = 'black';
}
