import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
import { ProfileComponent } from './user/components/profile/profile.component';
>>>>>>> dab82479f0b74371e1f0914d8e4f335e6b406a58
import { PreferencesComponent } from './user/components/preferences/preferences.component';


const routes: Routes = [
<<<<<<< HEAD
  { path: 'profile/preferences', component: PreferencesComponent}
=======
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/preferences', component: PreferencesComponent}
>>>>>>> dab82479f0b74371e1f0914d8e4f335e6b406a58
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
