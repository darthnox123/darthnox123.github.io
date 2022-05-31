import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-mode',
  templateUrl: './toggle-mode.component.html',
  styleUrls: ['./toggle-mode.component.css']
})
export class ToggleModeComponent {
  colors : any;
  isNightVision = false;

  toggleMode(){
    this.colors = document.querySelector(':root');

    // Get Exisiting Mode
    var rs = getComputedStyle(this.colors);

    const primaryColor = rs.getPropertyValue('--pri-color')
    const secundaryColor = rs.getPropertyValue('--sec-color')

    // Change Existing Mode
    this.colors.style.setProperty('--pri-color', secundaryColor);
    this.colors.style.setProperty('--sec-color', primaryColor);
  }
}
