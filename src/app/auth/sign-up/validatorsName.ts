import {
  AbstractControl,
  FormGroup,
} from '@angular/forms';

export { passwordchack, validationName, validationNum };
function validationNum(control: AbstractControl) {
  if (!control.value.match(/(011|012|015|010)/)) {
    return { onlyEgyNum: true };
  }
  return null;
}

function validationName(control: AbstractControl) {
  if (control.value.match(/[a-z]/gi)) {
    return { numOnly: true };
  }
  return null;
}

function passwordchack(group: FormGroup): { [key: string]: boolean } | null {
  //   const pass = group.controls[pass1];
  //   const repass = group.controls[pass2];
  //   if (pass.value === repass.value) {
  //     repass.setErrors({ mzio: true });
  //   }
  // };
  group.controls?.['rePassowrd'].setErrors({ mzio: true });

  return null;
}
