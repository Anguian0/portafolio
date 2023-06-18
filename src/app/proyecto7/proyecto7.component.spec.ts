import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto7Component } from './proyecto7.component';

describe('Proyecto7Component', () => {
  let component: Proyecto7Component;
  let fixture: ComponentFixture<Proyecto7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyecto7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
