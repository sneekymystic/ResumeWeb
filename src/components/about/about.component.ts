import { Component } from '@angular/core';

@Component({
    selector: 'about-component',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']

})

export class AboutComponent{

    public bgColorScheme: any = {
        mission: '#B8336A',
        story: '#546A7B',
        hobbies:'#07BEB8'
    }
 
    public textColor: any = {
        mission: 'white',
        story: 'azure',
        hobbies:'white'
    }
}

