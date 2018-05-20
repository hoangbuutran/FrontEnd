import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { NhanVienService } from '../../../shared/Service/NhanVien.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nhan-vien-tai-khoan',
  templateUrl: './nhan-vien-tai-khoan.component.html',
  styleUrls: ['./nhan-vien-tai-khoan.component.css']
})
export class NhanVienTaiKhoanComponent implements OnInit {
  id = '';
  constructor(
    private route: ActivatedRoute,
    private nhanVienService: NhanVienService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('IdTaiKhoan');
    });
  }

}
