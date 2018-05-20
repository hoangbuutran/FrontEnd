export class NhanVienModel {
    IdNhanVien: number;
    TenNhanVien: string;
    NgaySinh: string;
    DienThoai: string;
    DiaChi: string;
    Email: string;
    TrangThai: boolean;
    IdTaiKhoan: number;
    TaiKhoan: {
        IdTaiKhoan: number;
        UserName: string;
        Pass: string;
        TrangThai: boolean;
        IdQuyen: number;
    };
}
