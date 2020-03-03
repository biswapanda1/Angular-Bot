import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) { }

  getMessageList(){
   return this.http.get("https://5e5e480b725f320014ed12f4.mockapi.io/MessageList");
  }

}