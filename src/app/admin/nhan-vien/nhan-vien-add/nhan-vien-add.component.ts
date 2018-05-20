import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NhanVienService } from '../../../shared/Service/NhanVien.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nhan-vien-add',
  templateUrl: './nhan-vien-add.component.html',
  styleUrls: ['./nhan-vien-add.component.css']
})
export class NhanVienAddComponent implements OnInit {

  NhanVienAddForm: FormGroup;

  TrangThaiList = [
    { id: true, name: 'Mở Nhân Viên' },
    { id: false, name: 'Khóa Nhân Viên' },
  ];

  constructor(
    private fb: FormBuilder,
    private nhanVienService: NhanVienService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.NhanVienAddForm = this.fb.group({
      TenNhanVien: ['', Validators.required],
      NgaySinh: ['', Validators.required],
      DienThoai: ['', Validators.required],
      DiaChi: ['', Validators.required],
      Email: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
  }

  NhanVienAddSubmitForm() {
    this.nhanVienService.create(this.NhanVienAddForm.value)
      .subscribe(data => {
        this.nhanVienService.nhanVienList();
        this.toastr.success('Nhân viên mới đã được tạo', 'Thông báo');
      });
    this.router.navigate(['/admin/nhanvien/list']);
  }
}
