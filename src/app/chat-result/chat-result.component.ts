import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-result',
  templateUrl: './chat-result.component.html',
  styleUrls: ['./chat-result.component.css']
})
export class ChatResultComponent implements OnInit {
  @Input() messageList:any;  
  constructor(private router:Router) { }
  public date;
  inputval:string;
  ngOnInit() {
    this.date=Date.now();
    this.router.navigateByUrl('/')
  }

}