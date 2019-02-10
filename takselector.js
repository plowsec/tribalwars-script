javascript:

/* Version Data */
scriptName = "TakSelector";
majorVersion = 1;
minorVersion = 02;
/*End Version Data*/

/*
javascript:$.getScript("http://dl.dropbox.com/u/35493140/takselector.js");void(0);
*/
if(typeof(defaultExString) == "undefined")
   {defaultExString = "{COORDS} ";
   }
else
   {defaultExString += " ";
   }


var table = document.getElementById("villages_list");
table2 = $("th:contains('Villages')");
table2 = table2[table2.length - 1].parentNode.parentNode;

mainTable = table2.parentNode.parentNode.nextSibling;

/* End define major object variables */

var x = (table.tHead.innerHTML);

table.tHead.innerHTML = (x.replace("</tr>", "") + "<th>Village</th><th>Cocher/D\351cocher tout<input type='checkbox' id='selectAllBox' onClick='javascript: selectAll(); void(0)'></input></th><th>Inverser<input type='checkbox' id='invertListBox' onClick='javascript: invertAll(); void(0)'></input></th>");
var rows = table.tBodies[0].rows;
/* Add and Identify Checkboxes */

for (i = 0; i < rows.length; i++) {
    rows[i].innerHTML += "<td><input type='checkbox' id='includeCoordsInputBox_" + i + "'></input></td>";
} 
mainTable.innerHTML = "<br><br><br><br><br><br><br><br>" + mainTable.innerHTML; 
/*Experimental Output Format Table*/
mainTable.innerHTML = "<br><table><tr><th>Liste format exp\351rimental</th><td><input type='text' name='experimentalListFormat' value='"+defaultExString+"' id='experimentalFormatBox' /><br>Ins\351rer<select id='experimentalSelectBox' onChange=\"javascript: document.getElementById('experimentalFormatBox').value += document.getElementById('experimentalSelectBox').value; void(0);\"><option value=''>S\351lectionnez</option><option value='{COUNTER} '>Compteur</option><option value='{COORDS} '>Coordonn\351es</option><option value='[village]{COORDS}[/village] '>BBCode Coordonn\351es</option><option value='{VILLAGE LINK} '>Village</option><option value='{TARGET PLAYER} '>Pseudo joueur</option><option value='[player]{TARGET PLAYER}[/player]'>BBCode Joueur</option><option value='{POINTS} '>Points</option><option value='{DV}'> - Divider -</option><option value='{NL}'>Nouvelle ligne</option></select></td></tr><tr><th></th><td><input type='button' value='OK' onClick='javascript: outputExperimentalList(); void(0);' /></td></tr></table>" + mainTable.innerHTML;
/*End EXPERIMENTAL Output Format Table*/

/*Output Format Table*/
mainTable.innerHTML = "<br><table><tr><th>Format</th><td>Style script:<input type='radio' name='listFormat' value='script format' id='sRadBut' /><br>Format r\351servations:<input type='radio' name='listFormat' value='bbcode format' id='bRadBut' />  Montrer les points: <input type='checkbox' id='pointsBox' /></td></tr><tr><th></th><td><input type='button' value='OK' onClick='javascript: outputList(); void(0);' /><input type='button' value='R\351tablir' onClick='javascript: resetList(); void(0);' /></td></tr></table>" + mainTable.innerHTML;
/*End Output Format Table*/

/*Text Match Table*/
mainTable.innerHTML = "<br><table><tr><th>Recherche</th><td><input type='text' id='textMatchBox' size='17' value='Entrez le texte \340 rechercher'/></td></tr><tr><th></th><td><input type='button' value='Rechercher' onClick='javascript: byText(); void(0);'></input></td></tr></table><br>" + mainTable.innerHTML;
/*End Text Match Table*/

/*Points Table*/
mainTable.innerHTML = "<br><table><tr><th>Points Minimums</th><td><input type='text' id='minPointsBox' size='8' value='0'/></td></tr><tr><th>Points Maximums</th><td><input type='text' id='maxPointsBox' size='8' value='13000'/></td></tr><tr><th></th><td><input type='button' value='OK' onClick='javascript: byPoints(); void(0);'></input></td></tr></table><br>" + mainTable.innerHTML;
/*End Points Table*/

