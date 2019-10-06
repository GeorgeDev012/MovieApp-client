import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserService } from './_services/user.service';
import { UserAuthService } from './_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Movies';
  public toggleFlag = false;
  public changeTheme = false;
  public isExpanded = false;
  public themeColor = '#eeeeee';
  
  constructor(private userService: UserService, public userAuthService: UserAuthService, private router: Router) {}


  public showDropdown() {
    this.toggleFlag = !this.toggleFlag;
  }

  public onInputChange() {
    this.changeTheme = !this.changeTheme;
    this.setBackgroundColor();
  }

  private setBackgroundColor() {
    if(this.themeColor === '#d2f8d2') this.themeColor = '#eeeeee';
    else this.themeColor = '#d2f8d2';
  }

  private logout() {
    this.userService.logout().subscribe(
      response => {
        this.userService.clearToken();
        this.router.navigate(['/'])
      },
      errors => console.log(errors)
    )
  }
}
