import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhVienAddComponent } from './sinh-vien-add.component';

describe('SinhVienAddComponent', () => {
  let component: SinhVienAddComponent;
  let fixture: ComponentFixture<SinhVienAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhVienAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhVienAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
