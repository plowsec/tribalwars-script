javascript: 

/*OneShotBuilder by Virza
Fonction : Ce script envoie tous les ordres de constructions depuis l'aperçu "Bâtiments", dans tous les villages, en 1 clic.
La limite est de 5 constructions par village;
Lisez les commentaires ci-après pour prendre connaissance de la configuration nécessaire.
Les églises ne sont pas prises en compte, elles ne seront pas construites. Mais vous devez indiquer si elles sont activées ou non.
*/

				
function ajaxGetInfo(url)	{
var xmlhttp;
	if (window.XMLHttpRequest)	{
		xmlhttp=new XMLHttpRequest();
		}
	else	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	xmlhttp.open("GET",url,false);
	/*xmlhttp.onreadystatechange = function() {if(xmlhttp.readyState==4) extract(this.responseText);};*/
	xmlhttp.send("");
	return xmlhttp.responseText;
}

function getWorld()	{
		var world = window.location.href.match(/fr\d+/);
		return world;
	}
/*Retourne les ressources, la place dans la ferme, csrf, les constructions en cours ainsi que leur niveau.*/
function extract(text)	{
/*Merci à elliot pour les lignes 391-402, même si ce n'est pas très propre ^_^ */
var split = text.split('<span id="wood" title="');
var split2 = split[1].split('</span></td>');
var split3 = split2[0].split('" >');
var wood = split3[1];
var split = text.split('<span id="stone" title="');
var split2 = split[1].split('</span></td>');
var split3 = split2[0].split('" >');
var stone = split3[1];
var split = text.split('<span id="iron" title="');
var split2 = split[1].split('</span></td>');
var split3 = split2[0].split('" >');
var iron = split3[1];
var ferme = text.match(/<span id="pop_current_label">\d+/);
var label = ferme + '';
var pop = label.replace(/<span id="pop_current_label">/, '');
var infos = [wood, stone, iron, pop];
var constructions = text.match(/<td width="250" class="nowrap lit\-item">.*/gi);
var split = text.split('"csrf":"');
	var split2 = split[1].split('"');
	var csrf = split2[0];

if(constructions)	{
	for(i = 0 ; i < constructions.length ; i++)	{
		var nomBuild = constructions[i].split('>');
		var build = nomBuild[1].split('(');
		var buildName = build[0].match(/.*[^ ]/);
		var level = build[1].split(')');
		var lvl = level[0].match(/\d+/);
		infos.push(buildName, lvl);
	}
}
infos.push(csrf);
return infos;
}
/*Additionne les constructions en cours avec les niveaux actuels*/
function calcLevels(levels, infos)	{
	for(i=4 ; i < infos.length ; i+=2)	{
	var guit = infos[i] + '';
		switch(guit)	{
			case 'Quartier général':
				levels[0] = infos[i+1];
				break;
			case 'Caserne':
				levels[1] = parseInt(infos[i+1]);
				break;
			case 'Écurie':
				levels[2] = parseInt(infos[i+1]);
				break;
			case 'Atelier':
				levels[3] = parseInt(infos[i+1]);
				break;
			case 'Académie':
				levels[4] = parseInt(infos[i+1]);
				break;
			case 'Forge':
				levels[5] = parseInt(infos[i+1]);
				break;
			case 'Point de ralliement':
				levels[6] = parseInt(infos[i+1]);
				break;
			case 'Statue':
				levels[7] = parseInt(infos[i+1]);
				break;
			case 'Marché':
				levels[8] = parseInt(infos[i+1]);
				break;
			case 'Camp de bois':
				levels[9] = parseInt(infos[i+1]);
				break;
			case 'Carrière d\'argile':
				levels[10] = parseInt(infos[i+1]);
				break;
			case 'Mine de fer':
				levels[11] = parseInt(infos[i+1]);
				break;
			case 'Ferme':
				levels[12] = parseInt(infos[i+1]);
				break;
			case 'Entrepôt':
				levels[13] = parseInt(infos[i+1]);
				break;
			case 'Cachette':
				levels[14] = parseInt(infos[i+1]);
				break;
			case 'Muraille':
				levels[15] = parseInt(infos[i+1]);
				break;
			
		}
	}
	
return levels;
}
tbodi = document.getElementById('villages');
/*Noms des id à passer dans la fonction sendRequest*/
if(paladin)	{
names = ['main', 'barracks', 'stable', 'garage', 'snob', 'smith', 'place', 'statue', 'market', 'wood', 'stone', 'iron', 'farm', 'storage', 'hide', 'wall'];
}
else {
names = ['main', 'barracks', 'stable', 'garage', 'snob', 'smith', 'place', 'market', 'wood', 'stone', 'iron', 'farm', 'storage', 'hide', 'wall'];

}
function getInfo()	{
tbodi = document.getElementById('villages');
for(o = 0 ; o < tbodi.rows.length ; o++)	{
		var lien = tbodi.rows[o].cells[2].innerHTML.match(/\/game\.php\?village=\d+&amp;screen=main/);
		var url = 'http://' + getWorld() + '.guerretribale.fr' + lien;
		url = url.replace(/&amp;/, '&');/*Le lien qui passera dans la fonction sendRequest()*/
		var levels = [];
		for(j = 4 ; j < tbodi.rows[o].cells.length-1 ; j++)	{
			if(Configurations.eglises){
				if(j == 8) {j+=2;}
			}
			if(paladin)	{
				if(j==9){j+=1;}
			}
			levels.push(tbodi.rows[o].cells[j].textContent);/*Extractions des niveaux*/
			
		}
		var infos = extract(ajaxGetInfo(url));
		var finNiveau = calcLevels(levels, infos);
		var csrf = infos[infos.length-1];
		var guet = url + '&action=build&h='+csrf+'&id=';
		for(k = 0 ; k < 16 ; k++)	{
			if(Configurations.niveaux[k]-parseInt(finNiveau[k]) >0 && Configurations.niveaux[k]-parseInt(finNiveau[k]) != undefined)	{
				var result = parseInt(Configurations.niveaux[k])-parseInt(finNiveau[k]);
				for(x = 0 ; x < result ; x++)	{
						sendRequest(guet, names[k]);	
				}
			}
		}	
		tbodi.rows[o].innerHTML += '<td>Terminé!</td>';
	}
}
getInfo();

function sendRequest(url, cons)	{
var client = new XMLHttpRequest();
client.open("GET", url + cons, false);
client.send("");
}
