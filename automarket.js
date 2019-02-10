javascript:

/*
@author : Virza 
@link : javascript: $.getScript("http://dl.dropbox.com/u/35493140/automarket.js");void(0);
@version : 1.0 || {[JQuery]}
*/
$('table[class="vis overview_table"] th:contains("Village")').append('<strong> | Auto Market By Virza</strong>');
$('th:contains("Ordre de construction")').before('<th>Statut</th>');
$('table[class="vis overview_table"] tr').each(function(i)	{
	if(i>0)	{
		village=$(this).html().match(/<span id="label\_\d+">/).toString().match(/\d+/);
		res=$(this).children('td:eq(3)').text().match(/\d{1,3}\.?\d{0,3}/gi);
		multi=$(this).children('td:eq(5)').text().match(/\d{1,3}/);
		wood=parseFloat(res[0]);
		stone=parseFloat(res[1]);
		iron=parseFloat(res[2]);
		if(wood>=stone && wood>=iron && wood>=minimum)	{
			var res_sell='wood';
			var max = wood;
		}
		else if(wood<=stone && stone>=iron && stone>=minimum)	{
			var res_sell='stone';
			var max = stone;
		}
		else if(iron>=wood && iron>=stone && iron>=minimum)	{
			var res_sell='iron';
			var max = iron;
		}
		if(wood<=stone && wood<=iron)	{
			var res_buy='wood';
		}
		else if(wood>=stone && stone<=iron)	{
			var res_buy='stone';
		}
		else if(iron<=wood && iron<=stone)	{
			var res_buy='iron';
		}
		if(multi>parseInt(res_sell))	{
			multi=parseInt(res_sell);
		}
		var _merch=multi+'.000';
		if(parseFloat(_merch)>max)	{
			multi = parseInt(max);
		}
		if(res_sell)	{
			g = "sell=1000&res_sell="+res_sell+"&buy=1000&res_buy="+res_buy+"&max_time=30&multi="+multi;
			$.ajax(
				{
					type:"POST",
					url:"http://"+window.location.host+"/game.php?village="+village+"&screen=market&mode=own_offer",
					async:false,
					data:g,
					success:function(e)	{
						d= $("form:first",e);              
						$.post(d.attr("action"),d.serialize());  
					}
				}
			);
		}
		$(this).children('td:eq(7)').before('<td>OK</td>');
	}
});
void(0);		