console.log("Entrando en el script");

var viewing_match = "";
var viewing_server = "";
var viewing_map = "all";
var hist_status = new Array();
var objectives = new Array();
			objectives[ 1 ] = ["Belvédère",25, 0];
			objectives[ 2 ] = ["Vallée",25, 0];
			objectives[ 3 ] = ["Basses terres",25, 0];
			objectives[ 4 ] = ["Clairière de Golanta",5, 0];
			objectives[ 5 ] = ["Montée de Pangloss",5, 0];
			objectives[ 6 ] = ["Forêt rasée de Speldan",5, 0];
			objectives[ 7 ] = ["Passage Danelon",5, 0];
			objectives[ 8 ] = ["Bois d'Ombreclair",5, 0];
			objectives[ 9 ] = ["Château Brumepierre",35, 0];
			objectives[ 10 ] = ["Carrière des voleurs",5, 0];
			objectives[ 11 ] = ["Corniche d'Aldon",10, 0];
			objectives[ 12 ] = ["Piste du Ruisseau sauvage",10, 0];
			objectives[ 13 ] = ["Bourbier de Jerrifer",10, 0];
			objectives[ 14 ] = ["Petit ravin de Klovan",10, 0];
			objectives[ 15 ] = ["Ravin de Langor",10, 0];
			objectives[ 16 ] = ["Lac Quentin",10, 0];
			objectives[ 17 ] = ["Faille de Mendon",10, 0];
			objectives[ 18 ] = ["Col d'Anzalias",10, 0];
			objectives[ 19 ] = ["Percée de Gardogre",10, 0];
			objectives[ 20 ] = ["Flanc de Veloka",10, 0];
			objectives[ 21 ] = ["Ravin de Durios",10, 0];
			objectives[ 22 ] = ["Falaise de Bravost",10, 0];
			objectives[ 23 ] = ["Garnison",25, 0];
			objectives[ 24 ] = ["Fief du champion",5, 0];
			objectives[ 25 ] = ["Bruyerouge",10, 0];
			objectives[ 26 ] = ["Lac Vert",10, 0];
			objectives[ 27 ] = ["Baie de l'Ascension",25, 0];
			objectives[ 28 ] = ["Promontoire de l'aube",10, 0];
			objectives[ 29 ] = ["L'antre des esprits",5, 0];
			objectives[ 30 ] = ["Gentesylve",10, 0];
			objectives[ 31 ] = ["Collines d'Askalion",25, 0];
			objectives[ 32 ] = ["Collines d'Etheron",25, 0];
			objectives[ 33 ] = ["Baie des rêves",25, 0];
			objectives[ 34 ] = ["Pavillon du vainqueur",5, 0];
			objectives[ 35 ] = ["Vertebranche",10, 0];
			objectives[ 36 ] = ["Lac bleu",10, 0];
			objectives[ 37 ] = ["Garnison",25, 0];
			objectives[ 38 ] = ["Longuevue",10, 0];
			objectives[ 39 ] = ["L'Epée divine",5, 0];
			objectives[ 40 ] = ["Flanc de falaise",10, 0];
			objectives[ 41 ] = ["Collines de Shadaran",25, 0];
			objectives[ 42 ] = ["Rougelac",10, 0];
			objectives[ 43 ] = ["Pavillon du Héros",5, 0];
			objectives[ 44 ] = ["Baie du Noir déclin",25, 0];
			objectives[ 45 ] = ["Bruyazur",10, 0];
			objectives[ 46 ] = ["Garnison",25, 0];
			objectives[ 47 ] = ["Colline ensoleillée",10, 0];
			objectives[ 48 ] = ["Ferveur",5, 0];
			objectives[ 49 ] = ["Refuge de bleuval",5, 0];
			objectives[ 50 ] = ["Basses terres d'Eau-Azur",5, 0];
			objectives[ 51 ] = ["Astralholme",5, 0];
			objectives[ 52 ] = ["Espoir d'Arah",5, 0];
			objectives[ 53 ] = ["Refuge de Valvert",5, 0];
			objectives[ 54 ] = ["Havre gris",5, 0];
			objectives[ 55 ] = ["Basses terres de Rubicon",5, 0];
			objectives[ 56 ] = ["Bras du titan",5, 0];
			objectives[ 57 ] = ["Sommet de l'escarpement",10, 0];
			objectives[ 58 ] = ["Divination",5, 0];
			objectives[ 59 ] = ["Refuge de Valrouge",5, 0];
			objectives[ 60 ] = ["Bosquet stellaire",5, 0];
			objectives[ 61 ] = ["Basses terres d'Eau-Verdoyante",5, 0];

