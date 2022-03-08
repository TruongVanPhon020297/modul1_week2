
function Show(){
    var Month_Value = parseFloat(document.getElementById("id_Moth").value);
    if (Month_Value >=1 && Month_Value <=12) {
        switch (Month_Value) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById("Result_id").innerHTML = "Tháng "+Month_Value+" có 31 ngày";  
            break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById("Result_id").innerHTML = "Tháng "+Month_Value+" có 30 ngày";  
                break;
            case 2:
                document.getElementById("Result_id").innerHTML = "Tháng 2 có 28 hoặc 29 ngày"; 
            default:
            
        }
    } else {
        document.getElementById("Result_id").innerHTML = "Tháng nhập vào không đúng, tháng từ 1 đến 12";
    }
}