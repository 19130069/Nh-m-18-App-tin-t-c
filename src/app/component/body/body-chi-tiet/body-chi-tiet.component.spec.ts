import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyChiTietComponent } from './body-chi-tiet.component';

describe('BodyChiTietComponent', () => {
  let component: BodyChiTietComponent;
  let fixture: ComponentFixture<BodyChiTietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyChiTietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
