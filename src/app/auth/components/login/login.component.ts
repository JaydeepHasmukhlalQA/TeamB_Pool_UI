import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  loginFormSubmit() {
    let vals = this.loginForm.value;
    let player = this.auth.getUserData(vals.username);
    if (vals.password == player.password) {
      this.router.navigate(['/playerProfile']);
    }
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

}
