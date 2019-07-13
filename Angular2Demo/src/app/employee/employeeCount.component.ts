import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls:['app/employee/employeeCount.component.css']
})
export class EmployeeCountComponent {
    selectRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number ;

    @Input()
    male: number;

    @Input()
    female: number;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectRadioButtonValue)
        console.log(this.selectRadioButtonValue);
    }
}