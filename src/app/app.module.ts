import { HttpClientModule } from '@angular/common/http';
import { MatchModule } from './match/match.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PlayerProfileComponent } from './services/player-profile/player-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    ReactiveFormsModule,
    AuthModule,
    MatchModule,
    UserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }