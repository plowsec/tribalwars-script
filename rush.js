javascript:
try {
	$('form table tr').each(function(i)	{
		if(i>0)	{
			$.ajax({type:"GET", url:$('a:first', this).attr('href'),async:false,
				success:function(e)	{window.open($('a:contains("Attaquer encore une fois avec les m\352mes troupes")',e).attr('href'));}
			});
		}
	});
}
catch(objError){
	var dbgMsg="Erreur: " + String(objError.message||objError);
	alert(dbgMsg);
}
void(0);