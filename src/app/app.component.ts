import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  address = "test";
  isLogin = null;
  constructor(private router: Router) {}
  ngOnInit() {
    this.isLogin = localStorage.getItem("isLogin");
    if (this.isLogin == null) {
      this.router.navigateByUrl("/login");
    } else {
      this.router.navigateByUrl("/");
    }
  }
}
