import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  constructor() { }
  public message:any;
  public inputValue:any="";
  ngOnInit() {
  }
  sendMessage=()=>{
    this.message=this.inputValue;
    console.log(this.inputValue);
  };
}