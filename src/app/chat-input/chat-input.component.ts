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
      var message = {};
      for(let i=0;i<response.length;i++){
        message['message'] =response[i].message
           this.messageService.getGoogleSearch(response[i].message).subscribe(res=>{
             if(res.items){
               message['result']=res.items[0]['title']
             }
      console.log(res.items);
    })
        console.log(message);
          this.messageList.push(message);
      }
      });
    console.log(this.messageList);
  }
  sendMessage = () => {
    // this.messageService.getGoogleSearch(this.inputValue).subscribe(res=>{
    //   console.log(res.items);
    // })
    this.messageService.addMessage(this.inputValue).subscribe(res=>{
     this.ngOnInit();
    });
  console.log("hello");
  };
}
