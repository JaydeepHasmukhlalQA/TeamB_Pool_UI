import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {


  constructor(
    private user: UserService,
  ) { }

  ngOnInit(): void {
  }

  updateUserForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    password: new FormControl('')
  });

  updateUserSubmit() {
    console.log('Submitted', this.updateUserForm.value);
  }

  deleteUserSubmit() {
    console.log('Submitted', this.updateUserForm.value);
  }
}
