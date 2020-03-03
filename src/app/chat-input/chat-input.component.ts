import { Component, OnInit, Input } from '@angular/core';
import {MessageServiceService} from '../'
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  constructor(private messageService:MessageServiceService) { }
  public messageList=[];
  public inputValue:any="";
  ngOnInit() {
  }
  sendMessage=()=>{
    this.messageList.push(this.inputValue);
    console.log(this.messageList);

  };
}