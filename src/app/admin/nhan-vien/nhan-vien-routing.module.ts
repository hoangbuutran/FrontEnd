import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NhanVienComponent } from './nhan-vien.component';
import { NhanVienListComponent } from './nhan-vien-list/nhan-vien-list.component';
import { NhanVienAddComponent } from './nhan-vien-add/nhan-vien-add.component';
import { NhanVienEditComponent } from './nhan-vien-edit/nhan-vien-edit.component';
import { NhanVienDetailComponent } from './nhan-vien-detail/nhan-vien-detail.component';
import { NhanVienTaiKhoanComponent } from './nhan-vien-tai-khoan/nhan-vien-tai-khoan.component';

const routes: Routes = [
  {
    path: '',
    component: NhanVienComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: NhanVienListComponent },
      { path: 'add', component: NhanVienAddComponent },
      { path: 'edit/:IdNhanVien', component: NhanVienEditComponent },
      { path: 'detail/:IdNhanVien', component: NhanVienDetailComponent },
      { path: 'nhanvientaikhoan/:IdTaiKhoan', component: NhanVienTaiKhoanComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhanVienRoutingModule { }
