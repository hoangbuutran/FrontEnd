import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhVienEditComponent } from './sinh-vien-edit.component';

describe('SinhVienEditComponent', () => {
  let component: SinhVienEditComponent;
  let fixture: ComponentFixture<SinhVienEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhVienEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhVienEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
