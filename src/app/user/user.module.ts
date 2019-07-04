import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { MatchResultsComponent } from './components/match-results/match-results.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProfileComponent } from './components/profile/profile.component';
>>>>>>> dab82479f0b74371e1f0914d8e4f335e6b406a58



@NgModule({
  declarations: [
    PreferencesComponent,
<<<<<<< HEAD
    MatchResultsComponent],
  exports: [
    PreferencesComponent
=======
    MatchResultsComponent,
    StatisticsComponent,
    ProfileComponent
  ],
  exports: [
    MatchResultsComponent,
    PreferencesComponent,
    StatisticsComponent,
    ProfileComponent
>>>>>>> dab82479f0b74371e1f0914d8e4f335e6b406a58
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
