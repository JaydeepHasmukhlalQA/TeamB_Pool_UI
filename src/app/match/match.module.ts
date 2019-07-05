import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchQueueComponent } from './components/match-queue/match-queue.component';
import { CreateMatchComponent } from './components/create-match/create-match.component';
import { MatchComponent } from './components/match-queue/match/match.component';

@NgModule({
  declarations: [
    MatchQueueComponent,
    CreateMatchComponent,
    MatchComponent
  ],
  exports: [
    CreateMatchComponent,
    MatchQueueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MatchModule { }
