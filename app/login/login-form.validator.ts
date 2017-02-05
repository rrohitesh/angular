import { FormControl } from '@angular/forms';

export class LoginValidator {

    static cannotContainSpace(control: FormControl) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };

        return null;
    }


    // static shouldBeUnique(control: Control) {
    //     return new Promise((resolve, reject) => {
    //                 invalid=true;
    //         if (invalid)
    //             resolve({ shouldBeUnique: true });
    //         else
    //             resolve(null);
    //     });
    // }

}