import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyByMenuComponent } from './body-by-menu.component';

describe('BodyByMenuComponent', () => {
  let component: BodyByMenuComponent;
  let fixture: ComponentFixture<BodyByMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyByMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyByMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
