import { Injectable } from '@angular/core';

@Injectable()
export class UserPreferencesService {
    constructor() {
        console.log("New Instance of service created")
    }
    colourPreference: string = 'orange';
}