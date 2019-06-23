import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';

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

}
