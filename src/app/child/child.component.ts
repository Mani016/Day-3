import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
   styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  @Input()  childmessage : string;
  message: string = "Hello I am From Child Component Hello to the Parent Component"
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { 
  }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }
  mmessage ="I am message variable in child component";
  changemessage(){
    
   this.mmessage ="I am clicked from parent component to change the message in child component"
  }


  ngOnInit() {
  }
}
 



