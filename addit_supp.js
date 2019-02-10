javascript:
/*====VIRZA====

Host JS_Link : javascript: $.getScript("http://dl.dropbox.com/u/35493140/addit_supp.js");void(0);
*/

x = archers;

/*Les fonctions fnGetConfig, fnSetup et fnStatus sont empruntées à DalesMckay, facilitant ainsi le debug des scripts*/

function fnGetConfig(){
	var oRequest=new XMLHttpRequest();
	var sURL="http://"+window.location.hostname+"/interface.php?func=get_config";
	oRequest.open("GET",sURL,0);
	oRequest.send(null);
	if(oRequest.status==200)return oRequest.responseXML;
	alert("Erreur");
}

function fnStatus(strMessage){
	try{
		eleDoc.body.appendChild(eleDoc.createTextNode(strMessage));
		eleDoc.body.appendChild(eleDoc.createElement("br"));
	}
	catch(objError){
		alert(strMessage+"\n"+objError);
	}
}

function fnSetup(){
	eleDoc=(window.frames.length>0)?window.main.document:document;
	strVersion="1.0";

	fnStatus("Units Calculator"+strVersion);
	fnStatus("By Virza");
	fnStatus("En cas de bugs, C/C (copiez-collez) les informations ci-dessous, et contactez Virza");

	var xmlDoc=fnGetConfig();
			
	try{blChurch=(xmlDoc.getElementsByTagName("church")[0].childNodes[0].nodeValue!=0);}
	catch(objError){blChurch=false;}
	try{blStatue=(xmlDoc.getElementsByTagName("knight")[0].childNodes[0].nodeValue!=0);}
	catch(objError){blStatue=false;}
	try{blArcher=(xmlDoc.getElementsByTagName("archer")[0].childNodes[0].nodeValue!=0);}
	catch(objError){blArcher=false;}

	fnStatus("Eglises : "+((blChurch)?"oui":"non"));
	fnStatus("Statue : "+((blStatue)?"oui":"non"));
	fnStatus("Archers : "+((blArcher)?"oui":"non"));
	
	fnStatus("========");
	fnStatus("Version: "+window.game_data.version);
	fnStatus("Monde  : "+window.game_data.world);
	fnStatus("Page : "+window.game_data.screen);
	fnStatus("Mode   : "+window.game_data.mode);
	fnStatus("Navigateur: "+navigator.userAgent);
	fnStatus("=======");
	fnStatus("\n\n\n\n\n");
}

