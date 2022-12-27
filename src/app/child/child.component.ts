import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() inputMessageFromParent!: string;

@Output() outputFromChild: EventEmitter<string> = new EventEmitter();
outputMessageFromChild:string = "I am from Child Component";

  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent() {
    this.outputFromChild.emit(this.outputMessageFromChild);
  }
}
