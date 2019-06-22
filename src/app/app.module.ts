import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './services/movie.service';
import { ResultService } from './services/result.service';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularComponent,
    UpcomingComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MovieService,
    ResultService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
