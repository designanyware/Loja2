var sPagAtual=document.location.href.toUpperCase();

function MostraChat(IDLoja,SessionY){
  popup=window.open("ChatLogin.asp?IDLoja="+IDLoja+"&Y="+SessionY,"Chat23005","top=20,left=20,height=280,width=390,scrollbars=no,resizable=yes");
  popup.focus();
  return void(0);
}

function Valida(theForm){
  if (theForm.Nome.value=="") {
    alert("Informe seu nome.");
    theForm.Nome.focus();
    return(false);
  }
  if (theForm.Email.value==""){
    alert("Informe seu e-mail.");
    theForm.Email.focus();
    return(false);
  }
  if (theForm.Mensagem.value==""){
    alert("Digite sua mensagem.");
    theForm.Mensagem.focus();
    return(false);
  }
  if (!ValidaEmail(theForm.Email.value)){
    alert("E-mail inválido.");
    theForm.Email.focus();
    return(false);
  }
  return (true);
}



function ValidaNew() {

  function ValidaEmail(sEmail) {
    var regex=/^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
    return regex.test(sEmail);
  }

  if (document.form.NomeAssinante.value.length==""){
    alert("Campo 'Nome' não pode estar em branco!");
    document.form.NomeAssinante.focus();
    return false;
  }


  if (document.form.Email.value.length==""){
    alert("Campo 'E-mail' não pode estar em branco!");
    document.form.Email.focus();
    return false;
  }

  if (!ValidaEmail(document.form.Email.value)) {
    alert("Campo 'E-mail' inválido!");
    document.form.Email.focus();
    return false;
  }

}





/* IMAGENS DET*/

function geraImagens(imgs,video) {

  var html = ""
  var codigos = imgs.split(",");
  for (i = 0;i <codigos.length;i++){
    if (i==0) { html+='<div id="imgProdMed" style="margin:0;"><img src="../lojas/00023005/prod/'+codigos[i]+'" width="393" height="410" style="border: none" ></div><div id="imgProdMini" style="margin-top:10px;">' };
    html += '<a href="../lojas/00023005/prod/'+codigos[i]+'" style=""><img src="../lojas/00023005/prod/'+codigos[i]+'" width="70" height="73" style="border:none" /></a>';
  };
  if (video != "") { html += '<div id="imgVideoMini" style="margin-top:0px;"><a href="http://www.youtube.com/watch?v='+video+'"><img src="../lojas/00023005/images/bt_video.jpg" style="border:none" /></a></div>'; };
  return html;
};




/* FIM IMAGENS DET */


