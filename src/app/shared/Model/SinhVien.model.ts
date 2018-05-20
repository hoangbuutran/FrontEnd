export class SinhVienModel {
    IdSinhVien: number;
    MaSinhVien: string;
    TenSinhVien: string;
    NgaySinh: string;
    CMND: string;
    DienThoai: string;
    DiaChi: string;
    Email: string;
    TrangThai: boolean;
    IdTaiKhoan: number;
    IdChuyenNganh: number;
    ChuyenNganh: { };
    PhieuDangKy: { };
    TaiKhoan: {
        IdTaiKhoan: number;
        UserName: string;
        Pass: string;
        TrangThai: boolean;
        IdQuyen: number;
    };
}
