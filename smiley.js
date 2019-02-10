javascript:
if(document.URL.indexOf('&screen=mail&mode')!= -1)
{
function bb_code1() {
var doc = document.getElementById('bb_bar');
doc.innerHTML += "<a id=\'code\' title=\'Code\' href=\'#\' onclick=\"BBCodes.insert('[*code]', '[/*code]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://forum.guerretribale.fr/images/editor/code.gif) no-repeat 0px 0px; padding-left: 0px; padding-bottom:0px; margin-right: 2px; margin-bottom:3px; width: 20px; height: 20px\'>&nbsp;</span></a>";
}
bb_code1();
}


if(document.URL.indexOf('&screen=forum&screenmode=view')!= -1 || document.URL.indexOf('&screen=forum') != -1)
{
function bb_code() {
var doc = document.getElementById('bb_bar');
var texte = "no-repeat 0px 0px; padding-left: 0px; padding-bottom:0px; margin-right: 2px; margin-bottom:3px; width: 20px; height: 20px\'>&nbsp;</span></a>";
doc.innerHTML += "<a id=\'code\' title=\'Code\' href=\'#\' onclick=\"BBCodes.insert('[*code]', '[/*code]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://forum.guerretribale.fr/images/editor/code.gif)" + texte;
doc.innerHTML += "<a id=\'smile\' title=\'smile\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/smile.png', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/smile.png)" + texte; 
doc.innerHTML += "<a id=\'heureux\' title=\'heureux\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/heureux.png', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/heureux.png)" + texte; 
doc.innerHTML += "<a id=\'clin\' title=\'clin\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/clin.png', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/clin.png)" + texte; 
doc.innerHTML += "<a id=\'langue\' title=\'langue\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/langue.png', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/langue.png)" + texte;  
doc.innerHTML += "<a id=\'triste\' title=\'triste\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/triste.png', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/triste.png)" + texte; 
doc.innerHTML += "<a id=\'huh\' title=\'huh\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/huh.png', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/huh.png)" + texte; 
doc.innerHTML += "<a id=\'mechant\' title=\'mechant\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/mechant.png', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/mechant.png)" + texte; 
doc.innerHTML += "<a id=\'hihi\' title=\'hihi\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/hihi.png', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/hihi.png)" + texte; 
doc.innerHTML += "<a id=\'siffle\' title=\'siffle\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/siffle.png', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/siffle.png)" + texte; 
doc.innerHTML += "<a id=\'rire\' title=\'rire\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/rire.gif', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/rire.gif)" + texte; 
doc.innerHTML += "<a id=\'unsure\' title=\'unsure\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/unsure.gif', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/unsure.gif)" + texte;
doc.innerHTML += "<a id=\'blink\' title=\'blink\' href=\'#\' onclick=\"BBCodes.insert('[img]http://www.siteduzero.com/Templates/images/smilies/blink.gif', '[/img]');return false;\"><span style=\'display:inline-block; zoom:1; *display:inline; background:url(http://www.siteduzero.com/Templates/images/smilies/blink.gif)" + texte;
}
bb_code();
}

	



	


