import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { NhanVienModel } from '../Model/NhanVien.model';


@Injectable()

export class NhanVienService {
    constructor(
        private apiService: ApiService,
    ) { }
    nhanVienListProperty: NhanVienModel[];
    url: string;

    create(nhanVien: NhanVienModel) {
        this.url = 'http://localhost:10686/api/nhanvien/create';
        return this.apiService.post(this.url, nhanVien);
    }

    khoaMo(nhanVienId: number | string): Observable<NhanVienModel> {
        this.url = 'http://localhost:10686/api/nhanvien/khoamo/' + nhanVienId;
        return this.apiService.get(this.url);
    }

    upDate(nhanVien: NhanVienModel) {
        this.url = 'http://localhost:10686/api/nhanvien/update';
        return this.apiService.put(this.url, nhanVien);
    }

    view(nhanVienId: number | string): Observable<NhanVienModel> {
        this.url = 'http://localhost:10686/api/nhanvien/getbyid/' + nhanVienId;
        return this.apiService.get(this.url);
    }

    delete(nhanVienId: number | string) {
        this.url = 'http://localhost:10686/api/nhanvien/delete/' + nhanVienId;
        return this.apiService.get(this.url);
    }

    viewTaiKhoan(taiKhoanId: number | string) {
        this.url = 'http://localhost:10686/api/taikhoan/getbyid/' + taiKhoanId;
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<NhanVienModel[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    nhanVienList() {
        this.url = 'http://localhost:10686/api/nhanvien/getall';
        this.apiService.get(this.url).subscribe(data => this.nhanVienListProperty = data);
    }
}
