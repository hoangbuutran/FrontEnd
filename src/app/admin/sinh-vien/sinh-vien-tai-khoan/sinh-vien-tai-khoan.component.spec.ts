import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhVienTaiKhoanComponent } from './sinh-vien-tai-khoan.component';

describe('SinhVienTaiKhoanComponent', () => {
  let component: SinhVienTaiKhoanComponent;
  let fixture: ComponentFixture<SinhVienTaiKhoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhVienTaiKhoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhVienTaiKhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