/*Travel Time Table*/
mainTable.innerHTML = "<br><table><tr><th>Par temps de trajet</th><td>HMS :<input type='text' size='3' value='24' id='maxH'></input>:<input type='text' size='3' value='00' id='maxM'></input>:<input type='text' size='3' value='00' id='maxS'></input></td></tr><tr><th>Coordonn\351es</th><td>X:<input type='text' size='5' value='"+game_data.village.coord.split('|')[0]+"' id='centralX1'></input> Y:<input type='text' size='5' value='"+game_data.village.coord.split('|')[1]+"' id='centralY1'></td></tr><tr><th><select id='troopTypeBox'><option value='NONE'>Unit\351</option><option value='spear'>Lancier / Hache / Archer</option><option value='sword'>Ep\351e</option><option value='spy'>Scout</option><option value='light'>L\351ger</option><option value='marcher'>Archer Mont\351</option><option value='heavy'>Lourd</option><option value='ram'>B\351lier / Catapulte</option><option value='snob'>Noble</option></select></th><td><input type='button' value='GO!' onClick='javascript: byTravelTime(); void(0);'></input></td></tr></table><br>" + mainTable.innerHTML;
/*End Travel Time Table*/

/*Proximity Table*/
mainTable.innerHTML = "<br><table><tr><th>Coordonn\351es</th><td>X:<input type='text' size='5' value='"+game_data.village.coord.split('|')[0]+"' id='centralX'></input> Y:<input type='text' size='5' value='"+game_data.village.coord.split('|')[1]+"' id='centralY'></td></tr><tr><th></th><td>Cases:<input type='text' size='5' value='25' id='maxFields'></input><input type='button' value='GO!' onClick='javascript: byFields(); void(0);'></input></td></tr></table><br>" + mainTable.innerHTML;
/*End Proximity Table*/


/*Zone Table*/
mainTable.innerHTML = 
  "<br><br><table><tr><th>Zone cible (Plus basse)</th><td>X:<input type='text' size='5' value='000' id='lowestX'></input> Y:<input type='text' size='5' value='000' id='lowestY'></input></td></tr><tr><th>Zone cible (Plus haute)</th><td>X:<input type='text' size='5' value='999' id='highestX'></input> Y:<input type='text' size='5' value='999' id='highestY'></input></td></tr><tr><th>Par continent</th><td>C<input type='text' size='4' value='55' id='inputK'></input><input type='button' value='Continent' onClick='javascript: selectByK(); void(0);'></input></td></tr><tr><th></th><td><input type='button' value='Zone' onClick='javascript: selectZone(); void(0);'></input></td></tr></table><br>" + mainTable.innerHTML;
/*End Zone Table*/

/*Selection Mode Table*/
mainTable.innerHTML = "<br><br><table><tr><th>Mode de s\351lection</th><td>Ajouter:<input type='radio' name='selectionFormat' value='Add' id='addRadBut' /><br>Supprimer:<input type='radio' name='selectionFormat' value='Remove' id='removeRadBut' /><br>Remplacer:<input type='radio' name='selectionFormat' value='Replace' id='replaceRadBut'  /></td></tr></table><br>" + mainTable.innerHTML;
/*End Selection Mode Table*/

mainTable.innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>" + mainTable.innerHTML;

selAll = document.getElementById("selectAllBox");
invAll = document.getElementById("invertListBox");
minX = document.getElementById("lowestX");
minY = document.getElementById("lowestY");
maxX = document.getElementById("highestX");
maxY = document.getElementById("highestY");
inpK = document.getElementById("inputK");
cenX = document.getElementById("centralX");
cenY = document.getElementById("centralY");
cenX1 = document.getElementById("centralX1");
cenY1 = document.getElementById("centralY1");
maxF = document.getElementById("maxFields");
maxH = document.getElementById("maxH");
maxM = document.getElementById("maxM");
maxS = document.getElementById("maxS");
TTB = document.getElementById("troopTypeBox");
pBox = document.getElementById("pointsBox");
sRad = document.getElementById("sRadBut");
bRad = document.getElementById("bRadBut");
targetPlayer = $.trim(mainTable.previousSibling.getElementsByTagName('th')[0].innerHTML);
listFormat = 'script format';
addRad = document.getElementById("addRadBut");
remRad = document.getElementById("removeRadBut");
repRad = document.getElementById("replaceRadBut");
txtBox = document.getElementById("textMatchBox");
exFormBox = document.getElementById('experimentalFormatBox');


