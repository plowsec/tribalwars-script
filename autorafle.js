javascript:

/*
javascript: 
		var scouts=5;
		$.getScript("http://dl.dropbox.com/u/35493140/autorafle.js");
		void(0);
*/
function fnInfo(str)	{
	$('a:contains("Transmettre")').parents('table:eq(1)').prepend('<tr><td id="_error" class="error">'+str+'</td></tr><br>');
}
function fnGreen(str)	{
	$('a:contains("Transmettre")').parents('table:eq(1)').prepend('<tr><td id="_success" style="color:lime;font-weight:bold">'+str+'</td></tr><br>');
}
try{
	var a=$('#attack_info_def').text().match(/\d{3}\|\d{3}/).toString().split('|');
	try	{
		var num = $('#attack_spy').html().replace(/<span class="grey">\.<\/span>/gi, '').match(/\d+/gi);
		var resTotal = parseInt(num[0]) + parseInt(num[1]) + parseInt(num[2]);
		var minLight = resTotal/80;
		try{
			ram=['',2,4,7,10,14,19,24,30,37,46,55,65,77,91,107,124,144,166,195,220];
			catapult=['',2,6,10,15,21,28,36,45,56,68,82,98,115,136,159,185, 215,248,286,328];
			var levelMur = $('#attack_spy td:contains("Muraille")').text().match(/Muraille \(Niveau \d+\)/).toString().match(/\d+/);
			var nbCat = catapult[levelMur];
			var nbRam = ram[parseInt(levelMur)];
			fnInfo('Mur niveau '+levelMur+" : \n"+nbRam+' B\351liers ou '+nbCat+' Catapultes n\351cessaires');
		}
		catch(e)	{
			fnGreen("Pas de mur trouv\351 ");
		}
		var type = 'attack';  
		var units = {spy:scouts,light:minLight};
		g=$.extend(units,{attack:type==="attack",  support:type==="support",   x:a[0],  y:a[1]   }); 
		$.post("http://"+window.location.host+"/game.php?village="+game_data.village.id+"&screen=place&try=confirm",g, 
			function(e){
				d= $("form:first",e);              
				$.post(d.attr("action"),d.serialize()); 
				if($('.error_box',e).text())	{
					if($('.error_box',e).text().match("Pas assez d'unit\351s disponibles"))	{
						fnInfo($('.error_box',e).html()+' ('+scouts+' spy et '+Math.floor(minLight)+' l\351gers n\351cessaires)');
					}
					else if($('.error_box',e).text()) { 
						fnInfo($('.error_box',e).html());
					}
				}
				else	{
					fnGreen(parseInt(minLight)+' l\351gers envoy\351s avec succ\350s');
				}
			}
		);
		
	}
	catch(e)	{
		fnInfo("Vous n'avez pas pu espionner les ressources<br>Ou alors, copiez ce qui suit \340 un scripteur : "+e)
	}
}
 catch(objError){
	var dbgMsg="Erreur: " + String(objError.message||objError);
	fnInfo(dbgMsg);
} 

void(0);