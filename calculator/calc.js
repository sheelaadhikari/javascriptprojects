function calc(){
    var opr1=document.getElementById("first").Value;
    alert(opr1);
    var opr2= document.getElementById('second').Value;
    var ope= document.getElementById('ope').Value;
    if(ope== "+"){
        var res= parseint(opr1) + parseint(opr2);
       
    }
    if(ope== "-"){
        var res= parseInt(opr1) - parseInt(opr2);
       
    }
    if(ope== "*"){
        var res= parseInt(opr1) * parseInt(opr2);
       
    }
    if(ope== "/"){
        var res= parseInt(opr1) / parseInt(opr2);
       
    }
    
 document.getElementById('res').Value=res;
}