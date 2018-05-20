import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanVienEditComponent } from './nhan-vien-edit.component';

describe('NhanVienEditComponent', () => {
  let component: NhanVienEditComponent;
  let fixture: ComponentFixture<NhanVienEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanVienEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanVienEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
