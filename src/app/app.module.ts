import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApiService } from './shared/Service/api.service';
import { SessionService } from './shared/Service/session.service';
import { QuyenService } from './shared/Service/Quyen.service';
import { NhanVienService } from './shared/Service/NhanVien.service';
import { SinhVienService } from './shared/Service/SinhVien.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagerService } from './shared/Service/Pager.Service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [
  ],
  providers: [
    ApiService,
    SessionService,
    QuyenService,
    NhanVienService,
    SinhVienService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
