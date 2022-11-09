import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-fb-form',
  templateUrl: './reactive-fb-form.component.html',
  styleUrls: ['./reactive-fb-form.component.scss']
})
export class ReactiveFbFormComponent implements OnInit {

  creditDetailsGroup!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.creditDetailsGroup = this.fb.group({
      card: ['', [Validators.required, ]],
      expiry: ['', Validators.required ],
      name: ['', [Validators.required, Validators.pattern("") ]],
      email: ['', [Validators.required, Validators.maxLength(15)]],
    });
  }

  onCreditDetailsGroupSubmit( result: any): any {
    if (result.status == 'VALID') {
      alert(JSON.stringify(result.value) + ' ---  ' + result.status);
      this.creditDetailsGroup.reset();
      //submit data to service 
    } else {
      alert('Need to fill mandatory fileds');
    }
  }
}
