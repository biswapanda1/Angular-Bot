import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class MessageService {

  constructor(private http: HttpClient) { }

  getMessageList(){
   return this.http.get("https://5e5e480b725f320014ed12f4.mockapi.io/MessageList");
  }

  getGoogleSearch(message: any){
   return this.http.get(`https://www.google.com/search?q=${message}`);
  }
  addMessage (message: any): Observable<any> {
  return this.http.post<any>("https://5e5e480b725f320014ed12f4.mockapi.io/MessageList", { message:message })
}

}