function MostraMaxParcela(PrecoProd,MaxParcelas){
  var ComSem;
  
//if(PrecoProd>=180)MaxParcelas=6;
//else if(PrecoProd>=150)MaxParcelas=5;
//else if(PrecoProd>=120)MaxParcelas=4;
//else if(PrecoProd>=90)MaxParcelas=3;
//else if(PrecoProd>=60)MaxParcelas=2;
//else if(PrecoProd>=1)MaxParcelas=1;
  
  
  if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;
  if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
  if(Juros[MaxParcelas-1]>0)ComSem=""; else ComSem=" sem juros";
  document.write("<br /><span class='VermP_'>"+MaxParcelas+"x"+ComSem+"</span><span class='CinzaP_'> de </span><span class='VermP_'>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,MaxParcelas))+"</span>");
}

function MostraParcelas(PrecoProd,MaxParcelas){
  var ComSem,EstiloLinha;
  
  
//if(PrecoProd>=180)MaxParcelas=6;
//else if(PrecoProd>=150)MaxParcelas=5;
//else if(PrecoProd>=120)MaxParcelas=4;
//else if(PrecoProd>=90)MaxParcelas=3;
//else if(PrecoProd>=60)MaxParcelas=2;
//else if(PrecoProd>=1)MaxParcelas=1;
  
  if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;
  if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
  document.write("<br><table width=350 cellspacing=1 cellpadding=7><tr><td colspan=3 align=center valign=top></td></tr><tr bgcolor=#E6E4E4><td>Número&nbsp;de<br>parcelas</td><td align=center width=10>Valor&nbsp;de<br>cada&nbsp;parcela</td><td align=right>Valor&nbsp;total<br>parcelado</td></tr>");
  for(var i=0;i<MaxParcelas;i++){
    if(Juros[i]>0)ComSem="com juros"; else ComSem="<font color=#DB3332>sem&nbsp;juros</font>";
    if((i%2)==0)EstiloLinha='EstParcPar'; else EstiloLinha='EstParcImpar';
    document.write("<tr class="+EstiloLinha+"><td class="+EstiloLinha+" bgcolor=#f1f1f1>"+(i+1)+"x "+ComSem+"</td><td class="+EstiloLinha+" align=right bgcolor=#f1f1f1>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,i+1))+"</td><td class="+EstiloLinha+" align=right bgcolor=#f1f1f1>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,i+1)*(i+1))+"</td></tr>");
  }
  document.write("</table>");
  document.write("<span class=VermM_>* Parcela mínima de R$ 30,00</span>");
}



function PrecoAVista(PrecoProd){
  if(PrecoProd==0)return;
  document.write("<font color=#666666>&#340; vista com </font><font color=#41A620><b>6% de desc.</b></font><font color=#666666> por <b>"+FormatPrecoReais(PrecoProd*0.94)+"</b></font><br />(Boleto bancário)");
}



 
function ExibeBotoesCesta(bExibeDuasLinhasBotoes){
  try{
    document.write("<style>.EstContinuarComprando{display:none;}</style>");
    var table=document.getElementById('TabItens');

    if(bExibeDuasLinhasBotoes){
      var row=table.insertRow(0);
      var cell=row.insertCell(-1);
      cell.colSpan=4;
      var sCel1="";
            sCel1+="";
      cell.innerHTML=sCel1;
    }

    var row=table.insertRow(-1);
    var cell=row.insertCell(-1);
    cell.colSpan=4;
    var sCel2="<table width='100%'><tr>";
          sCel2+="<td width='33%' align='left'><a href='home.asp?IDLoja="+ IDLojaNum +"'><img src='"+ sCaminhoImages +"botcontcomprando.gif' title='Continuar comprando' border='0'></a></td>";
          sCel2+="<td width='34%' align='center'><a href='#R' onclick='document.Lista.submit()'><img src='"+ sCaminhoImages +"botrecalcular.gif' title='Recalcular' border='0'></a></td>";
          sCel2+="<td width='33%' align='right'><a href='#C' onclick='ComprarImg()'><img src='"+ sCaminhoImages +"botcomprar.gif' title='Comprar' border='0'></a></td>";
        sCel2+="</tr></table>";
    cell.innerHTML=sCel2;

  }catch(e){}
  try{document.getElementById("TabBotoes").style.display='none';}catch(e){}
}

function ComprarImg(){
  document.getElementsByName("Comprar")[0].click();
}






function StartNorton(page) {
OpenWin = this.open(page, "CtrlWindow", "left=20,top=20,width=1000,height=700,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no");
}

function StartGoogle(page) {
OpenWin = this.open(page, "CtrlWindow", "left=20,top=20,width=900,height=700,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no");
}

function StartThawte(page) {
OpenWin = this.open(page, "CtrlWindow", "left=20,top=20,width=530,height=700,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no");
}


function ConfirmaPedido(botao){
  MostraAviso=false;
  botao.style.backgroundImage="url(/images/shim.gif)"
  botao.style.backgroundColor="#e4e4e3";
  botao.style.borderColor="#888888";
  botao.style.color="#555555";
  botao.value='Confirmando...';
  botao.setAttribute('disabled','true');
  Valida(document.Form1);
}


function ExibeBotaoConfirmaPedido(){
  var ConteudoTopoPagConfirmar=document.getElementById("idTopoConfirmarFC"); 
  if(ConteudoTopoPagConfirmar){
    ConteudoTopoPagConfirmar.innerHTML="<br>&nbsp;<br><br><center><input type=button name=btConfirmarPedido class='BotConfPed' value='Confirmar pedido  >>' onclick='ConfirmaPedido(this);'></center>";
  }
}