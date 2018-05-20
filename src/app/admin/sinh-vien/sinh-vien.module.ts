import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinhVienRoutingModule } from './sinh-vien-routing.module';
import { SinhVienComponent } from './sinh-vien.component';
import { SinhVienListComponent } from './sinh-vien-list/sinh-vien-list.component';
import { SinhVienAddComponent } from './sinh-vien-add/sinh-vien-add.component';
import { SinhVienDetailComponent } from './sinh-vien-detail/sinh-vien-detail.component';
import { SinhVienEditComponent } from './sinh-vien-edit/sinh-vien-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SinhVienTaiKhoanComponent } from './sinh-vien-tai-khoan/sinh-vien-tai-khoan.component';

@NgModule({
  imports: [
    CommonModule,
    SinhVienRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SinhVienComponent, SinhVienListComponent, SinhVienAddComponent, SinhVienDetailComponent, SinhVienEditComponent, SinhVienTaiKhoanComponent]
})
export class SinhVienModule { }
