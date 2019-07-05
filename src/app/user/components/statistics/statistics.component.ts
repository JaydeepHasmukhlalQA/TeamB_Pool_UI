import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/iuser';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  userData: IUser;

  constructor(
    private user: UserService,
  ) { }

  ngOnInit() {
    const username = 'JohnKM';
    this.user.getUserData(username).subscribe(user => {
      this.userData = user;
    })
  }

}
