import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('hero') heroEl!: ElementRef<HTMLElement>;

  private cleanup?: () => void;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const hero = this.heroEl.nativeElement;

      const onMove = (e: MouseEvent) => {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        hero.style.setProperty('--glow-x', `${x}%`);
        hero.style.setProperty('--glow-y', `${y}%`);
      };

      hero.addEventListener('mousemove', onMove);
      this.cleanup = () => hero.removeEventListener('mousemove', onMove);
    });
  }

  ngOnDestroy() {
    this.cleanup?.();
  }
}
