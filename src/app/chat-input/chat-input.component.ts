import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  public inputValue:any="";
  constructor() { }
  @Input() inputval:string;
  ngOnInit() {
  }
  sendMessage=()=>{
    console.log(this.inputValue);
  };
}