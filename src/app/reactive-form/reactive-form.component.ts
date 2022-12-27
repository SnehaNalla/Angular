import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  loginGroup!: FormGroup;
  creditDetailsGroup!: FormGroup;
  addressGroup!: FormGroup;
  submit = false;

  constructor() { }

  ngOnInit(): void {
    this.addressGroup = new FormGroup({
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });

    this.loginGroup = new FormGroup({
      email: new FormControl('', Validators.required),
      pswd: new FormControl('', Validators.required),
      addressGroup: this.addressGroup,
    });
    
    this.creditDetailsGroup = new FormGroup({
      card: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern("^[0-9]*$")]),
      expiry: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required, Validators.pattern("^a..z*$")]),
      email: new FormControl('', [Validators.required,Validators.maxLength(40), ])
    });
  }
 
  onSubmit(result: any): any { 
    alert(JSON.stringify(result.value) + ' ---  ' + result.status);
    this.loginGroup.reset();
  }

  onCreditDetailsGroupSubmit( result: any ): any {
    this.submit = true;
    if (result.status == 'VALID') {
      alert(JSON.stringify(result.value) + ' ---  ' + result.status);
      this.creditDetailsGroup.reset();  
    } else {
      alert(
        'Need to fill mandatory fileds' +
          JSON.stringify(this.creditDetailsGroup.controls['card'].errors)
      );
    }
  }
}



