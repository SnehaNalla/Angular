import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizzaorder',
  templateUrl: './pizzaorder.component.html',
  styleUrls: ['./pizzaorder.component.scss'],
})
export class PizzaorderComponent implements OnInit {
  pizzaGroup!: FormGroup;
  pizzaList!:any;
  constructor(private fb: FormBuilder, private pizzaService: PizzaService, private http: HttpClient) { }

  ngOnInit(): void {

    this.pizzaService.getPizzaOrders().subscribe((response: HttpResponse<any>) => {
      this.pizzaList = response;
    });


    this.pizzaGroup = this.fb.group({
      id: ['', Validators.required],
      ppu: ['', Validators.required],
      type: ['', [Validators.required]],
      name: ['', Validators.required],
    });
  }
  pizzaSubmit(value: any) {
       alert(JSON.stringify(value.value));
      if (value.status) {
        this.pizzaService.createPizza(value.value).subscribe((response: HttpResponse<any>) => {
          console.log(response);
        });
      } else {
        alert(JSON.stringify(value));
      }
    }
    
  onDelete(value: any) {
    this.pizzaService.deletePizza(value).subscribe((response: HttpResponse<any>) => {
      console.log(response);
      location.reload();
    });
  }

  onUpdate(formobj:any){
    this.pizzaService.updatePizza(formobj.value).subscribe((response: HttpResponse<any>) => {
      console.log(response);
    })
  }
}


  






























