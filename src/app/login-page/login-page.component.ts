import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  

  loginGroup!: FormGroup;

  ngOnInit(): void {
    this.loginGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  constructor(private _router: Router) { }

  formSubmit(result: any): void {
    if (this.loginGroup.controls['username'].value == "Project" && this.loginGroup.controls['password'].value == "unique") {
      this._router.navigate(['../landing_page']);
    }
  }
}










