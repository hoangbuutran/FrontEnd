import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinhVienComponent } from './sinh-vien.component';
import { SinhVienAddComponent } from './sinh-vien-add/sinh-vien-add.component';
import { SinhVienListComponent } from './sinh-vien-list/sinh-vien-list.component';
import { SinhVienEditComponent } from './sinh-vien-edit/sinh-vien-edit.component';
import { SinhVienDetailComponent } from './sinh-vien-detail/sinh-vien-detail.component';
import { SinhVienTaiKhoanComponent } from './sinh-vien-tai-khoan/sinh-vien-tai-khoan.component';

const routes: Routes = [
  {
    path: '',
    component: SinhVienComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: SinhVienAddComponent },
      { path: 'list', component: SinhVienListComponent },
      { path: 'edit/:IdSinhVien', component: SinhVienEditComponent },
      { path: 'detail/:IdSinhVien', component: SinhVienDetailComponent },
      { path: 'sinhvientaikhoan/:IdTaiKhoan', component: SinhVienTaiKhoanComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinhVienRoutingModule { }
