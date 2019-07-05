import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private auth: authService) { }

  ngOnInit() {
  }


  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  registerSubmit() {
    let vals = this.registerForm.value;
    this.auth.setUserData(vals);
    this.router.navigate(['/login']);
  }



}
