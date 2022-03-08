let Toan = prompt("Nhập vào điểm Toán");
let Ly = prompt("Nhập vào điểm Lý");
let Hoa = prompt("Nhập vào điểm Hóa");
let DiemToan = parseFloat(Toan);
let DiemLy = parseFloat(Ly);
let DiemHoa = parseFloat(Hoa);
let DTB = (DiemToan + DiemLy + DiemHoa) / 3;
let Tong = DiemToan + DiemLy + DiemHoa;
alert("Điểm trung bình của ba môn là : " +DTB+ ", Tổng là : "+Tong);

let NhapC = prompt("Nhập vào độ C ");
let DoC = parseFloat(NhapC);
let DoF = ((9*DoC)/5)+32;
alert(DoC + " Độ C bằng "+DoF+ " Độ F");

let NhapBanKinh = prompt("Nhập vào bán kính hình tròn ");
let BanKinh = parseFloat(NhapBanKinh);
const PI = 3.14;
let DienTich = PI*(Math.pow(BanKinh,2));
let ChuVi = 2*BanKinh*PI;
alert("Diện tích hình tròn là : "+DienTich+ ", Chu vi hình tròn là : "+ChuVi);