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
  }

  clearInput(){
    console.log("fsdfdfd")
  }

  sendMessage = () => {
    this.messageService.addMessage(this.inputValue).subscribe(res => {
      console.log(res);

      this.getResult(this.inputValue,res.createdDate);
      this.inputValue="";
    });     
    console.log("UserInput List"+JSON.stringify(this.messageList));
  };
  getResult = (inputVal,createdDate) => {
    console.log("inside getResult");
    this.messageService.getGoogleSearch(inputVal).subscribe(res => {
     let messageObj={};
     messageObj['userInput']=inputVal;
     messageObj['createdDate']=createdDate;     
      if (res.items) {        
        console.log(res.items);
        messageObj['result']=res.items[0].title;
      }else{
        messageObj['result']="No result found, Please try with different keywords.";
      }
      this.messageList.push(messageObj);
      console.log("Result List"+JSON.stringify(this.messageList));
    });
  };
}
