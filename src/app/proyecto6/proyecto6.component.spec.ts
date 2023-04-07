import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto6Component } from './proyecto6.component';

describe('Proyecto6Component', () => {
  let component: Proyecto6Component;
  let fixture: ComponentFixture<Proyecto6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyecto6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyecto6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
