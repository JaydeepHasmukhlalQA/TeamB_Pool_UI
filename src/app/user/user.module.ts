import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { MatchResultsComponent } from './components/match-results/match-results.component';



@NgModule({
  declarations: [PreferencesComponent, MatchResultsComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
