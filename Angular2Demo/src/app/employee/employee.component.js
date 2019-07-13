"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/retryWhen");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/scan");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_employeeService, _activatedRoute, _router) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.statusMessage = "Loading data. Plase wait...";
    }
    EmployeeComponent.prototype.onBackButtonClick = function () {
        this._router.navigate(['/employees']);
    };
    EmployeeComponent.prototype.onCancelButtonClick = function () {
        this.statusMessage = 'Request Cancelled';
        this.subscription.unsubscribe();
    };
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activatedRoute.snapshot.params['code'];
        this.subscription = this._employeeService.getEmployeeByCode(empCode)
            .retryWhen(function (err) {
            return err.scan(function (retryCount) {
                retryCount += 1;
                if (retryCount < 6) {
                    _this.statusMessage = 'Retrying ....Attempt # ' + retryCount;
                    return retryCount;
                }
                else {
                    throw (err);
                }
            }, 0).delay(1000);
        })
            .subscribe(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage = "Employee with the specified employee code does not exist";
            }
            else {
                _this.employee = employeeData;
            }
        }, function (error) {
            _this.statusMessage = 'Problem with the service, Plase try again after sometime';
            console.log(error);
        });
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-employee',
            templateUrl: 'app/employee/employee.component.html',
            styleUrls: ['app/employee/employee.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map