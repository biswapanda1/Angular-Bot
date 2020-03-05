import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

  constructor(private router:Router) {
   }
  public botName;
  public show = false;
  public count = 0;
  
  ngOnInit() {
    this.botName="Sophia";
    
  }
  clearChat(){
    this.show = false;
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