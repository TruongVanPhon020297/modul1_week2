let i = 10;
let f = 20.5;
let b = true;
let s = "Hà Nội";
document.write("i = " + i);
document.write("</br>");
document.write("f = " + f);
document.write("</br>");
document.write("b = " + b);
document.write("</br>");
document.write("s = " + s);
document.write("</br>");

let width = 20
let height = 10
let area = width * height
document.write('Area = ' + area)

let Numbera = prompt("Nhập vào số a");
let Numberb = prompt("Nhập vào số b");
let Int_Numbera = parseInt(Numbera);
let Int_Numberb = parseInt(Numberb);

if((Int_Numbera % Int_Numberb)==0){
    alert("Số " + Int_Numbera + " chia hết cho số " +Int_Numberb);
}else{
    alert("Số " + Int_Numbera + " không chia hết cho số " +Numberb);
}