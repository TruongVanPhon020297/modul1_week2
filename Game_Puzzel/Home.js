function Show_cat(stt) {
    
    let img_value = document.getElementById("image");
    let img_value1 = document.getElementById("image1");
    let img_value2 = document.getElementById("image2");
    let img_value3 = document.getElementById("image3");
    let img_value4 = document.getElementById("image4");

    let value_random = Math.floor(Math.random() * 3);
    let value_alt = parseInt(document.getElementById("image").alt);
    let value_alt1 = parseInt(document.getElementById("image1").alt);
    let value_alt2 = parseInt(document.getElementById("image2").alt);
    let value_alt3 = parseInt(document.getElementById("image3").alt);
    let value_alt4 = parseInt(document.getElementById("image4").alt);
    if(stt == 0){
        if(value_alt == 2){
            value_random = 0;
            document.getElementById("image").alt = value_random;
        }else{
            value_random = value_alt + 1;
            document.getElementById("image").alt = value_random;
        }
        switch(value_random){
            case 0:
                img_value.src = ".//img/monkey_part1x1.jpg";
                break;
            case 1:
                img_value.src = ".//img/panda_swap_part1x1.jpg";
                break;
            case 2:
                img_value.src = ".//img/funny-cat1_part1x1.jpg";
                break;
        }
        console.log(value_random);
    }else if(stt == 1){
        if(value_alt1 == 2){
            value_random = 0;
            document.getElementById("image1").alt = value_random;
        }else{
            value_random = value_alt1 + 1;
            document.getElementById("image1").alt = value_random;
        }
        switch(value_random){
            case 0:
                img_value1.src = ".//img/monkey_part2x1.jpg";
                break;
            case 1:
                img_value1.src = ".//img/panda_swap_part2x1.jpg";
                break;
            case 2:
                img_value1.src = ".//img/funny-cat1_part2x1.jpg";
                break;
        }
        console.log(value_random);
    }else if(stt == 2){
        if(value_alt2 == 2){
            value_random = 0;
            document.getElementById("image2").alt = value_random;
        }else{
            value_random = value_alt2 + 1;
            document.getElementById("image2").alt = value_random;
        }
        switch(value_random){
            case 0:
                img_value2.src = ".//img/monkey_part3x1.jpg";
                break;
            case 1:
                img_value2.src = ".//img/panda_swap_part3x1.jpg";
                break;
            case 2:
                img_value2.src = ".//img/funny-cat1_part3x1.jpg";
                break;
        }
        console.log(value_random);
    }else if(stt == 3){
        if(value_alt3 == 2){
            value_random = 0;
            document.getElementById("image3").alt = value_random;
        }else{
            value_random = value_alt3 + 1;
            document.getElementById("image3").alt = value_random;
        }
        switch(value_random){
            case 0:
                img_value3.src = ".//img/monkey_part4x1.jpg";
                break;
            case 1:
                img_value3.src = ".//img/panda_swap_part4x1.jpg";
                break;
            case 2:
                img_value3.src = ".//img/funny-cat1_part4x1.jpg";
                break;
        }
        console.log(value_random);
    }else {
        if(value_alt4 == 2){
            value_random = 0;
            document.getElementById("image4").alt = value_random;
        }else{
            value_random = value_alt4 + 1;
            document.getElementById("image4").alt = value_random;
        }
        switch(value_random){
            case 0:
                img_value4.src = ".//img/monkey_part5x1.jpg";
                break;
            case 1:
                img_value4.src = ".//img/panda_swap_part5x1.jpg";
                break;
            case 2:
                img_value4.src = ".//img/funny-cat1_part5x1.jpg";
                break;
        }
        console.log(value_random);
    }
    let value = parseInt(document.getElementById("image").alt);
    let value1= parseInt(document.getElementById("image1").alt);
    let value2 = parseInt(document.getElementById("image2").alt);
    let value3 = parseInt(document.getElementById("image3").alt);
    let value4 = parseInt(document.getElementById("image4").alt);
    if((value == value1 ) &&(value1 == value2 ) && (value2 == value3) && (value3 == value4)){
        document.getElementById("image").style.border = "3px solid red";
        document.getElementById("image1").style.border = "3px solid red";
        document.getElementById("image2").style.border = "3px solid red";
        document.getElementById("image3").style.border = "3px solid red";
        document.getElementById("image4").style.border = "3px solid red";
    }else {
        document.getElementById("image").style.border = "none";
        document.getElementById("image1").style.border = "none";
        document.getElementById("image2").style.border = "none";
        document.getElementById("image3").style.border = "none";
        document.getElementById("image4").style.border = "none";
    }
}
   