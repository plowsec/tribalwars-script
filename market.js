javascript:

/* 
@author : Virza
@link : javascript: 
		var total = new Array(200000,200000,200000);
		var coords = "289|753 273|757 289|758 271|745";
		$.getScript("http://dl.dropbox.com/u/35493140/market.js");void(0);*/
var ls=localStorage;
var c= coords.split(' ');

var merch= parseInt($('table.vis th:contains("Marchands")').text().match(/\d{1,3}/))*1000;
var wood= parseInt($('#wood').text());
var stone = parseInt($('#stone').text());
var iron = parseInt($('#iron').text());
var amount = wood+stone+iron;

var _wood = (wood*100/amount)*merch/100;
var _stone = (stone*100/amount)*merch/100;
var _iron = (iron*100/amount)*merch/100;

var $wood=Number(ls.wood)||total[0];
var $stone=Number(ls.stone)||total[1];
var $iron=Number(ls.iron)||total[2];
if(Number(ls.woodStatus)!=1)	{
	if($wood>=_wood)	{
		$('input[name="wood"]').val(_wood);
		ls.wood=$wood-_wood;
		ls.woodStatus=0;
	}
	else {
		$('input[name="wood"]').val($wood);
		ls.wood=0;
		ls.woodStatus=1;
	}
}
if(Number(ls.stoneStatus)!=1)	{
	if($stone>=_stone)	{
		$('input[name="stone"]').val(_stone);
		ls.stone=$stone-_stone;
		ls.stoneStatus=0;
	}
	else {
		$('input[name="stone"]').val($stone);
		ls.stone=0;
		ls.stoneStatus=1;
	}
}
if(Number(ls.ironStatus)!=1)	{
	if($iron>=_iron)	{
		$('input[name="iron"]').val(_iron);
		ls.iron=$iron-_iron;
		ls.ironStatus=0;
	}
	else {
		$('input[name="iron"]').val($iron);
		ls.iron=0;
		ls.ironStatus=1;
	}
}
var b = Number(ls.indice)||0;
if(b>c.length)	{alert('Tu as fini :)');b=0;}
var a = c[b].split('|');
$('input[name="x"]').val(a[0]);
$('input[name="y"]').val(a[1]);
if(ls.wood<1000 && ls.stone<1000 && ls.iron<1000)	{
	ls.indice = (Number(ls.indice)||0)+1;
	ls.wood=total[0];
	ls.stone=total[1];
	ls.iron=total[2];
}
alert(ls.iron);
void(0);
