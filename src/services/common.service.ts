import { Injectable } from '@angular/core';

@Injectable()

export class CommonService {
    public getUserName() {
        return "Chandni Raman";
    }

    public getEmail() {
        return "email@website.com";
    }
}