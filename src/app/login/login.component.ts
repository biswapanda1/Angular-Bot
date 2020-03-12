import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginForm=new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  validateLogin=()=>{
    console.log(this.loginForm.value);
  };
}