import { Injectable, Component } from '@angular/core';
import { URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { QuyenModel } from '../Model/Quyen.model';


@Injectable()

export class QuyenService {
    constructor(
        private apiService: ApiService,
    ) { }
    quyenList: QuyenModel[];
    url: string;

    create(quyen: QuyenModel) {
        this.url = 'http://localhost:10686/api/quyen/create';
        return this.apiService.post(this.url, quyen);
    }

    KhoaMo(quyenId: number | string): Observable<QuyenModel> {
        this.url = 'http://localhost:10686/api/quyen/khoamo/' + quyenId;
        return this.apiService.get(this.url);
    }

    delete(quyenId: number | string): Observable<QuyenModel> {
        this.url = 'http://localhost:10686/api/quyen/delete/' + quyenId;
        return this.apiService.get(this.url);
    }
    Update(quyen: QuyenModel) {
        this.url = 'http://localhost:10686/api/quyen/update';
        return this.apiService.put(this.url, quyen);
    }

    view(quyenId: number | string): Observable<QuyenModel> {
        this.url = 'http://localhost:10686/api/quyen/getbyid/' + quyenId;
        return this.apiService.get(this.url);
    }

    search(searchString: string): Observable<QuyenModel[]> {
        this.url = '';
        return this.apiService.get(this.url);
    }

    QuyenList() {
        this.url = 'http://localhost:10686/api/quyen/getall';
        this.apiService.get(this.url).subscribe(data => this.quyenList = data);
    }
}
