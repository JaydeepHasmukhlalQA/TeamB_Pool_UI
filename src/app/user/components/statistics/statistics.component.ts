import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(
    private user: UserService,
  ) { }

  ngOnInit():void{
    //code to replace id=PlayedStat, with the data from the database
    //get from database, deconstruct and append

  }

}
