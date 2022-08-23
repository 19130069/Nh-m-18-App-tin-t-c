import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTopComponent } from './scroll-to-top.component';

describe('OnTopComponent', () => {
  let component: OnTopComponent;
  let fixture: ComponentFixture<OnTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