function getWorldName(id, world_names) {
	var i = 0;
	while (i < world_names.length)
	{
		if (world_names[i].id == id) return world_names[i].name;  
		++i;
	}
	return "Not found";
}

function getTeamColor (team)
{
	var color = "";
	if (team == "Green" || team == "green") color = "GreenTeamColor";
	else if (team == "Blue" || team == "blue") color = "BlueTeamColor";
	else if (team == "Red" || team == "red") color = "RedTeamColor";
	else if (team == "No" || team == "no") color = "NoTeamColor";
	return color;
}

function getLableClass(team)
{
	var color = "";
	if (team == "Green" || team == "green") color = "label-success";
	else if (team == "Blue" || team == "blue") color = "label-info";
	else if (team == "Red" || team == "red") color = "label-important";
	return color;
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}

function getTime()
{
	var today=new Date();
	var h=time.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	// add a zero in front of numbers<10
	m=checkTime(m);
	s=checkTime(s);
	return h+":"+m+":"+s;
}

function getTimeLeft(time)
{
	time = 300000-time;
	var m=Math.floor( time/(60000) );
	var s=Math.floor( (time/1000)-(m*60) );
	// add a zero in front of numbers<10
	m=checkTime(m);
	s=checkTime(s);
	return m+" : "+s;
}

function max (a, b, c)
{
	if (a > b)
	{
		if (a > c) return a;
		else return c;
	}
	else if (b > c)
	{
		return b;
	}
	else return c;
}

function getMapName(id)
{
	var ret = "";
	if (id == "RedHome") ret = "<strong class='"+getTeamColor("red")+"'>Red Team Borderlands</strong>";
	else if (id == "BlueHome") ret = "<strong class='"+getTeamColor("blue")+"'>Blue Team Borderlands</strong>";
	else if (id == "GreenHome") ret = "<strong class='"+getTeamColor("green")+"'>Green Team Borderlands</strong>";
	else if (id == "Center") ret = "<strong class='"+getTeamColor("no")+"'>Eternal Battlegrounds</strong>";
	return ret;
}

function getObjectiveType (id)
{
	if (objectives[id][1] == 5) return "camp";
	if (objectives[id][1] == 10) return "tower";
	if (objectives[id][1] == 25) return "keep";
	if (objectives[id][1] == 35) return "castle";
}

