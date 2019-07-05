import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IMatch } from '../../interfaces/imatch';

@Component({
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.scss']
})
export class MatchResultsComponent implements OnInit {

  matchesData: IMatch[];

  constructor(
    private user: UserService,
  ) { }


  ngOnInit() {
    this.user.getMatchesData().subscribe(matchesData => {
      this.matchesData = matchesData;
    });



  }

}
