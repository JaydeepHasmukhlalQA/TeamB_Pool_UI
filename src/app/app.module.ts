import { MatchModule } from './match/match.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { ReactiveFormsModule } from '@angular/forms';
=======
import { UserModule } from './user/user.module';
>>>>>>> dab82479f0b74371e1f0914d8e4f335e6b406a58

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    UserModule,
    ReactiveFormsModule
=======
    AuthModule,
    MatchModule,
    UserModule,
>>>>>>> dab82479f0b74371e1f0914d8e4f335e6b406a58
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
