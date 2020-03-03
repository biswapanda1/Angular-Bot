import { Component, OnInit, Input } from "@angular/core";
import { MessageService } from "../message.service";

@Component({
  selector: "app-chat-input",
  templateUrl: "./chat-input.component.html",
  styleUrls: ["./chat-input.component.css"]
})
export class ChatInputComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  public messageList = [];
  public inputValue: any = "";
  
  ngOnInit() {}
  sendMessage = () => {
    this.messageService.getMessageList().subscribe(response=>{
      this.messageList.push(JSON.stringify(response))
      });
   // this.messageList.push(this.inputValue);
    console.log(this.messageList);
  };
}
