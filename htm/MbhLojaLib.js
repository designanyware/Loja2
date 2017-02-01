//### Guarda em variável a página atual
var sPag=document.location.href.toUpperCase();

//### Função que valida a busca  
function VerTexto(oNome){
 if (oNome.Texto.value=='' || oNome.Texto.value.length<2){
   alert('Busca inválida.');
   oNome.Texto.focus();
   return false;}
 else{return true;}
}

//### Função que mostra Economia
function MostraEconomia(PrecoProd,PrecoOri){
if(PrecoProd!=PrecoOri)document.write("<br><font color=#6f9e45>Economize <b>"+FormatPrice(PrecoOri-PrecoProd,'R$')+"</b> ("+FormatNum(((PrecoOri-PrecoProd)/PrecoOri)*100)+"%)</font>");
}

function FormatNum(num){
num=num.toString().replace(/\$|\,/g,'');
if(isNaN(num))num="0";
sign=(num==(num=Math.abs(num)));
num=Math.floor(num*100+0.50000000001);
num=Math.floor(num/100).toString();
for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
return ((sign)?'':'-')+num;
}