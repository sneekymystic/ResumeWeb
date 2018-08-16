import { Component } from '@angular/core';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']

})
export class HomeComponent {
    public bgColorScheme: any = {
        education: '#14A098',
        extracurricular: '#0D1B2A',
        header: '#FFB8D1 ',
        skills: '#CB2D6f',
        work: '#0F292F '
    }

    public textColor: any = {
        education: 'lightcyan',
        extracurricular: 'lavender',
        header: '#565254',
        skills: 'whitesmoke',
        work: 'darkgrey'
    }


}
