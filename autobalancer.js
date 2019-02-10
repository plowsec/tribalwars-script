javascript:

/*
@author: Virza
@link : 
javascript:
	function c(){	
		var b=document.createElement('script'); 
		b.type='text/javascript'; 
		b.src='http://dl.dropbox.com/u/35493140/autobalancer.js'; 
		document.getElementsByTagName('head')[0].appendChild(b);
	}
c();

*/
if(!window.location.href.match(/guerretribale/))	{
	var inf = new Array();
	var newInfo = new Array();
	var table = document.getElementsByTagName('table')[3];
	for(i=1;i<table.rows.length;i++)	{
		inf.push(table.rows[i].getElementsByTagName('a')[0].getAttribute('href'));	
	}
	for(x=0;x<inf.length;x++)	{
		var str = '';
		str+=inf[x].match(/\d+/gi)[1];
		str+='/'+inf[x].match(/target=\d+/).toString().match(/\d+/);
		str+='/'+inf[x].match(/wood=\d+/).toString().match(/\d+/);
		str+='/'+inf[x].match(/clay=\d+/).toString().match(/\d+/);
		str+='/'+inf[x].match(/iron=\d+/).toString().match(/\d+/);
		newInfo.push(str);
	}

	output = window.open('','','height=300,width=300');
	output.document.open();
	output.document.write('<textarea rows="10" cols="30" onclick="javascript:select();">'+newInfo.join("\n")+'</textarea>');
	output.document.close();
}
else {
	var pop ='';
	pop+='<style type="text/css">';
	pop+='.boite {font-family: "Arial Black", Gadget, sans-serif;font-size: 14px;';
	pop+='font-weight: bold;background-color:#09F;text-align: left;margin: 4px;padding: 4px;';
	pop+='width: 307px;position: absolute;visibility: visible;z-index: auto;top: 285px;';
	pop+='right: 18px;font-style: normal;line-height: normal;font-variant: normal;';
	pop+='text-transform: none;color: #FFF;text-decoration: none;height: 127px;border: 2px solid #333;}';
	pop+='#a {padding-bottom: 4px;background-color: #333;padding-left: 4px;padding-top: 4px;cursor:move}';
	pop+='.b {font-size: 10px;text-decoration: none;padding-top: 6px;padding-left: 2px;color:black;}';
	pop+='.c {font-size: 9px;font-style: italic;position: absolute;right: 2px;bottom: 2px;}';
	pop+='.foot {text-align: right;bottom: 6px;overflow: auto;position: absolute;visibility: visible;';
	pop+='z-index: auto;left: 243px;font-size: 10px;font-style: italic;color:black;}';
	pop+='</style>';

	pop+='<div id="drag" class="boite">';
	pop+='  <div id="a">';
	pop+='    	<span>MarketManager</span>		    </div>';
	pop+='  <div id="stats" class="b"> Nombre de transferts effectu\351s : <b id="z">0</b><b style="color:black;" id="total">/0</b><br />';
	pop+='<div id="j"><textarea rows="1" cols="16" id="tic" onclick="select();"></textarea><input type="button" value="OK" onclick="javascript:market()"/></div>';
	pop+='  </div>';
	pop+=' <div id="img">';
	pop+='<img src="http://sajir.pagesperso-orange.fr/images/travailleur.gif" name="mineur" />';
	pop+='</div>';
	pop+='    <div class="foot">';
	pop+='		<span>By Virza</span>';
	pop+='    </div>';
	pop+='</div>';
	
	$('body').append(pop);
	$('#drag').draggable({handle:"#a"});


	function market()	{
		var total = $('#tic').val().split("\n");
		$('#total').html('/'+total.length);
		$('#j').empty();
		
		for(z=0;z<total.length;z++)	{
				
				var village = total[z].split("/")[0];
				var target_id = total[z].split("/")[1];
				var wood = total[z].split("/")[2];
				var clay = total[z].split("/")[3];
				var iron = total[z].split("/")[4];
				var g="target_id="+target_id+"&wood="+wood+"&stone="+clay+"&iron="+iron;
				var url="http://"+window.location.hostname+"/game.php?village="+village+"&screen=market&try=confirm_send";
				
					$.ajax(
						{
							type:"POST",
							url:url,
							async:false,
							data:g,
							success:function(e)	{
									d= $("form:first",e);           
									$.post(d.attr("action"),d.serialize()); 
									if($('#error',e).text())	{
										$('#j').append('<b style="color:red">'+$('#error',e).text()+'</b>');
									}
							}
						}
					);
					$('#z').html(z+1);
		}
		$('#j').append('<b style="color:red">Termin\351</b>');
	}
}
void(0);
