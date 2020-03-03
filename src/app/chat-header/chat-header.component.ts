import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

  constructor() {
   }
  public botName;
  public show = false;
  public count = 0;
  ngOnInit() {
    this.botName="Sophia";
  }
  showMenu = () => {
    this.count++;
    console.log(this.count);
    if (this.count % 2 == 0) {
      this.show = false;
    } else {
      this.show = true;
    }
  };

}