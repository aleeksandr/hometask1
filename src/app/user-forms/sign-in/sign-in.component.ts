import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public isAuthorized: boolean;
  constructor(private _formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.signInForm = this._formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  checkCredentials(login, pass): void {
    const user = JSON.parse(localStorage.getItem(login));
    if (user) {
      this.isAuthorized = user.password === pass;
      if (user.password === pass) {
        this.router.navigate(['/places']);
      }
    } else {
      this.isAuthorized = false;
    }
  }
}
