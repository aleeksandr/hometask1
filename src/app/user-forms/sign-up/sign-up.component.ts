import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {User} from '../../user';
import {UserService} from '../../common/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  constructor(private _formBuilder: FormBuilder,
              private userService: UserService) { }
  private passwordValidators = [Validators.required, this._passwordValidator];
  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', []],
      login: ['', [Validators.minLength(3), Validators.required, this._loginIsUnique]],
      passwordGroup: this._formBuilder.group({
        password: ['', this.passwordValidators],
        checkPass: ['']
      }, {
        validator: this._confirmPassword
      })
    });
  }
  private _passwordValidator(control: FormControl): ValidationErrors | null {
    const value: string = control.value;
    const hasCaps: boolean = /[A-Z]/g.test(value);
    const hasLows: boolean = /[a-z]/g.test(value);
    const hasNums: boolean = /[0-9]/g.test(value);
    if (hasCaps && hasLows && hasNums && (value.length >= 6) ) {
      return null;
    } else {
      return { invalidPass: true };
    }
  }
  private _confirmPassword({value}: FormGroup):  ValidationErrors | null {
    const controls = Object.keys(value || {});
    const isMatch: boolean = value[controls[0]] === value[controls[1]];
    return isMatch ? null : { notMatch: true };
  }
  private _loginIsUnique(control: FormControl): ValidationErrors | null {
    const value: string = control.value;
    const logins: any[] = Object.keys(localStorage);
    const valid: boolean = logins.every( v => value !== v);
    return valid ? null : { loginExists: true };
  }
  // TODO save users
  public addUser(user: User): void {
    this.userService.addUser(user);
  }
}
