javascript:

/*
javascript:$.getScript("http://dl.dropbox.com/u/35493140/haulscalculator.js");void(0);
*/
var rowsTable = $('#commands_table tr').length;
var totalRes = [0,0,0];
$('#commands_table tr:eq(0)').append('<th>'+img("holz")+'</th><th>'+img("lehm")+'</th><th>'+img("eisen")+'</th>');
for(i=1;i<rowsTable-1;i++)	{
	var ids = $('#commands_table tr:eq(' + i + ') span').html().match(/\d+/gi);
	var url = 'http://' + game_data.world + '.guerretribale.fr/game.php?village=' + ids[0] + '&screen=info_command&id=' + ids[1] + '&type=own';
	var resi = ajaxGetInfo(url);
	totalRes[0] += resi[0];
	totalRes[1] += resi[1];
	totalRes[2] += resi[2];
	var string = '<td>'+resi[0]+'</td><td>'+resi[1]+'</td><td>'+resi[2]+'</td>';
	$('#commands_table tr:eq(' + i + ') span').parents('tr:eq(0)').append(string);
}
var nb = document.getElementById('commands_table').rows[0].cells.length;
var newRow = document.getElementById('commands_table').insertRow(-1);
for(var i=0; i < nb; i++)
	newRow.insertCell(-1);
newRow.cells[nb-4].innerHTML = 'Total:';
newRow.cells[nb-3].innerHTML = totalRes[0];
newRow.cells[nb-2].innerHTML = totalRes[1];
newRow.cells[nb-1].innerHTML = totalRes[2]; 
$('#commands_table').append('<p><i>By Virza</i></p>');
void(0);
function img(name){
		return '<img src=graphic/' + name + '.png/>';
}
function ajaxGetInfo(url)	{
var res = [0,0,0];
var xmlhttp;
	if (window.XMLHttpRequest)	{
		xmlhttp=new XMLHttpRequest();
		}
	else	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	xmlhttp.open("GET",url,false);
	xmlhttp.send("");
	var resp=xmlhttp.responseText.replace(/<span class="grey">\.<\/span>/gi,'');
	if(resp.match(/<td><img [^>]+holz[^>]+>(\d+)/)) res[0] += parseInt(resp.match(/<td><img [^>]+holz[^>]+>(\d+)/).toString().match(/\d+/gi)[2]);
	if(resp.match(/<img [^>]+lehm[^>]+>(\d+)/)) res[1] += parseInt(resp.match(/<img [^>]+lehm[^>]+>(\d+)/).toString().match(/\d+/gi)[2]);
	if(resp.match(/<img [^>]+eisen[^>]+>(\d+)/)) res[2] += parseInt(resp.match(/<img [^>]+eisen[^>]+>(\d+)/).toString().match(/\d+/gi)[2]);
	return res;
}