import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-result',
  templateUrl: './chat-result.component.html',
  styleUrls: ['./chat-result.component.css']
})
export class ChatResultComponent implements OnInit {

  constructor() { }
  inputval:string;
  //@Input public inputval;
  ngOnInit() {
  }

}