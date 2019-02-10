javascript:
/*
@author : Virza
@link : javascript: $.getScript("http://dl.dropbox.com/u/35493140/autorename.js");void(0);
@function : renommer les attaques en masse, en fonction de la vitesse; les attaques doivent être récentes pour un maximum de précision;
*/
names=[];
$('#incomings_table tr a:contains("Attaque")').each(function()	{
	$.ajax({type:"GET", url:this,async:false,success:function(e)	{
		var timeArray=$('#content_value',e).html().match(/\d{1,3}:\d{2}:\d{2}/gi);
		timeArray.splice(0,1);
		var time = timeArray[0];
		timeArray.splice(0,2);
		timeArray.splice(6,1);
		var results=[];
		var probs = [];
		for(i=0;i<timeArray.length;i++)	{
			var timeArr = timeArray[i].split(':');
			var travArray = time.split(':');
			var H = parseInt(timeArr[0], 10) - parseInt(travArray[0], 10);
			var M = parseInt(timeArr[1], 10) - parseInt(travArray[1], 10);
			var S = parseInt(timeArr[2], 10) - parseInt(travArray[2], 10);
			if(S < 0)	{S = 60 - (S * -1);M --;}
			if(M < 0)	{M = 60 - (M * -1);H --;}
			if(S<10)	{S = '0' + S;}
			if(M<10)	{M = '0' + M;}
			if(H<10)	{H = '0' + H;}
			results.push(H + ':' + M + ':' + S);
		}
		function fnMinOne()	{
			for(a=0;a<results.length;a++)	{
				if(results[a].split(':')[0]=='00')	{
					probs.push(timeArray[a]);
				}
			}
			return probs;
		}
		var newTimes = fnMinOne();
		if(newTimes.length==1)	{
		var name = $('#running_times td:contains('+newTimes[0]+')',e).next().html().match(/<span id=".*">/).toString().split('label')[1].match(/[a-z]*/).toString();
			newName=$('#editInput'+name,e).val();
			names.push(newName);
		}
		else	{
			newTimes.sort();
			var name = $('#running_times td:contains('+newTimes[0]+')', e).next().html().match(/<span id=".*">/).toString().split('label')[1].match(/[a-z]*/).toString();
			newName=$('#editInput'+name,e).val();
			names.push(newName);
		}
	}});
});
$('#incomings_table input[value="Attaque"]').each(function(i)	{
	$(this).val(names[i]).next().click();
});
void(0);