import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  validateLogin=()=>{
    console.log(this.loginForm.value);
  };
}