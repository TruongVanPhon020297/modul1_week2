let Id_Img = document.getElementById('img');
function init() {
    Id_Img = document.getElementById('img');
    Id_Img.style.position = 'relative';
    Id_Img.style.left = '0px';
    Id_Img.style.top = '0px';
}
function Right() {
    Id_Img.style.left = parseInt(Id_Img.style.left) + 100 + 'px';
    Id_Img.style.top = parseInt(Id_Img.style.top) + 20 + 'px';
}
function LEFT() {
    if(parseInt(Id_Img.style.left) <= 0){
        Id_Img.style.left = "0px";
        Id_Img.style.top = "0px";
    }else{
        Id_Img.style.left = parseInt(Id_Img.style.left) - 100 + 'px';
        Id_Img.style.top = parseInt(Id_Img.style.top) - 20 + 'px';
    }
   
}
window.onload = init;