import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  messageFromParent: string = "Hello! I am a Parent Message";
  dataFromChild!: string;

  constructor() { }

  ngOnInit(): void {
  }

  receivingDataFromChild(data: string){
    this.dataFromChild = data;
  }
}
