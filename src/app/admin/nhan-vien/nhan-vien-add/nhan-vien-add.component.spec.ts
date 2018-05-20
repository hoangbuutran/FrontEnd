import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanVienAddComponent } from './nhan-vien-add.component';

describe('NhanVienAddComponent', () => {
  let component: NhanVienAddComponent;
  let fixture: ComponentFixture<NhanVienAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanVienAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanVienAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
