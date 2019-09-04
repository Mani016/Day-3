import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
   styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  @Input()  childmessage : string;      //This input decorator will take this message from parent
  sum:number = 2+2 
   @Output() messageEvent = new EventEmitter<number>();
           
  // This Output decorator will take this message to the parent
   constructor() { 
 }
   SUM() {        
    this.messageEvent.emit(this.sum)
      }
   data =" Data: I am data in child component";
   changedata(){
    this.data ="On clicking from parent component child changedata() function triggered and changes the Data"
   }
 
  
  ngOnInit() {
  }
}
//  sub:number = 5-5
 
 
 

//    SUB(){
//     this.messageEvent.emit(this.sub)
//    }
   




