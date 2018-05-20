import { Component, OnInit } from '@angular/core';
import { SinhVienService } from '../../../shared/Service/SinhVien.service';
import { SinhVienModel } from '../../../shared/Model/SinhVien.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinh-vien-list',
  templateUrl: './sinh-vien-list.component.html',
  styleUrls: ['./sinh-vien-list.component.css']
})
export class SinhVienListComponent implements OnInit {

  sinhVienList: SinhVienModel[] = null;
  constructor(
    private sinhVienService: SinhVienService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sinhVienService.sinhVienList();
  }

  KhoaMo(id: number) {
    this.sinhVienService.khoaMo(id).subscribe(data => alert('Khoa Mo thanh cong ' + data.TenSinhVien));
    this.refreshPage();
    this.refreshDB();
  }

  XoaQuyen(id: number) {
    this.sinhVienService.khoaMo(id).subscribe(data => alert('Khoa Mo thanh cong ' + id));
    this.refreshPage();
  }

  refreshPage(): void {
    window.location.reload();
  }

  refreshDB() {
    this.router.navigate(['/admin/sinhvien']);
  }

}
