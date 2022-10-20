import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  passwordchack,
  validationName,
  validationNum,
} from './validatorsName';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  formgroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formgroup = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        phoneNumber: [
          '',
          [
            Validators.minLength(11),
            Validators.required,
            validationNum,
            validationName,
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      passwordchack
    );
  }
  onSubmit() {
    console.log(this.formgroup.get('rePassword'));
    this.toLocalStorage();
  }
  ngOnInit(): void {}
  get firstName() {
    return this.formgroup.get('firstName')!;
  }
  get phoneNumber() {
    return this.formgroup.get('phoneNumber')!;
  }
  get password() {
    return this.formgroup.get('password')!;
  }
  get rePassword() {
    return this.formgroup.get('rePassword')!;
  }

  toLocalStorage() {
    let pNumber = this.formgroup.get('phoneNumber')!.value;
    localStorage.setItem('pNumber', pNumber);
  }
}
