javascript:

/*
@author : Virza
@link : javascript: var GROUP_ID = '41270';$.getScript("http://dl.dropbox.com/u/35493140/tw_move_report.js");void(0);
Fonction : Trie les rapports en fonction de leur contenu;
Les paramètres disponibles sont : 
	-En fonction des unités
	-En fonction de la présence d'une église détectée par un scoutage.
*/

var table = '<table>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_spear.png?1" class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_sword.png?1" class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_axe.png?1" class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_archer.png?1"class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_spy.png?1" class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_light.png?1" class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_marcher.png?1" class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_heavy.png?1"  class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_ram.png?1" class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_catapult.png?1" class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_knight.png?1" class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="graphic/unit/unit_snob.png?1" class=""/></th>';
table+='<th style="text-align:center"  width="35"><img src="http://help.guerretribale.fr/images/a/a4/Church.png" classe=""/></th>';
table+='<th style="text-align:center"  width="35"><i>By Virza</i></th>';
table+='<tr>';
table+='	<td class="unit-item"><input id = "spear" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "sword" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "axe" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "archer" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "spy" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "light" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "marcher" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "heavy" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "ram" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "catapult" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "knight" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "snob" type = "text" size = "5"/></td>';
table+='	<td class="unit-item"><input id = "church" type = "radio" onchange="javascript:checkChurch();void(0);"/></td>';
table+='	<td><input type="button" onclick="javascript: swap();void(0);" value ="Rechercher"/></td>';
table+='</tr>';
table+='</table>';

function checkChurch()	{
	$('table.vis tr input:checkbox').each(function(i)	{
	if(i>0)	{
		if(churchs[i-1]=="found")	{
			$(this).attr('checked', true);
		}
		else {
			$(this).attr('checked', false);
		}
	}
	});
function swap()	{
	$('table.vis tr input:checkbox').each(function(i)	{
		
		var t = extr[i].split('-');
		var j = false;
		for(d=0;d<t.length;d++)	{
			if(t[d]==arr[d])	{
				j=true;
			}
		}
		if(j)	{
			id = $(this).attr('name').split('_')[1];
			$.post("http://"+window.location.host+"/game.php?village="+game_data.village.id+"&screen=report&action=move&h="+game_data.csrf+"&group_id="+GROUP_ID+"&report_id="+id+"&type=all");
			$(this).attr('checked', true);
		}
		else	{
			$(this).attr('checked', false);
		}
	});
}
extr=[];
churchs=[];

$('form table.vis tr a:has("span")').each(function(i)	{
	$.ajax({type:"GET", url:this,async:false,success:function(e)	{
			extr.push($('table[id="attack_info_att_units"]', e).html().split("Quantit\351")[1].split("Pertes")[0].match(/<td style="text\-align\:center" class="unit\-item( hidden)?">\d+<\/td>/gi).toString().match(/\d+/gi).join('-'));
			if($('table[id="attack_spy"]', e).text().match(/\311glise/))	{
				churchs.push("found");
			}
			else	{
				churchs.push("not");
			}
		}
	});
		$('table.vis th:first').html('Veuillez patienter...<br> '+i+' rapports m\351moris\351s');
});
$('table.vis th:first').html(table);
void(0);
