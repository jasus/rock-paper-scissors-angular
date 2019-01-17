import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { RockPaperScissorsService } from './services/rock-paper-scissors.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFontAwesomeModule
  ],
  providers: [RockPaperScissorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
