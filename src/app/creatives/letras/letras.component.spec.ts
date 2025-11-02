/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LetrasComponent } from './letras.component';

describe('LetrasComponent', () => {
  let component: LetrasComponent;
  let fixture: ComponentFixture<LetrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
