let Toan = prompt("Nhập vào điểm Toán");
let Ly = prompt("Nhập vào điểm Lý");
let Hoa = prompt("Nhập vào điểm Hóa");
DiemToan = parseFloat(Toan);
DiemLy = parseFloat(Ly);
DiemHoa = parseFloat(Hoa);
let DTB = (DiemToan + DiemLy + DiemHoa) / 3;
alert("Điểm trung bình ba môn là : " + DTB);