javascript:
/*
@author : Virza 
@link : 
javascript: $.getScript("https://dl.dropboxusercontent.com/u/35493140/pillage_simple.js");var scouts = 0;var nbLight = 2;var listVillages = "339|578 337|577 337|575 341|575 338|574 340|580 336|575 336|579 337|580 341|574 341|580 342|575 339|573 339|581 335|578 338|573 343|576 336|580 342|580 344|575 335|581 344|574 338|571 337|571 341|571 345|579 336|571 342|583 334|572 334|582 333|581 343|571 345|573 345|581 341|570 336|570 333|582 334|583 344|571 345|572 347|577 332|573 340|569 343|570 346|573 347|576 347|578 331|579 347|575 336|569 342|585 344|570 339|568 348|577 332|571 332|583 337|568 345|570 345|584 348|575 334|569 344|569 343|586 332|570 331|583 339|587 344|568 348|572 329|574 342|567 346|569 343|567 328|577 344|587 350|580 350|573 351|576 337|565 341|565 346|567 349|570 351|575 327|580 351|581 347|567 351|572 352|575 326|580 326|573 335|564 327|570 350|568 349|566 351|568 349|565 350|566 347|563339|578 337|577 337|575 341|575 338|574 340|580 336|575 336|579 337|580 341|574 341|580 342|575 339|573 339|581 335|578 338|573 343|576 336|580 342|580 344|575 335|581 344|574 338|571 337|571 341|571 345|579 336|571 342|583 334|572 334|582 333|581 343|571 345|573 345|581 341|570 336|570 333|582 334|583 344|571 345|572 347|577 332|573 340|569 343|570 346|573 347|576 347|578 331|579 347|575 336|569 342|585 344|570 339|568 348|577 332|571 332|583 337|568 345|570 345|584 348|575 334|569 344|569 343|586 332|570 331|583 339|587 344|568 348|572 329|574 342|567 346|569 343|567 328|577 344|587 350|580 350|573 351|576 337|565 341|565 346|567 349|570 351|575 327|580 351|581 347|567 351|572 352|575 326|580 326|573 335|564 327|570 350|568 349|566 351|568 349|565 350|566 347|563";void(0);
@version : 1.0 || {[JQuery]}
*/
function a()	{
	$('#bibi').attr("disabled", true);
	z();
}
function z()	{
	var index=parseInt($("#tic").val());
	a = listVillages.split(" ")[index].split("|");
	var type = 'attack';  
	var units = {spy:scouts,light:nbLight};
	g=$.extend(units,{attack:type==="attack", support:type==="support", x:a[0], y:a[1]}); 
	$.ajax({
		type:"POST",
		url:"http://"+window.location.host+"/game.php?village="+game_data.village.id+"&screen=place&try=confirm",
		async:false,
		data:g,
		success:function(e){d= $("form:first",e);$.post(d.attr("action"),d.serialize()); 
			if($('.error_box',e).text())	{
				$("#_error").html($('.error_box',e).text());
				return false;
			}
			$("#tic").val(parseInt($("#tic").val())+1);
		$("#attaques").html(index+1);
		setTimeout(function()	{z();}, 1000);
		}}
	)
	}
var css='';
css+='<div id="d">';
css+='	<div id="h">';
css+='		<span>Virza\'s Autofarm</span>';
css+='		<span id="o"></span>';
css+='	</div>';
css+='<div id="c">';
css+='<h1>Attaques</h1>';
css+='<div class="b">';
css+='<div id="j"><input type="text" id="tic"></input><input type="button" id="bibi" value="OK" onclick="javascript:a()"/></div>';
css+='	<span>Attaques lanc\351es: <b id="attaques"></b></span>';
css+='	<span id="_error" style="color:red"></span>';
css+='</div>';
css+='</div>';
css+='<style>';
css+='	#d{background:#c1d9ff;border:1px solid #3a5774;font-family:arial;padding:4px;width:19em;margin:auto;position:absolute;left:75%;top:30%;z-index:999999}';
css+='	#h{background:#e0edfe;font-size:14px;font-weight:700;padding:4px 20px 4px 10px;cursor:move}';
css+='	#o{background:url(http://www.gstatic.com/analytics/iyp/iyp_close_dialog.gif) no-repeat scroll center center transparent;';
css+='	cursor:pointer;height:15px;position:absolute;right:10px;top:8px;width:15px}';
css+='	#c{background:#fff;font-size:12px}';
css+='	.b{padding:5px}';
css+='	#d #c span{display:block}';
css+='	#d h1{background:none repeat scroll 0 0 #e4e4e4;border-bottom:1px solid #c4c4c4;border-top:1px solid #fff;font-size:13px;line-height:20px;margin:0;outline:medium none;padding:0 4px}';
css+='code{font-size:11px;display:block;color:#800}';
css+='</style>';
css+='</div>';
$("body").append(css); 
ind = Number(localStorage.indice)||0;
$("#tic").val(ind);