repRad.checked = true;


function selectAll()
   {if (selAll.checked == true)
       {for (i = 0;i < rows.length;i++)
           {box = document.getElementById("includeCoordsInputBox_" + i);
            box.checked = true;
           }
       }
    else if (selAll.checked == false)
       {for (i = 0;i < rows.length;i++)
           {box = document.getElementById("includeCoordsInputBox_" + i);
            box.checked = false;
           }
       }
   }
function getDistance(a, b)
      {var a = a.split( "|");
       var b = b.split( "|");
       var c = b[0] - a[0];
       var d = b[1] - a[1];
       return Math.sqrt(c * c + d * d);
      }

function byPoints()
   {minPoints = parseInt(document.getElementById('minPointsBox').value);
    maxPoints = parseInt(document.getElementById('maxPointsBox').value);
    for(i=0; i<rows.length;i++)
      {cells = rows[i].getElementsByTagName("td");
       box = document.getElementById("includeCoordsInputBox_" + i);
       if (repRad.checked == true)
          {box.checked = false;
          }
       points = $(cells[2]).text().replace(".","");
       if((points > minPoints) && (points < maxPoints))
          {doSelect();
          }
      }
   }
/* Returns specific unit type's speed value */
function speed(troop_type)
   {return troop_xml.getElementsByTagName(troop_type)[0].getElementsByTagName("speed")[0].firstChild.nodeValue;
   }
/* Loads the xml data from the world server */
function fnGetConfig(conf, err)
   {var oRequest = new XMLHttpRequest();
    var sURL = "http://" + window.location.hostname + "/interface.php?func=get_" + conf;
    oRequest.open("GET", sURL, 0);
    oRequest.send(null);
    if (oRequest.status == 200) return oRequest.responseXML;
    alert("Error executing XMLHttpRequest call to get " + err + "!");
   } 
troop_xml = fnGetConfig("unit_info", "Troop Speed Data");

function byFields()
   {for (i = 0;i < rows.length;i++)
      {cells = rows[i].getElementsByTagName("td");
       box = document.getElementById("includeCoordsInputBox_" + i);
       coords = cells[1].innerHTML;
        if (repRad.checked == true)
            {box.checked = false;
            }
       if((getDistance(cenX.value + "|" + cenY.value, coords)) < maxF.value)
          {doSelect();
          }
      }
   }

function invertAll()
   {for (i = 0;i < rows.length;i++)
       {box = document.getElementById("includeCoordsInputBox_" + i);
        if (box.checked == true)
           {box.checked = false;
           }
        else if (box.checked == false)
           {box.checked = true;
           }
       }
   }

function selectZone()
   {for (i = 0;i < rows.length;i++)
       {cells = rows[i].getElementsByTagName("td");
        box = document.getElementById("includeCoordsInputBox_" + i);
        coords = cells[1].innerHTML.split( "|");
        if (repRad.checked == true)
            {box.checked = false;
            }
        if ((parseInt(coords[0]) > minX.value) && (parseInt(coords[0]) < maxX.value) && (parseInt(coords[1]) > minY.value) && (parseInt(coords[1]) < maxY.value))
           {doSelect();
           }
       }
   }


function byTravelTime()
   {centralCoords = cenX1.value + "|" + cenY1.value;
    seconds = Math.round(parseInt(maxH.value * 3600) + parseInt(maxM.value * 60) + parseInt(maxS.value));
    troopType = TTB.value;
    spd = Math.round(speed(troopType));
    for (i = 0;i < rows.length;i++)
       {cells = rows[i].getElementsByTagName("td");
        coords = cells[1].innerHTML;
        distance1 = getDistance(centralCoords,coords);
        travelTime = spd * distance1 * 60;
        box = document.getElementById("includeCoordsInputBox_" + i);
        if (repRad.checked == true)
            {box.checked = false;
            }
        if (seconds > travelTime)
           {doSelect();
           }
       }
   }

