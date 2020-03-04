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
  
  ngOnInit() {
      this.messageService.getMessageList().subscribe(response=>{
      console.log(response.length);
      for(let i=0;i<response.length;i++){
          this.messageList.push(response[i].message);
      }
      });
    console.log(this.messageList);
  }
  sendMessage = () => {
  
  };
}
