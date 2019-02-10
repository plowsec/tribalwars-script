javascript:

	var type = 'attack';
	ids=[];
	/*
@author : Virza 
@link : javascript: 
		var units = {spear:0, axe:0, sword:0, spy:0, light:0, ram:1};ac=true;
		crds = "532|561 566|552 565|556 587|563 586|567 588|572 604|554 605|551 606|552 602|564 598|565 604|553 602|567 614|548 597|572 613|550 610|556 614|546 612|554 605|565 609|557 615|550 605|563 604|565 618|542 608|558 613|549 618|541 615|549 612|552 605|569 616|543 618|543 624|538 624|539 606|583 608|580 609|582 616|576 648|509 647|506 628|578 636|575 639|566 633|579 584|568 633|578 640|570 634|579 635|581 634|580 636|583 635|580 635|582 635|578 642|570 642|568 655|562 655|563 654|563 532|555 585|564 590|567 607|551 605|549 606|548 604|557 609|549 604|566 607|558 615|540 604|571 618|544 619|541 588|565 596|563";
		$.getScript("http://dl.dropbox.com/u/35493140/newbross.js");
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
	var t = Number(ls.interval)||0;
	if(v>=ids.length)	{v=0;}
	if(y>=a.length)	{alert('Tous les villages ont \351t\351 attaqu\351s');y=0;}
	s=a[y];
	d=s.split('|');
	g=$.extend(units,{attack:type==="attack",  support:type==="support",   x:d[0],  y:d[1]   }); 
	$.post("http://"+window.location.host+"/game.php?village="+ids[v]+"&screen=place&try=confirm",g, 
		function(e){
			d= $("form:first",e);              
			$.post(d.attr("action"),d.serialize()); 
			if($('#error',e).text() || t>=4)	{
				ls.indVillage=v+1;
				$('#attaques').html(ls.Attacks=Number(ls.Attacks||0));
				ls.interval = 0;
			}
			else	{
				ls.indice=y+1;	
				$('#attaques').html(ls.Attacks=Number(ls.Attacks||0)+1);
				ls.interval = Number(ls.interval||0)+1;
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