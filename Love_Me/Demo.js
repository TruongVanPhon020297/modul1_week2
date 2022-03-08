function Show(){
    alert("Yes! you are right !!!");
}
function Run_Love(){
    let id_NoLove = document.getElementById("No_Love");
    let inner_H = Math.floor(Math.random()*window.innerHeight);
    let inner_W = Math.floor(Math.random()*window.innerHeight);
    id_NoLove.style.left = inner_W + "px";
    id_NoLove.style.top = inner_H + "px";
    
}