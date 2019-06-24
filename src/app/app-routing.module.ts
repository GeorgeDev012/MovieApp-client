import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'popular', component: PopularComponent },
  {path: 'upcoming', component: UpcomingComponent },
  {path: 'people', component: PeopleComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movie/:id', component: MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
