import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  Name: string = 'Robert, ';
  School: string = 'Delhi Public School, ';
  Class: string = '10th, ';
  Subject: string = 'Mathematics, ';
  Gender: string = 'M, ';
  Score: number = 99;
  data: string = "";
  isDisabled: boolean = false;
  buttonName = "Testing Directive";
  color = "orange";
  color1="violet";
  i=1;
  colors:any[] = [
    {
      name: "black"
    },
    {
      name: "white"
    },
    {
      name: "yellow"
    } 
  ]
  title = 'Demo';
  urname:string = '';
  showMe:string = 'p2';
  
  today = new Date();
 classes = [
  {name: 'Adam',  class: '1'},
  {name: 'Bob',   class: '2'},
  {name: 'Casio', class: '3'},
  {name: 'David', class: '4'},
 ];

 activities = ['swimming','badminton','volleyball','cricket','jogging']
 digitI = 100.12372;
 percentage = 0.67;
  constructor() { }

  ngOnInit(): void {
  }
  myclickfunction() {
    alert('you clicked me I am event binding example');
  }
  
}
