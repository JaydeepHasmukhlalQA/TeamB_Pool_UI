import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  constructor() { }

  playerOneName: string;
  playerTwoName: string;

  ngOnInit(): void {
    
  }

  finishedMatchFromQueue() {
  }

  deleteMatchQueue() {
  }
}
