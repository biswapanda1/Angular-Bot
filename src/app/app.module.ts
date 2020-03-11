import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatResultComponent } from './chat-result/chat-result.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, ChatHeaderComponent, ChatInputComponent, ChatResultComponent, LoginComponent ],
  providers: [ MessageService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
