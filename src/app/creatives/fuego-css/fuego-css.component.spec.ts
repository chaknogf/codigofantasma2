/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FuegoCssComponent } from './fuego-css.component';

describe('FuegoCssComponent', () => {
  let component: FuegoCssComponent;
  let fixture: ComponentFixture<FuegoCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuegoCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuegoCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
