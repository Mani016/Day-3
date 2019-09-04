import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl :'./parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name:string='';    // This message will show in child
  message:number; 
  receiveMessage($event:number) {    //This will receive data from child when event being hit from child 
    this.message = $event
  }
  ngOnInit() {
  }
}
