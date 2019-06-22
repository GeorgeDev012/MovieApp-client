import { Component } from '@angular/core';
import { Result } from './models/result.model';
import { ResultService } from './services/result.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Movies';
  public toggleFlag = false;
  public changeTheme = false;

  public showDropdown() {
    this.toggleFlag = !this.toggleFlag;
  }

  public onInputChange() {
    this.changeTheme = !this.changeTheme;
  }

}
