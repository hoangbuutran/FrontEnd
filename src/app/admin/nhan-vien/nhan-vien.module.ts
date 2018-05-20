import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhanVienRoutingModule } from './nhan-vien-routing.module';
import { NhanVienComponent } from './nhan-vien.component';
import { NhanVienListComponent } from './nhan-vien-list/nhan-vien-list.component';
import { NhanVienAddComponent } from './nhan-vien-add/nhan-vien-add.component';
import { NhanVienEditComponent } from './nhan-vien-edit/nhan-vien-edit.component';
import { NhanVienDetailComponent } from './nhan-vien-detail/nhan-vien-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NhanVienTaiKhoanComponent } from './nhan-vien-tai-khoan/nhan-vien-tai-khoan.component';

@NgModule({
  imports: [
    CommonModule,
    NhanVienRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NhanVienComponent, NhanVienListComponent, NhanVienAddComponent, NhanVienEditComponent, NhanVienDetailComponent, NhanVienTaiKhoanComponent]
})
export class NhanVienModule { }