function getMatchCallBack()
{
	return function (status)
	{
		if (hist_status.length == 0)
		{
			hist_status = status;
//			console.log("inicializando hist_status");
		}
		if ($(".WvWTimers-widget").attr("mode") < "2")
		{
			var str = "id"+viewing_match;
//			console.log("Actualizando puntuaciones");
			$("#"+str+"team0").html(status.scores[0]);
			$("#"+str+"team1").html(status.scores[1]);
			$("#"+str+"team2").html(status.scores[2]);
			var max_score = max(status.scores[0], status.scores[1], status.scores[2]);
		}
//		console.log("Contando sitios");
		var blue = 0;
		var green = 0;
		var red = 0;
		for (var k = status.maps.length - 1; k >= 0; k--) {
			for(var j = 0; j < status.maps[k].objectives.length; ++j)
			{
				if(status.maps[k].objectives[j].id<=61)
				{
					if ($(".WvWTimers-widget").attr("mode") > "0")
					{
						if(status.maps[k].objectives[j].owner != hist_status.maps[k].objectives[j].owner)
						{
							if (objectives[status.maps[k].objectives[j].id][2] != 0)
							{
								$("#entry"+status.maps[k].objectives[j].id).remove();
							}
							$("#log").append(
								"<tr id='entry"+status.maps[k].objectives[j].id+"' class='map-all map-"+status.maps[k].type+"'>"+
								"<td>"+
								"<i class='objective-"+status.maps[k].objectives[j].owner+" "+getObjectiveType(status.maps[k].objectives[j].id)+"'></i><strong class='"+getTeamColor(status.maps[k].objectives[j].owner)+"'>"+objectives[status.maps[k].objectives[j].id][0]+"</strong>"+
								"</td>"+
								"<td>"+
								"<span id='timer"+status.maps[k].objectives[j].id+"' class='label "+getLableClass(status.maps[k].objectives[j].owner)+"'></span>"+
								"</td>"+
								"</tr>");
							if (viewing_map != "all" && status.maps[k].type != viewing_map)
							{
								$(".map-"+status.maps[k].type).css("display", "none");
							}
							objectives[status.maps[k].objectives[j].id][2] = new Date();
							hist_status.maps[k].objectives[j] = status.maps[k].objectives[j];
						}
					}
					if (status.maps[k].objectives[j].owner == "Green")
					{
						green += objectives[status.maps[k].objectives[j].id][1];
					}
					else if (status.maps[k].objectives[j].owner == "Blue")
					{
						blue += objectives[status.maps[k].objectives[j].id][1];
					}
					else if (status.maps[k].objectives[j].owner == "Red")
					{
						red += objectives[status.maps[k].objectives[j].id][1];
					}
				}
			};
		};
		if ($(".WvWTimers-widget").attr("mode") < "2")
		{
//			console.log("Actualizando barras");
			$("#"+"id"+viewing_match+"barteam2").css("width", (status.scores[2]/max_score*100)+"%");
			$("#"+"id"+viewing_match+"barteam2").html("+"+green);
			$("#"+"id"+viewing_match+"barteam1").css("width", (status.scores[1]/max_score*100)+"%");
			$("#"+"id"+viewing_match+"barteam1").html("+"+blue);
			$("#"+"id"+viewing_match+"barteam0").css("width", (status.scores[0]/max_score*100)+"%");
			$("#"+"id"+viewing_match+"barteam0").html("+"+red);
		}
	};
}

function update()
{
	$.getJSON("https://api.guildwars2.com/v1/wvw/match_details.json?match_id="+ viewing_match, getMatchCallBack());
}

function updateTimers()
{
	for (var i = objectives.length - 1; i > 0; i--) {
		var now = new Date();
//		console.log("objectives[i]. i: "+i);
		if (objectives[i][2] != 0)
		{
			if (now.getTime() >= objectives[i][2].getTime()+300000)
			{
				objectives[i][2] = 0;
				$("#entry"+i).remove();
			}
			else
			{
				$("#timer"+i).html(getTimeLeft(now - objectives[i][2]));
			}
		}
	};
}

