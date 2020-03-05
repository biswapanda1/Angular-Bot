import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-result',
  templateUrl: './chat-result.component.html',
  styleUrls: ['./chat-result.component.css']
})
export class ChatResultComponent implements OnInit {
  @Input() messageList:any;  
  constructor() { }
  public date;
  inputval:string;
  ngOnInit() {
    this.date=Date.now();
  }

}