import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhVienDetailComponent } from './sinh-vien-detail.component';

describe('SinhVienDetailComponent', () => {
  let component: SinhVienDetailComponent;
  let fixture: ComponentFixture<SinhVienDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhVienDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhVienDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
