import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  title: string = 'Angular';
  Number: number = 86387463;
  firstName: string = ''; 
  a = 1;
  isDisabled:boolean = false;
  message:string = "Property Binding";
  Fruits: any[] = [
    {
      "name": "Apple"
    },
    {
      "name": "Guava"
    },
    {
      "name": "Peach"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  myfunction(){
    alert("I am clicked!");
  }
  

}
