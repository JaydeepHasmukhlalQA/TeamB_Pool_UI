import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  loginFormSubmit() {
    console.log("form submitted");
    console.log(this.loginForm.value);
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

}
