import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', 'menu-bar-responsive.component.css']
})
export class MenuBarComponent {
  styleNg: any;
  button: string;

  constructor() {

    this.button = 'DESFIXAR';

    this.styleNg = {
      'position': 'fixed',
      'background': 'transparent',
      'background-image': 'transparent'
    };

  }

  changePosition(): void {
    if(this.styleNg['position'] === "fixed") {
      this.styleNg['position'] = "static"
      this.styleNg['background'] = "rgb(53,32,5)"
      this.styleNg['background-image'] = "radial-gradient(circle, rgba(161,32,21,1) 0%, rgba(53,32,5,1) 100%)"
      this.button = "FIXAR"
    } else {
      this.styleNg['position'] = "fixed"
      this.styleNg['background'] = "transparent"
      this.styleNg['background-image'] = "transparent"
      this.button = "DESFIXAR"
    }
  }

}
