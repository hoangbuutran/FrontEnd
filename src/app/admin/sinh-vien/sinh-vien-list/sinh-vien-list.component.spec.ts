import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhVienListComponent } from './sinh-vien-list.component';

describe('SinhVienListComponent', () => {
  let component: SinhVienListComponent;
  let fixture: ComponentFixture<SinhVienListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhVienListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhVienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
