function calc(){
    var opr1=document.getElementById('first').Value;
    var opr2= document.getElementById('second').Value;
    var ope= document.getElementById('ope').Value;
    if(ope== "+"){
        var res= parseInt(opr1) + parseInt(opr2);
       
    }
    
    alert(res);
}