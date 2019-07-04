import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { MatchResultsComponent } from './components/match-results/match-results.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PreferencesComponent,
    MatchResultsComponent],
  exports: [
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
