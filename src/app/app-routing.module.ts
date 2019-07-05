import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchResultsComponent } from './user/components/match-results/match-results.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import { PreferencesComponent } from './user/components/preferences/preferences.component';
import { StatisticsComponent } from './user/components/statistics/statistics.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/preferences', component: PreferencesComponent},
  {path: 'profile/match-results', component: MatchResultsComponent},
  {path: 'profile', component: ProfileComponent},
  //temp until merged into profile component
  {path: 'profile/stats', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }