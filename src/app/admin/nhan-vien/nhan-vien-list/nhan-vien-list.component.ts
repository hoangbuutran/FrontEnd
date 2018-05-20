import { Component, OnInit } from '@angular/core';
import { NhanVienModel } from '../../../shared/Model/NhanVien.model';
import { NhanVienService } from '../../../shared/Service/NhanVien.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nhan-vien-list',
  templateUrl: './nhan-vien-list.component.html',
  styleUrls: ['./nhan-vien-list.component.css']
})

export class NhanVienListComponent implements OnInit {
  nhanVienList: NhanVienModel[] = null;
  constructor(
    private nhanVienService: NhanVienService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.nhanVienService.nhanVienList();
  }

  KhoaMo(id: number) {
    if (confirm('Bạn có chắc chắn muốn khóa nhân viên ?') === true) {
      this.nhanVienService.khoaMo(id)
        .subscribe(x => {
          this.nhanVienService.nhanVienList();
          this.toastr.warning('Khóa nhân viên thành công', 'Thông báo');
        });
    }
  }

  XemTaiKhoan(IdTaiKhoan: number | string) {

  }

  XoaQuyen(id: number) {
    if (confirm('Bạn có chắc chắn muốn xóa nhân viên ?') === true) {
      this.nhanVienService.delete(id)
        .subscribe(x => {
          this.nhanVienService.nhanVienList();
          this.toastr.warning('Xóa nhân viên thành công', 'Thông báo');
        });
    }
  }
}
