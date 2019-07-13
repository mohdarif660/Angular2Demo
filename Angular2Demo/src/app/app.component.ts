import {Component} from "@angular/core"
import { fail } from "assert";

@Component({
    selector: 'my-app',
    template: ` <div style="padding:5px">
                        <ul class="nav nav-tabs">
                            <li routerLinkActive="active">
                                <a routerLink="home">Home</a>
                            </li>
                            <li routerLinkActive="active">
                                <a routerLink="employees">Employees</a>
                            </li>
                        </ul>
                        <br/>
                        <router-outlet></router-outlet>
                    </div>

`
})

export class AppComponent {
    userText: string = 'Chetu';
    
}
