import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeiasComponent } from './ideias.component';

describe('IdeiasComponent', () => {
  let component: IdeiasComponent;
  let fixture: ComponentFixture<IdeiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
