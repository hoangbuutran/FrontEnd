import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NhanVienService } from '../../../shared/Service/NhanVien.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nhan-vien-edit',
  templateUrl: './nhan-vien-edit.component.html',
  styleUrls: ['./nhan-vien-edit.component.css']
})
export class NhanVienEditComponent implements OnInit {

  id = '';
  NhanVienEditForm: FormGroup;

  TrangThaiList = [
    { id: true, name: 'Mở Quyền' },
    { id: false, name: 'Khóa Quyền' },
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private nhanVienService: NhanVienService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdNhanVien');
    });
    this.NhanVienEditForm = this.fb.group({
      IdNhanVien: [''],
      TenNhanVien: ['', Validators.required],
      NgaySinh: ['', Validators.required],
      DienThoai: ['', Validators.required],
      DiaChi: ['', Validators.required],
      Email: ['', Validators.required],
      TrangThai: ['', Validators.required],
    });
    this.loadForm();
  }

  loadForm() {
    this.nhanVienService.view(this.id).subscribe(data => {
      this.NhanVienEditForm.get('IdNhanVien').patchValue(data.IdNhanVien);
      this.NhanVienEditForm.get('TenNhanVien').patchValue(data.TenNhanVien);
      this.NhanVienEditForm.get('NgaySinh').patchValue(data.NgaySinh);
      this.NhanVienEditForm.get('DienThoai').patchValue(data.DienThoai);
      this.NhanVienEditForm.get('DiaChi').patchValue(data.DiaChi);
      this.NhanVienEditForm.get('Email').patchValue(data.Email);
      this.NhanVienEditForm.get('TrangThai').patchValue(data.TrangThai);
    });
  }

  NhanVienEditSubmitForm() {
    this.nhanVienService.upDate(this.NhanVienEditForm.value)
      .subscribe(data => {
        this.nhanVienService.nhanVienList();
        this.toastr.success('Quyền đã được sửa thành công', 'Thông báo');
      });
    this.router.navigate(['/admin/nhanvien/list']);
  }
}
