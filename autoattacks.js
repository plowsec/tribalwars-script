javascript:

	var type = 'attack';
	ids=[];
	/*
@author : Virza 
@link : javascript: 
		var units = {spear:0, axe:0, sword:0, spy:50, light:0, ram:0};ac=true;
		crds = "461|558 507|466 541|540 505|473 520|455 517|553 520|548 456|467 457|451 476|458 461|550 443|521 450|544 451|534 463|498 517|559 472|544 455|465 483|563 459|534 445|533 520|456";$.getScript("http://dl.dropbox.com/u/35493140/autoattacks.js");
		void(0);
@version : 1.0 || {[JQuery]}
*/
if(ac)	{
	ls=localStorage;
	$('table[class="vis overview_table"] tr').each(function(i)	{
		if(i>0)	{
			ids.push($(this).html().match(/<span id="label\_\d+">/).toString().match(/\d+/));
		}
	});
}
function z()	{
	var a = crds.split(' ');
	var y = Number(ls.indice)||0; /*attaques lancées*/
	var v=Number(ls.indVillage)||0; /*indice dans le tableau des IDs*/
	if(v>=ids.length)	{v=0;}
	if(y>=a.length)	{alert('Tous les villages ont \351t\351 attaqu\351s');y=0;}
	s=a[y];
	d=s.split('|');
	g=$.extend(units,{attack:type==="attack",  support:type==="support",   x:d[0],  y:d[1]   }); 
	$.post("http://"+window.location.host+"/game.php?village="+ids[v]+"&screen=place&try=confirm",g, 
		function(e){
		d= $("form:first",e);              
		$.post(d.attr("action"),d.serialize()); 
		if($('#error',e).text())	{
			ls.indVillage=v+1;
			$('#attaques').html(ls.Attacks=Number(ls.Attacks||0));
		}
		else	{
			ls.indice=y+1;	
			$('#attaques').html(ls.Attacks=Number(ls.Attacks||0)+1);
		}
		i=Number(ls.indVillage)||0;
		$('#villages').html(i);
		if(i>=ids.length)	{
			alert('Tu as fait le tour de tous tes villages');
			return false;
		}
		setTimeout(function()	{z();}, 200);
		}
	);
}
z();

var css='';
css+='<div id="d">';
css+='	<div id="h">';
css+='		<span>Virza\'s Autofarm</span>';
css+='		<span id="o"></span>';
css+='	</div>';
css+='<div id="c">';
css+='<h1>Attaques</h1>';
css+='<div class="b">';
css+='	<span>Attaques lanc\351es: <b id="attaques"></b></span>';
css+='	<span>Nombre de villages ayant termin\351 de lancer : <b id="villages"></b></span>';
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
void(0);