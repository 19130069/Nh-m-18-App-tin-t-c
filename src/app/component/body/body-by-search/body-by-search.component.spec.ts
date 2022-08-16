import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBySearchComponent } from './body-by-search.component';

describe('BodyBySearchComponent', () => {
  let component: BodyBySearchComponent;
  let fixture: ComponentFixture<BodyBySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyBySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyBySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
