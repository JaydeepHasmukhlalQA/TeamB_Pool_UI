import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { MatchResultsComponent } from './components/match-results/match-results.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    PreferencesComponent,
    MatchResultsComponent,
    StatisticsComponent,
    ProfileComponent
  ],
  exports: [
    MatchResultsComponent,
    PreferencesComponent,
    StatisticsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
