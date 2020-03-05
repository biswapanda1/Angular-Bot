import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class MessageService {
  constructor(private http: HttpClient) {}

  getMessageList(): Observable<any> {
    return this.http.get(
      "https://5e5e480b725f320014ed12f4.mockapi.io/MessageList"
    );
  }

  getGoogleSearch(message: any) {
    return this.http.get(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBjIorVuRqmkIAQ_ACShxqL-u8geCL9y1A&cx=007027725621543004989:cc7gujtigng&q=${message}&start=1`
    );
  }
  addMessage(message: any): Observable<any> {
    return this.http.post<any>(
      "https://5e5e480b725f320014ed12f4.mockapi.io/MessageList",
      { message: message, createdDate: Date.now() },
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }
}
