import { Component } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FIRST Excelsior Home';
  isSmall = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width:1200px)']).subscribe(result => {
      if(result.matches) {
        this.isSmall = true;
        console.log(this.isSmall);
      }
    });
    breakpointObserver.observe(['(min-width:1199px)']).subscribe(result => {
      if(result.matches) {
        this.isSmall = false;
        console.log(this.isSmall);
      }
    });
  }
  
  isScreenSmall(): boolean {
    return this.isSmall;
  }

  changeTitle(t: string) {
    this.title = t;
  }
  
}
