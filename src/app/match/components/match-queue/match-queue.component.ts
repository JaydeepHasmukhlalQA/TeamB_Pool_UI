import { MatchService } from './../../services/match.service';
import { Iqueue } from './../../interfaces/iqueue';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-queue',
  templateUrl: './match-queue.component.html',
  styleUrls: ['./match-queue.component.scss']
})
export class MatchQueueComponent implements OnInit {

  queueData: Iqueue[];

  constructor(private matchQueue: MatchService) { }

  ngOnInit() {
    this.refreshMatchQueueData();
  }

  refreshMatchQueueData() {
    this.getMatchQueueData();
  }

  getMatchQueueData() {
    this.matchQueue.getMatchQueueData().subscribe(queueData => {
      this.queueData = queueData;
    });
  }
}
