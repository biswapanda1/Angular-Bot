import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatResultComponent } from './chat-result/chat-result.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [    
  ],
  imports: [
    RouterModule.forRoot([
       { path: 'input', component: ChatInputComponent },
       { path: 'result', component: ChatResultComponent },
       { path: '', component: ChatInputComponent },
         { path: 'login', component: LoginComponent }

      ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


