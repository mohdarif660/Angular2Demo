import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class EmployeeService {
    constructor(private _http: Http) {}

    getEmployees(): Observable< IEmployee[]> {
        return this._http.get("http://localhost:53387/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }

    getEmployeeByCode(empCode: string): Observable<IEmployee[]> {
        return this._http.get("http://localhost:53387/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }
    //getEmployeeByCode(empCode: string): Promise<IEmployee> {
    //    return this._http.get("http://localhost:53387/api/employees/" + empCode)
    //        .map((response: Response) => <IEmployee>response.json())
    //        .toPromise()
    //        .catch(this.handlePromiseError);
    //}
    handlePromiseError(error: Response) {
        console.error(error);
       throw(error);
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}