javascript: 
function fnGetPlayerTWSync() { 	
	var blDebug=true; 
	var tmpText; 
	function fnStatus(strMessage){ 
		if(typeof(blDebug)!="undefined"&&blDebug){ 
			try{ 
				eleDoc.body.appendChild(eleDoc.createTextNode(strMessage)); 
				eleDoc.body.appendChild(eleDoc.createElement('br')); 
			} 
			catch(objError){ 
				alert(strMessage+"\n"+objError); 
			} 
		} 
	} 
	function fnFilterText(inText) { 
		tmpText=""; 
		var blnBaliseActive=false; 
		var lenStr; 
		lenStr=inText.length; 
		for(indC=0;indC<lenStr;indC++) { 
			if (inText.charAt(indC)+"z" == "<z") { 
				blnBaliseActive=true; 
			} 
			else if (inText.charAt(indC)+"z" == ">z") { 
				blnBaliseActive=false; 
			} 
			else if (!blnBaliseActive) { 
				tmpText+=inText.charAt(indC); 
			} 
		} 
	} 
	function fnOpenWindow(strContent) { 
		var wind; 
		wind=window.open('','','width:150px,height:200px'); 
		wind.document.writeln(strContent); 
		wind.document.close(); 
	}
	/* Get the list of coordinates of every village of the player */ 
	function fnGetPlayerInformations() { 
		var table=null; 
		var ths = eleDoc.getElementsByTagName('th'); 
		var curr_row; 
		var villList; 
		for(indc=0;indc<ths.length&&table==null;indc++) { 
			if(ths[indc].innerHTML.match(/Villages/)) 
				table=ths[indc].parentNode.parentNode; 
		} 
		var coords=new Array(); 
		var currCC; 
		var currCcDet=new Array(); 
		villList=""; 
		if (table!=null) { 
			for(indc=1;indc<table.rows.length;indc++) { 
				curr_row=table.rows[indc]; 
				currCC=curr_row.cells[1].innerHTML; 
				fnFilterText(curr_row.cells[0].innerHTML); 
				currCcDet=currCC.split("|"); 
				villList+="(i__main__\n"; 
				villList+="Village\n"; 
				villList+="p0\n"; 
				villList+="(dp1\n"; 
				villList+="S'y'\n"; 
				villList+="p2\n"; 
				villList+="I"+currCcDet[1]+"\n"; 
				villList+="sS'nom'\n"; 
				villList+="p3\n"; 
				villList+="V"+tmpText+"\n"; 
				villList+="p4\n"; 
				villList+="sS'coord'\n"; 
				villList+="p5\n"; 
				villList+="(I"+currCcDet[0]+"\n"; 
				villList+="I"+currCcDet[1]+"\n"; 
				villList+="tp6\n"; 
				villList+="sS'x'\n"; 
				villList+="p7\n"; 
				villList+="I"+currCcDet[0]+"\n"; 
				villList+="sb."; 
				fnStatus('Coordinate :'+curr_row.cells[1].innerHTML + ' :: Nom :' + tmpText); 
				coords.push(curr_row.cells[1].innerHTML); 
			} 
			var strCrd; 
			strCrd=coords.join(' '); 
			fnStatus('Global Coords : '+strCrd); 
			var debCnt; 
			var finCnt; 
			debCnt="<b>Copiez Le contenu suivant dans le fichier TWSync :</b><br />\n<textarea rows=\"20\" cols=\"80\">"; 
			finCnt="</textarea>"; 
			fnOpenWindow(debCnt+villList+finCnt); 
		} 
		else { 
			alert('Aucune balise TABLE trouv\351e poss\351dant le HEADER recherch\351...'); 
		} 
	} 
	var eleDoc=(window.frames.length>0)?window.main.document:document; 
	var strUrl=eleDoc.URL; 
	fnStatus('URL: '+strUrl); 
	var strSrv=strUrl.substr(0,strUrl.lastIndexOf('/')+1); 
	fnStatus('Server: '+strSrv); 
	if(strUrl.search(/screen=info_player/)!=-1){ 
		fnStatus('Getting player informations...'); 
		fnGetPlayerInformations(); 
	} 
	else { 
		alert('Ce script se lance depuis un profil de joueur.'); 
	} 
} 
fnGetPlayerTWSync();