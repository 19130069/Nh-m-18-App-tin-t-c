import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTrangChuComponent } from './body-trang-chu.component';

describe('BodyTrangChuComponent', () => {
  let component: BodyTrangChuComponent;
  let fixture: ComponentFixture<BodyTrangChuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTrangChuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTrangChuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
