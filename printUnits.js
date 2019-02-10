javascript:

/*
Fonction : Affiche le total des unités en cours de recrutements
@author : Virza
@link : javascript: var archers=true;$.getScript("http://dl.dropbox.com/u/35493140/printUnits.js");void(0);

*/


	if(TotalUnits == undefined)	{
		if(archers)	{
		var TotalUnits=[0,0,0,0,0,0,0,0,0,0];
		}
		else	{
		var TotalUnits=[0,0,0,0,0,0,0,0];
		}
	}
	
	function image(name){
		return '<img src=graphic/unit/unit_' + name + '.png/>';
		
	}

function getBarracks()	{
if(document.getElementById('trainqueue_wrap_barracks'))	{
	var body = document.getElementById('trainqueue_wrap_barracks');
	var queue = body.getElementsByTagName('tr');
	var lance = 0;
	var epee = 0;
	var bubu = 0;
	var arc = 0;
	for(i=1;i< queue.length;i++){
		var sel = body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML;
		if(sel.match(/\d+ Lanciers?/))	{
			lance += parseInt(body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML.match(/\d+/));
			TotalUnits[0] = lance;
		
		}
		if(sel.match(/\d+ Porteurs? d'\351p\351e/))	{
			epee += parseInt(body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML.match(/\d+/));
			TotalUnits[1]=epee;
			
		}
		if(sel.match(/\d+ Guerriers? \340 la hache/))	{
			bubu += parseInt(body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML.match(/\d+/));
			TotalUnits[2]=bubu;
		}
		if(archers)	{
			if(sel.match(/\d+ Archers?/))	{
			arc += parseInt(body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML.match(/\d+/));
			TotalUnits[3]=arc;
			}
		}
	}
	if(archers)	{
	var total = '<th colspan="2" id="total_res">' +image('spear') + lance + image('sword') + epee + image('axe') + bubu + image('archer') + arc + '</th>';
	$('#replace_barracks').append(total);
	}
	else	{
	var total = '<th colspan="2" id="total_res">' +image('spear') + lance + image('sword') + epee + image('axe') + bubu + '</th>';
	$('#replace_barracks').append(total);
	}
}
else {return;}
}

function getStable()	{
if(document.getElementById('trainqueue_wrap_stable'))	{
	var body = document.getElementById('trainqueue_wrap_stable');
	var queue = body.getElementsByTagName('tr');
	var leger = 0;
	var spy = 0;
	var lourd = 0;
	var marcher = 0;
	for(i=1;i< queue.length;i++){
		var sel = body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML;
		if(sel.match(/\d+ \311claireurs?/))	{
			spy += parseInt(body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML.match(/\d+/));
			if(archers)	{TotalUnits[4]=spy;}
			else {TotalUnits[3]=spy;}
		}
		if(sel.match(/\d+ Cavalerie l\351g\350re/))	{
			leger += parseInt(body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML.match(/\d+/));
			if(archers)	{TotalUnits[5]=leger;}
			else {TotalUnits[4]=leger;}
		}
		if(sel.match(/\d+ Archers? mont\351s?/))	{
			marcher += parseInt(body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML.match(/\d+/));
			if(archers)	{TotalUnits[6]=marcher;}
		}
		if(sel.match(/\d+ Cavalerie lourde/))	{
			lourd += parseInt(body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML.match(/\d+/));
			if(archers)	{TotalUnits[7]=lourd;}
			else { TotalUnits[5] = lourd;}
		}
	}
	if(archers)	{
	var total = '<th colspan="2" id="total_res">' +image('spy') + spy + image('light') + leger + image('marcher') + marcher + image('heavy') + lourd + '</th>';
	$('#replace_stable').append(total);
	}
	else	{
		var total = '<th colspan="2" id="total_res">' +image('spy') + spy + image('light') + leger  + image('heavy') + lourd + '</th>';
		$('#replace_stable').append(total);
	}
	
	}
	
else return;	
}

function getGarage()	{
if(document.getElementById('trainqueue_wrap_garage'))	{
	var body = document.getElementById('trainqueue_wrap_garage');
	var queue = body.getElementsByTagName('tr');
	var belier = 0;
	var cata = 0;

	for(i=1;i< queue.length;i++){
		var sel = body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML;
		if(sel.match(/\d+ B\351liers?/))	{
			belier += parseInt(body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML.match(/\d+/));
			if(archers)	{TotalUnits[8]=belier;}
			else	{TotalUnits[6]=belier;}
		}
		if(sel.match(/\d+ Catapultes?/))	{
			cata += parseInt(body.getElementsByTagName('table')[0].rows[i].cells[0].innerHTML.match(/\d+/));
			if(archers)	{TotalUnits[9]=cata;}
			else {TotalUnits[7]=cata;}
		}

	}
	var total = '<th colspan="2" id="total_res">' +image('ram') + belier + image('catapult') + cata +'</th>';
	$('#replace_garage').append(total);
}
else return;
}

function printResult()	{
	var body = document.getElementById('train_form');
	var unitTable = body.getElementsByTagName('table')[0];
	
	for(i = 1 ; i < unitTable.rows.length-1 ; i++)	{
	var chiffres = unitTable.rows[i].cells[6].textContent.split('/');
	TotalUnits[i-1] += parseInt(chiffres[1]);
	unitTable.rows[i].cells[6].innerHTML += '/<b>' + TotalUnits[i-1] + '</b>';
	
	}
	

}	
getBarracks();
getStable();
getGarage();
printResult();

