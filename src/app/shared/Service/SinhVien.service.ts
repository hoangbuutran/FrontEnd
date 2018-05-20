import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { SinhVienModel } from '../Model/SinhVien.model';


@Injectable()

export class SinhVienService {
    constructor(
        private apiService: ApiService,
    ) { }
    sinhVienListProperty: SinhVienModel[];
    url: string;

    create(sinhVien: SinhVienModel) {
        this.url = 'http://localhost:10686/api/Sinhvien/create';
        return this.apiService.post(this.url, sinhVien);
    }

    khoaMo(sinhVienId: number | string): Observable<SinhVienModel> {
        this.url = 'http://localhost:10686/api/Sinhvien/khoamo/' + sinhVienId;
        return this.apiService.get(this.url);
    }

    upDate(sinhVien: SinhVienModel) {
        this.url = 'http://localhost:10686/api/Sinhvien/update';
        return this.apiService.put(this.url, sinhVien);
    }

    view(sinhVienId: number | string): Observable<SinhVienModel> {
        this.url = 'http://localhost:10686/api/Sinhvien/getbyid/' + sinhVienId;
        return this.apiService.get(this.url);
    }

    delete() {
        this.url = 'http://localhost:10686/api/Sinhvien/delete';
        return this.apiService.delete(this.url);
    }

    search(searchString: string): Observable<SinhVienModel[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    sinhVienList() {
        this.url = 'http://localhost:10686/api/Sinhvien/getall';
        this.apiService.get(this.url).subscribe(data => this.sinhVienListProperty = data);
    }
}
