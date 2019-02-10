javascript:

	var type = 'attack';
	ids=[];
	/*
@author : Virza 
@link : javascript: 
		var units = {spear:0, axe:0, sword:0, spy:500, light:0, ram:0}; 
		crds = "289|753 273|757 289|758 271|745";$.getScript("http://dl.dropbox.com/u/35493140/autofarm.js");
		void(0);
@version : 1.0 || {[JQuery]}
*/
	ls=localStorage;
	$('table[class="vis overview_table"] tr').each(function(i)	{
		if(i>0)	{
			ids.push($(this).html().match(/<span id="label\_\d+">/).toString().match(/\d+/));
		}
	});
function sq(x){
	return Math.pow(x,2);
}
function distance(x,y){
	var ref = game_data.village.coord;
	var oX = parseInt(ref.split('|')[0]);
	var oY = parseInt(ref.split('|')[1]);
	theX = oX-parseInt(x);
	theY = oY-parseInt(y);
	var car1 = sq(theX);
	var car2 = sq(theY);
	var sum = car1 + car2;
	return sum;
}
function getArrondi(nb, N)	{
	return Math.round(Math.pow(10,N)*nb)/Math.pow(10, N);
}
function sortVillages()	{
	var coords = crds.split(' ');
	for (t = 0 ; t < coords.length ; t++)	{
		coords[t] += '';
		var x = parseInt(coords[t].split('|')[0]);
		var y = parseInt(coords[t].split('|')[1]);
		dist = getArrondi(Math.sqrt(parseInt(distance(x,y))), 1) + '';
		if(dist.indexOf('.')==-1)	{ 
			dist += '.0';
		}
		if(dist<10)dist='000'+dist;
		else if(dist<100)dist='00'+dist;else if(dist<1000)dist='0'+dist;
		coords[t] = dist + ' ' + coords[t];
	}
	coords.sort();
	for(b = 0 ; b < coords.length ; b++)	{
		coords[b] =coords[b].split(' ')[1];
	}
	return coords;
}
function dubble_secur(crds)	{
		var strCoords = ls.getItem('coords');
		var newCoords = strCoords.split(' ');
		var continuer = true;
		for(x = 0 ; x < newCoords.length ; x++)	{
			if(crds==newCoords[x])	{
				continuer = false;
			}
		}
		if(continuer)	{
			return true;
		}
		else {
			return false;
		}
}
function z()	{
	var cpt=0;
	var a = sortVillages();
	var y = Number(ls.indice)||0; /*attaques lancées*/
	var v=Number(ls.indVillage)||0; /*indice dans le tableau des IDs*/
	if(v>=ids.length)	{v=0;}
	if(y>=a.length)	{alert('Tous les villages ont \351t\351 pill\351s');ls.removeItem('coords');y=0;}
	s=a[y];
	if(ls.coords)	{
		if(!dubble_secur(s))	{
			while(!dubble_secur(s))	{
				if(cpt>=a.length)	{
					/*alert('Tous les villages ont \351t\351 pill\351s');*/
					$('#_error').html('Tous les villages ont \351t\351 pill\351s');
					ls.removeItem('coords');
						y=0;break;
				}
				y+=1;
				if(y>=a.length) {
					y=0;
				}
				s = a[y];
				cpt++;
			}
		}
	}
	d=s.split('|');
	g=$.extend(units,{attack:type==="attack",  support:type==="support",   x:d[0],  y:d[1]   }); 
		$.ajax({
			type:"POST",
			url:"http://"+window.location.host+"/game.php?village="+ids[v]+"&screen=place&try=confirm",
			async:false,
			data:g,
			success:function(e){d= $("form:first",e);$.post(d.attr("action"),d.serialize()); 
				if($('#error',e).text())	{
					$('#_error').html($('#error',e).text());
					ls.indice=0;
					ls.indVillage=v+1;
					$('#attaques').html(ls.Attacks=Number(ls.Attacks||0));
				}
				else	{
					ls.indice=y+1;	
					$('#attaques').html(ls.Attacks=Number(ls.Attacks||0)+1);
					if(ls.coords)	{
						var string = ls.getItem('coords');
						ls.setItem('coords', string+' '+s);
					}
					else	{
						ls.setItem('coords', s)
					}
				}
				i=Number(ls.indVillage)||0;
				$('#villages').html(i);
				
				if(i>=ids.length)	{
					$('#_error').append('Tu as fait le tour de tous tes villages');
					return false;
				}
				setTimeout(function()	{z();}, 200);
			}
		});
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