fnSetup();
bod = document.getElementById('content_value').getElementsByTagName('table')[3];
bod.rows[0].innerHTML+= "<th><input onclick ='javascript:selectAll();void(0);'id = 'tutu' name = 'all' type ='checkbox'></input></th>";
for(i = 1 ; i < bod.rows.length; i++)	{
	var box_id = 'box' + i;
	var table_id = 'table' + i;
	
	
	if(bod.rows[i].cells[0].innerHTML.match(/<img src="graphic\/command\/support\.png/))	{
	try{var id = bod.rows[i].cells[0].innerHTML.match(/\/game\.php\?village=\d+&amp;screen=info_command&amp;t=\d+&amp;id=\d+&amp;type=other/).toString().replace(/&amp;/gi, '&');
	}catch(e)	{
		var id = bod.rows[i].cells[0].innerHTML.match(/\/game\.php\?village=\d+&amp;screen=info_command&amp;id=\d+&amp;type=other/).toString().replace(/&amp;/gi, '&');
															
	}
	var lien = 'http://' + window.location.host + id;
	var units = extract(ajaxGetInfo(lien));
		bod.rows[i].innerHTML += "<th><input id = 'tut' name = '"+box_id+ "' type =\'checkbox\'></input></th>";
		bod.rows[i].innerHTML+= "<table name = '"+table_id+"' id = '"+table_id+"' class='vis'>" + units + "</table>";
	}
}
if(!x)	{
var tableau ='';
tableau+="<table id = 'troupes_totales'>";
tableau+="	<br / >";
tableau+="	<br />";
tableau+="	<tr>";
tableau+="	<b>Troupes totales</b>";
tableau+="	</tr>";
tableau+="	<tr>";
tableau+="		<th width='50'><img src='graphic/unit/unit_spear.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_sword.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_axe.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_spy.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_light.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_heavy.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_ram.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_catapult.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_snob.png?1'/></th>";
tableau+="	</tr>";
tableau+="	<tr>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="	</tr>";
tableau+="	<button onclick = 'javascript: add();void(0);'>Calculer</button><br />";
tableau+="	<input id = 'tuti' name = 'illi' type ='checkbox'>Troupes pr\351sentes dans le village</input>";
tableau+="</table><p><i>By Virza</i></p>";
}
else {
var tableau = "";
tableau+="<table id = 'troupes_totales'>";
tableau+="	<br / >";
tableau+="	<br />";
tableau+="	<tr>";
tableau+="		<b>Troupes totales</b>";
tableau+="	</tr>";
tableau+="	<tr>";
tableau+="		<th width='50'><img src='graphic/unit/unit_spear.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_sword.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_axe.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_archer.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_spy.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_light.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_marcher.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_heavy.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_ram.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_catapult.png?1'/></th>";
tableau+="		<th width='50'><img src='graphic/unit/unit_snob.png?1'/></th>";
tableau+="	</tr>";
tableau+="	<tr>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="		<td class='unit-item'>0</td>";
tableau+="	</tr>";
tableau+="	<button onclick = 'javascript: add();void(0);'>Calculer</button><br />";
tableau+="	<input id = 'tuti' name = 'illi' type ='checkbox'>Troupes pr\351sentes dans le village</input>";
tableau+="</table><i>By Virza</i>";
}
document.getElementById('village_note').parentNode.parentNode.innerHTML += tableau;

window.stop();
void(0);
function selectAll()	{
$('input:checkbox').each(function() { this.checked = !this.checked; }); void(0);
}
function getUnits()	{
if(!x){
	donn = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
	else {
	donn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
var troupes = $('table.vis[width="100%"] th:contains("Unit\351s")').parents('table').text().split('\n');
for (f = 0 ; f < troupes.length ; f++)	{
if(troupes[f].match(/\d+ Lanciers?/))	{
	donn[0] = parseInt(troupes[f].match(/\d+/));
}
if(troupes[f].match(/\d+ Porteurs? d'\351p\351e/))	{
	donn[1] = parseInt(troupes[f].match(/\d+/));
}
if(troupes[f].match(/\d+ Guerriers? \340 la hache/))	{
	donn[2] = parseInt(troupes[f].match(/\d+/));
}
if(troupes[f].match(/\d+ Archers?/))	{
	donn[3] = parseInt(troupes[f].match(/\d+/));
}
if(troupes[f].match(/\d+ \311claireurs?/))	{
	if(x)donn[4] = parseInt(troupes[f].match(/\d+/));
	else donn[3] = parseInt(troupes[f].match(/\d+/));
}
if(troupes[f].match(/\d+ Cavalerie l\351g\350re/))	{
	if(x)donn[5] = parseInt(troupes[f].match(/\d+/));
	else donn[4] = parseInt(troupes[f].match(/\d+/));
}
if(troupes[f].match(/\d+ Archers? mont\351s?/))	{
	if(x) donn[6] = parseInt(troupes[f].match(/\d+/));
}
if(troupes[f].match(/\d+ Cavalerie lourde/))	{
	if(x) donn[7] = parseInt(troupes[f].match(/\d+/));
	else donn[5] = parseInt(troupes[f].match(/\d+/));
}
if(troupes[f].match(/\d+ B\351liers?/))	{
	if(x) donn[8] = parseInt(troupes[f].match(/\d+/));
	else donn[6] = parseInt(troupes[f].match(/\d+/));
}if(troupes[f].match(/\d+ Catapultes?/))	{
	if(x) donn[9] = parseInt(troupes[f].match(/\d+/));
	else donn[7] = parseInt(troupes[f].match(/\d+/));
}
if(troupes[f].match(/\d+ Nobles?/))	{
	if(x) donn[10] = parseInt(troupes[f].match(/\d+/));
	else donn[8] = parseInt(troupes[f].match(/\d+/));
}

}

return donn;
}

function add()	{

bod = document.getElementById('content_value').getElementsByTagName('table')[3];
	if(!x){
	donn = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	fin = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
	else {
	donn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	fin = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
	for (k = 1 ; k < bod.rows.length ; k ++)	{
	box_id = 'box' + k;
	table_id = 'table' + k;
	if(document.forms[0].elements[box_id])	{
		if(document.forms[0].elements[box_id].checked)	{
		
			for(c = 0 ; c < document.getElementById(table_id).rows[1].cells.length ; c++)	{
				donn[c] = parseInt(document.getElementById(table_id).rows[1].cells[c].textContent);
			}
			for(y = 0 ; y < donn.length ; y++)	{
				fin[y] += donn[y];
			}
		}
	}
	}
	
	if(document.getElementById('tuti').checked)	{
	var tutu = getUnits();
		for(d = 0 ; d < tutu.length ; d++)	{
			fin[d] += tutu[d];
		}
	}
	
	for(z = 0 ; z < fin.length ; z++)	{
		document.getElementById('troupes_totales').rows[2].cells[z].innerHTML='<td class="unit-item">' + fin[z]+'</td>';
	}
}
function extract(txt)	{
	var tables = txt.split('<table class="vis">');
	return tables[1].split('</table>')[0];
}
function ajaxGetInfo(url)	{
var xmlhttp;
	if (window.XMLHttpRequest)	{
		xmlhttp=new XMLHttpRequest();
		}
	else	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	xmlhttp.open("GET",url,false);
	xmlhttp.send("");
	return xmlhttp.responseText;
}