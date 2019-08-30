import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl :'./parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message:string;
   receiveMessage($event: string) {
    this.message = $event
   }
   parentmessage:string="Hello I am a string variable from parent component and want to say HELLO to the child component"
  
  constructor() {}

  ngOnInit() {
  }
}
