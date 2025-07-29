import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {
    static phoneLength(control: AbstractControl): ValidationErrors | null {
        const result = control.value.replace('+', '').length > 10 || control.value.replace('+', '').length === 0
        return result ? null : {length: {value: control.value}};
    }

    static inputLength(control: AbstractControl): ValidationErrors | null {
        const result: boolean = control.value.length === 6 || control.value.length === 0;
        return result ? null : {length: {value: control.value}};
    }


}