function selectByK()
   {K = inpK.value;
    if (K.length > 1)
       {K = K.split("");
       }
    else
       {K = ('0' + K.value).split("");
       }

    minX1 = (parseInt(K[1]) * 100) -1;
    minY1 = (parseInt(K[0]) * 100) -1;
    maxX1 = (parseInt(K[1]) +1) * 100;
    maxY1 = (parseInt(K[0]) +1) * 100;
    for (i = 0;i < rows.length;i++)
       {cells = rows[i].getElementsByTagName("td");
        box = document.getElementById("includeCoordsInputBox_" + i);
        coords = cells[1].innerHTML.split( "|");
        if (repRad.checked == true)
            {box.checked = false;
            }
        if ((parseInt(coords[0]) > minX1) && (parseInt(coords[0]) < maxX1) && (parseInt(coords[1]) > minY1) && (parseInt(coords[1]) < maxY1))
           {doSelect();
           }
       }
   }

function resetList()
   {confirmReset = confirm("Are you sure you want to reset the values?");
    if (confirmReset)
       {for (i = 1;i < rows.length;i++)
           {box = document.getElementById("includeCoordsInputBox_" + i);
            box.checked = false;
           }
        minX.value = 000;
        minY.value = 000;
        maxX.value = 999;
        maxY.value = 999;
       }
   }

function byText()
   {matchText = txtBox.value.toLowerCase();
    for (i = 0;i < rows.length;i++)
       {cells = rows[i].getElementsByTagName("td");
        box = document.getElementById("includeCoordsInputBox_" + i);
        txt = $(cells[0]).text().toLowerCase();
        if (repRad.checked == true)
            {box.checked = false;
            }
        if(txt.match(matchText))
           {doSelect();
           }
       }
   }

function doSelect()
   {if((addRad.checked == true) | (repRad.checked == true))
       {box.checked = true;
       }
    else if (remRad.checked == true)
       {box.checked = false;
       }
    else
       {alert("ERROR: Selection mode not set");
       fail();
       }
   }

function outputList()
   {kount = 0;
    clist = '';
    if(sRad.checked == true){listFormat = sRad.value;}
    if(bRad.checked == true){listFormat = bRad.value;}
    if(listFormat == "script format")
       {for (i = 0;i < rows.length;i++)
           {box = document.getElementById("includeCoordsInputBox_" + i);
            if (box.checked == true)
              {cells = rows[i].getElementsByTagName("td");
               clist += cells[1].innerHTML + " ";
              }
          }
       }
    
    else if(listFormat == "bbcode format")
       {for (i = 0;i < rows.length;i++)
           {box = document.getElementById("includeCoordsInputBox_" + i);
            if (box.checked == true)
              {kount = kount+1;
               cells = rows[i].getElementsByTagName("td");
               clist += ""+kount+":   [player]"+targetPlayer+"[/player]\t-\t[coord]" + cells[1].innerHTML + "[/coord]";
               if(pBox.checked == true)
                 {clist += "\t - " + $(cells[2]).text() +"\n";
                 }
               clist += "\n";
               }
           }
       }
    alert(clist);
   }

function outputExperimentalList()
   {kount = 0;
    clist = '';
    for (i = 0;i < rows.length;i++)
       {box = document.getElementById("includeCoordsInputBox_" + i);
        if (box.checked == true)
           {kount = kount+1;
            cells = rows[i].getElementsByTagName("td");
            villageLink = cells[0].getElementsByTagName('a')[0];
            coords = $(cells[1]).text();
            points = $(cells[2]).text();
            points = points.replace(".","");
            clist += exFormBox.value.replace(/{COORDS}/gi,coords).replace(/{TARGET PLAYER}/gi,targetPlayer).replace(/{VILLAGE LINK}/gi,villageLink).replace(/{POINTS}/gi,points).replace(/{DV}/gi,"\t-\t").replace(/{NL}/gi,"\n").replace(/{COUNTER}/ig,kount);
           }
       }
   alert(clist);
   }
   void(0);