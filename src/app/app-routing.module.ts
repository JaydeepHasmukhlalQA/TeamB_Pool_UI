import { CreateMatchComponent } from './match/components/create-match/create-match.component';
import { MatchQueueComponent } from './match/components/match-queue/match-queue.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './user/components/profile/profile.component';
import { PreferencesComponent } from './user/components/preferences/preferences.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/preferences', component: PreferencesComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'match/queue', component: MatchQueueComponent},
  {path: 'match/addqeue', component: CreateMatchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
