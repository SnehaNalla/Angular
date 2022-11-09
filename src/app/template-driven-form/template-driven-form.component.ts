import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

interface IUser {
  email: string;
  password: string;
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  email: any = {};
  model: any = {};
  password: any = {};
  user: IUser;

  constructor() {
    this.user = {} as IUser;
  }

  jsonResult : any;


  ngOnInit(): void {}

  onSubmit(result: any) {
    this.jsonResult = result;
    alert(result.email + ' ---  ' + result.password);
  }

}
