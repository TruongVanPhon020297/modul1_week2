
function Show(){
    var Amo_id = parseFloat(document.getElementById("idAmount").value);
    var PA = parseInt(Amo_id);
    var From = document.getElementById("FromCurrency").value;
    var ToCu = document.getElementById("ToCurrency").value;
    var KQ;
    switch (From) {
        case "VietNam":
            switch (ToCu) {
                case "VND" :
                    document.getElementById("demo").innerHTML = Amo_id + " VND";
                    break;
                case "USD" :
                    KQ = Amo_id / 23000;
                    document.getElementById("demo").innerHTML = KQ + " USD";
                    break;
                case "AUD" :
                    KQ = Amo_id / 16645.02
                    document.getElementById("demo").innerHTML = KQ + " AUD";
                    break;
            }
            break;
        case "My" :
            switch (ToCu) {
                case "USD" :
                    document.getElementById("demo").innerHTML = Amo_id + " USD";
                    break;
                case "VND" :
                    KQ = Amo_id * 23000;
                    document.getElementById("demo").innerHTML = KQ + " VND";
                    break;
                case "AUD" :
                    KQ = Amo_id * 1.3738
                    document.getElementById("demo").innerHTML = KQ + " AUD";
                    break;
            }
            break;
        case "Uc" :
            switch (ToCu) {
                case "AUD" :
                    document.getElementById("demo").innerHTML = Amo_id + " AUD";
                    break;
                case "VND" :
                    KQ = Amo_id * 16645.02;
                    document.getElementById("demo").innerHTML = KQ + " VND";
                    break;
                case "USD" :
                    KQ = Amo_id / 1.3738
                    document.getElementById("demo").innerHTML = KQ + " USD";
                    break;
                }
            break;
    }
}