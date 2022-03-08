let Weight = prompt("Input Weight");
let Height = prompt("Input Height");
let Weight_Value = parseFloat(Weight);
let Height_Value = parseFloat(Height);
let BMI = Weight_Value / (Math.pow(Height_Value,2));
if(BMI < 18.5){
    alert("Underweight");
}else {
    if(BMI >= 18.5 && BMI < 25.0){
        alert("Normal");
    }else {
        if(BMI >= 25.0 && BMI < 30.0){
            alert("Overweight");
        }
        else{
            alert("Obese");
        }
    }
}
