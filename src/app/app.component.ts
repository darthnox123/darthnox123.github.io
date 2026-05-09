import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpen = false;
  navScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.navScrolled = window.scrollY > 40;
  }
}
