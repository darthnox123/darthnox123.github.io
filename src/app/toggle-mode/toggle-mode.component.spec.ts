import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleModeComponent } from './toggle-mode.component';

describe('ToggleModeComponent', () => {
  let component: ToggleModeComponent;
  let fixture: ComponentFixture<ToggleModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