$(document).ready(function(){
	if ($(".WvWTimers-widget").attr("mode") < "2")
		console.info("mode < 2");
	if ($(".WvWTimers-widget").attr("mode") > "0")
		console.info("mode > 0");

console.log("la pagina está lista!");
if ($(".WvWTimers-widget").attr("mode") < "2")
{
	$(".WvWTimers-widget").append(
	"<table id='WvW-widget-punctuation'></table>");
}
if ($(".WvWTimers-widget").attr("mode") > "0")
{
	$(".WvWTimers-widget").append(
	"<div id='WvW-widget-log'>"+
	"<ul class='tabs-mobile nav-maps nav-tabs'>"+
	"<li class='map-view-all active' id='all'>"+
	"	<a href='#'>Tous</a>"+
	"</li>"+
	"<li class='map-view'  id='Center'>"+
	"	<a href='#' class='NoTeamColor'>Éternels</a>"+
	"</li>"+
	"<li class='map-view'  id='GreenHome'>"+
	"	<a href='#' class='GreenTeamColor'>Vert</a>"+
	"</li>"+
	"<li class='map-view'  id='BlueHome'>"+
	"	<a href='#' class='BlueTeamColor'>Bleu</a>"+
	"</li>"+
	"<li class='map-view'  id='RedHome'>"+
	"	<a href='#' class='RedTeamColor'>Rouge</a>"+
	"</li>"+
	"</ul>"+
	"<ul class='tabs-desktop nav-maps nav-tabs'>"+
	"<li class='map-view-all active' id='all'>"+
	"	<a href='#'>Tous</a>"+
	"</li>"+
	"<li class='map-view'  id='Center'>"+
	"	<a href='#' class='NoTeamColor'>Champs de Bataille Éternels</a>"+
	"</li>"+
	"<li class='map-view'  id='GreenHome'>"+
	"	<a href='#' class='GreenTeamColor'>Frontières Verts</a>"+
	"</li>"+
	"<li class='map-view'  id='BlueHome'>"+
	"	<a href='#' class='BlueTeamColor'>Frontières Bleu</a>"+
	"</li>"+
	"<li class='map-view'  id='RedHome'>"+
	"	<a href='#' class='RedTeamColor'>Frontières Rouge</a>"+
	"</li>"+
	"</ul>"+
	"<table class='table'>"+
	"<thead id='loghead'>"+
	"<tr>"+
	"<th><span class='text'>Objectif</span></th>"+
	"<th><span class='text'>Temps</span></th>"+
	"</tr>"+
	"</thead>"+
	"</table>"+
	"<div id='table-scroll'>"+
	"<table id='log' class='table'>"+
	"</table>"+
	"</div>"+
	"</div>");
}

if(localStorage.show_scores == "false")
  $("#WvW-widget-log").css('top', 0 );

$(".WvWTimers-widget").append("<span id='footer'>Par <a href='https://github.com/Galbar/' target='_blank'>Galbar</a></span>");

viewing_server = $(".WvWTimers-widget").attr("server-id");
console.log("viewing_server: "+viewing_server);
	$(".map-view").click(function(){
		$(".map-view-all").removeClass("active");
		$(".map-view").removeClass("active");
		$(this).addClass("active");
		$(".map-all").css("display", "none");
		$(".map-"+$(this).attr("id")).css("display", "");
		viewing_map = $(this).attr("id");
	});
	$(".map-view-all").click(function(){
		$(".map-view").removeClass("active");
		$(this).addClass("active");
		$(".map-all").css("display", "");
		viewing_map = $(this).attr("id");
	});
	console.log("getting ready");
	$.getJSON("https://api.guildwars2.com/v1/world_names.json?lang=fr", function (world_names) {
		$.getJSON("https://api.guildwars2.com/v1/wvw/matches.json?", function (aux_matches) {
			var matches = aux_matches.wvw_matches;
			var found = false;
			for (i = 0; i < matches.length && !found; ++i) {
				if (matches[i].green_world_id == viewing_server || matches[i].blue_world_id == viewing_server || matches[i].red_world_id == viewing_server)
				{
					found = true;
					viewing_match = matches[i].wvw_match_id;
					if ($(".WvWTimers-widget").attr("mode") < "2")
					{
						$("#WvW-widget-punctuation").append(
							"<tr><td style='min-width:150px;max-width=33%;'>"+
							"<div class='server-name GreenTeamColor' id='"+matches[i].green_world_id+"'>"+ getWorldName(matches[i].green_world_id, world_names) +"</div>"+
							"<div class='server-name BlueTeamColor' id='"+matches[i].blue_world_id+"'>"+ getWorldName(matches[i].blue_world_id, world_names) +"</div>"+
							"<div class='server-name RedTeamColor' id='"+matches[i].red_world_id+"'>"+ getWorldName(matches[i].red_world_id, world_names) +"</div>"+
							"</td>"+
							"<td style='text-align:right;'>"+
							"<span id='id"+viewing_match+"team2'></span><br>"+
							"<span id='id"+viewing_match+"team1'></span><br>"+
							"<span id='id"+viewing_match+"team0'></span><br>"+
							"</td>"+
							"<td id='id"+viewing_match+"bars' style='min-width:100px;width:100%;'>"+
							"<div class='score-bar progress progress-success'>"+
							"<div id='id"+viewing_match+"barteam2' class='bar' style='width: 0%'></div>"+
							"</div>"+
							"<div class='score-bar progress progress-info'>"+
							"<div id='id"+viewing_match+"barteam1' class='bar' style='width: 0%'></div>"+
							"</div>"+
							"<div class='score-bar progress progress-danger'>"+
							"<div id='id"+viewing_match+"barteam0' class='bar' style='width: 0%'></div>"+
							"</div>"+
							"</td>"+
							"</tr>"
						);
					}
					$.getJSON("https://api.guildwars2.com/v1/wvw/match_details.json?match_id="+ viewing_match, getMatchCallBack());
				}
			}
		});
	});
	self.setInterval(function(){update()},5000);
	if($(".WvWTimers-widget").attr("mode") > "0")
		self.setInterval(function(){updateTimers()}, 500);
});