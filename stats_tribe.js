javascript:
/* Change nothing below here */  
plus_one = 0;  

function exportGraph()	{
	var str ='[table][**]Nom[||]Rang[||]Points[||]Villages[||]Points[||]Villages[||]ODA[||]ODD[/**]';
	var exportTable = new Array();
	$('#content_value table.vis tr:gt(0)').each(function(i)	{
		var name = $(this).children().children().html();
		var number = $(this).html().replace(/<span class="grey">\.<\/span>/gi, '').match(/\d+/gi);
		if(name.match(/\d+/gi))		{
			number.splice(2,1);
		}
		var string = '[*][player]'+name+'[/player][|]'+number[2]+'[|]'+number[3]+'[|]'+number[4]+'[|][img]'+img('points',number[1])+'[/img][|][img]'+img('villages',number[1])+'[/img][|][img]'+img('oda',number[1])+'[/img][|][img]'+img('odd',number[1])+'[/img][|]';
		exportTable.push(string);
	});
	exportTable.shift();
	alert(str+exportTable.join('\n')+'[/table]');
	function img(str, id)	{
		return 'http://fr.twstats.com/'+game_data.world+'/image.php?type=playergraph&graph='+str+'&id='+id;
	}
}

if (document.getElementById("ally_content") != null)     {
table = document.getElementById("ally_content");
}  
else
{
table = document.getElementById('content_value').getElementsByTagName('table')[1];
plus_one = 1;
}  
$(table).prepend('<input type="button" value="Exporter" onclick="javascript:exportGraph();void(0);" />');
rows = table.getElementsByTagName("tr");  
if (show_points == true)
{
rows[0].innerHTML += "<th><center><b><u>Points</u></b></center></th>";     
}  
if (show_villages == true) 
{
rows[0].innerHTML += "</b></center></th><th><center><b><u>Villages</u></b></center></th>";     
}  
if (show_ODA == true)     
{
rows[0].innerHTML += "<th><center><b><u>ODA</u></b></center></th>";     
}  
if (show_ODD == true)     
{
rows[0].innerHTML += "<th><center><b><u>ODD</u></b></center></th>";
}  
for (i = 1;i < rows.length;i++)     
{
pid = rows[i].getElementsByTagName("a")[0].toString().match(/id=\d+/).toString().split( "=")[1];
if (show_points == true)
{
rows[i].innerHTML += "<td><img src='http://fr.twstats.com/" + game_data.world + "/image.php?type=playergraph&graph=points&id=" + pid + "' style='width:" + dimensions[0] + "px; height:" + dimensions[1] + "px'></img></td>";
}      
if (show_villages == true)         
{
rows[i].innerHTML += "<td><img src='http://fr.twstats.com/" + game_data.world + "/image.php?type=playergraph&graph=villages&id=" + pid + "' style='width:" + dimensions[0] + "px; height:" + dimensions[1] + "px'></img></td>";         
}      
if (show_ODA == true)         
{
rows[i].innerHTML += "<td><img src='http://fr.twstats.com/" + game_data.world + "/image.php?type=playergraph&graph=oda&id=" + pid + "' style='width:" + dimensions[0] + "px; height:" + dimensions[1] + "px'></img></td>";         
}      
if (show_ODD == true)         
{
rows[i].innerHTML += "<td><img src='http://fr.twstats.com/" + game_data.world + "/image.php?type=playergraph&graph=odd&id=" + pid + "' style='width:" + dimensions[0] + "px; height:" + dimensions[1] + "px'></img></td>";
}
     
}  
void (0);