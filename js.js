var ans=0;
var equ="";
document.getElementById("add").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans+a;
    if(equ.length==0)
    equ=equ+ans;
    else
    equ=equ+("+"+a);
     b=document.getElementById("result").textContent=(ans);
}
document.getElementById("sub").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
     ans=ans-a;
    if(equ.length==0)
    equ=equ+ans;
    else
    equ=equ+("-"+a);
     b=document.getElementById("result").textContent=(ans);

}
document.getElementById("mul").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans*a;
   if(equ.length==0)
   equ=equ+ans;
   else
   equ=equ+("*"+a);
    b=document.getElementById("result").textContent=(ans);
}
document.getElementById("div").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    ans=ans/a;
   if(equ.length==0)
   equ=equ+ans;
   else
   equ=equ+("/"+a);
    b=document.getElementById("result").textContent=(ans);
}
document.getElementById("equals").onclick=function(){
    b=document.getElementById("result").textContent=(ans);
    b=document.getElementById("equal").textContent=(equ);
}