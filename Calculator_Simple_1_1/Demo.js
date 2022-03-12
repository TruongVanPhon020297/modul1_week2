function Show(calc){
    let Value_1 = parseInt(document.getElementById("Value_1").value);
    let Value_2 = parseInt(document.getElementById("Value_2").value);
    let Result ;
    switch (calc) {
        case 1:
            Result = Value_1 + Value_2;
            document.getElementById("result").innerHTML = Value_1 +" + "+Value_2+ " = "+ Result;
            break;
        case 2:
            Result = Value_1 - Value_2;
            document.getElementById("result").innerHTML = Value_1 +" - "+Value_2+ " = "+ Result;
            break;
        case 3:
            Result = Value_1 * Value_2;
            document.getElementById("result").innerHTML = Value_1 +" * "+Value_2+ " = "+ Result;
            break;
        default :
            Result = Value_1 / Value_2;
            document.getElementById("result").innerHTML = Value_1 +" / "+Value_2+ " = "+ Result;
            break;
    }
}