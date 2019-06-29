import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './_services/movie.service';
import { RequestService } from './_services/request.service';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { MovieComponent } from './movie/movie.component';
import { ApiKeyService } from './_services/apikey.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularComponent,
    UpcomingComponent,
    PeopleComponent,
    LoginComponent,
    RegisterComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    MovieService,
    RequestService,
    ApiKeyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
