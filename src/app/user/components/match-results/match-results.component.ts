import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.scss']
})
export class MatchResultsComponent implements OnInit {

  constructor(
    private user: UserService,
  ) { }

  ngOnInit() {

    

  }

}
