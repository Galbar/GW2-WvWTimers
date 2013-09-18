console.log("Entrando en el script");

var viewing_match = "";
var viewing_server = "";
var viewing_map = "all";
var hist_status = new Array();
var objectives = new Array();
			objectives[ 1 ] =  ["Mirador",25, 0]; 
			objectives[ 2 ] =  ["Valle",25, 0]; 
			objectives[ 3 ] =  ["Vega",25, 0]; 
			objectives[ 4 ] =  ["Claro Golanta",5, 0]; 
			objectives[ 5 ] =  ["Colina Pangloss",5, 0]; 
			objectives[ 6 ] =  ["Claro Espeldia",5, 0]; 
			objectives[ 7 ] =  ["Pasaje Danelon",5, 0]; 
			objectives[ 8 ] =  ["Bosques Clarosombra",5, 0]; 
			objectives[ 9 ] =  ["Castillo Piedraniebla",35, 0]; 
			objectives[ 10 ] = ["Cantera del Pícaro",5, 0]; 
			objectives[ 11 ] = ["Cornisa de Aldon",10, 0]; 
			objectives[ 12 ] = ["Pista Arroyosalvaje",10, 0]; 
			objectives[ 13 ] = ["Cenagal de Jerrifer",10, 0]; 
			objectives[ 14 ] = ["Barranco Klovan",10, 0]; 
			objectives[ 15 ] = ["Barranco Langor",10, 0]; 
			objectives[ 16 ] = ["Lago Quentin",10, 0]; 
			objectives[ 17 ] = ["Zanja de Mendon",10, 0]; 
			objectives[ 18 ] = ["Paso Anzalias",10, 0]; 
			objectives[ 19 ] = ["Tajo de la Guardia del Ogro",10, 0]; 
			objectives[ 20 ] = ["Pendiente Veloka",10, 0]; 
			objectives[ 21 ] = ["Barranco Durios",10, 0]; 
			objectives[ 22 ] = ["Escarpadura Bravost",10, 0]; 
			objectives[ 23 ] = ["Fuerte",25, 0]; 
			objectives[ 24 ] = ["Dominio del Campeón",5, 0]; 
			objectives[ 25 ] = ["Zarzarroja",10, 0]; 
			objectives[ 26 ] = ["Lagoverde",10, 0]; 
			objectives[ 27 ] = ["Bahía de la Ascensión",25, 0]; 
			objectives[ 28 ] = ["Aguilera del Alba",10, 0]; 
			objectives[ 29 ] = ["La Isleta Espiritual",5, 0]; 
			objectives[ 30 ] = ["Refugio Forestal",10, 0]; 
			objectives[ 31 ] = ["Colinas Askalion",25, 0]; 
			objectives[ 32 ] = ["Colinas Etheron",25, 0]; 
			objectives[ 33 ] = ["Bahía Onírica",25, 0]; 
			objectives[ 34 ] = ["Albergue del Vencedor",5, 0]; 
			objectives[ 35 ] = ["Zarzaverde",10, 0]; 
			objectives[ 36 ] = ["Lagoazul",10, 0]; 
			objectives[ 37 ] = ["Fuerte",25, 0]; 
			objectives[ 38 ] = ["Vistaluenga",10, 0]; 
			objectives[ 39 ] = ["La Hoja Divina",5, 0]; 
			objectives[ 40 ] = ["Despeñadero",10, 0]; 
			objectives[ 41 ] = ["Colinas Shadaran",25, 0]; 
			objectives[ 42 ] = ["Lagorrojo",10, 0]; 
			objectives[ 43 ] = ["Albergue del Héroe",5, 0]; 
			objectives[ 44 ] = ["Bahía Salto Aciago",25, 0]; 
			objectives[ 45 ] = ["Zarzazul",10, 0]; 
			objectives[ 46 ] = ["Fuerte",25, 0]; 
			objectives[ 47 ] = ["Colina Soleada",10, 0]; 
			objectives[ 48 ] = ["Salto de Fe",5, 0]; 
			objectives[ 49 ] = ["Refugio Valleazul",5, 0]; 
			objectives[ 50 ] = ["Tierras Bajas de Aguazul",5, 0]; 
			objectives[ 51 ] = ["Isleta Astral",5, 0]; 
			objectives[ 52 ] = ["Esperanza de Arah",5, 0]; 
			objectives[ 53 ] = ["Refugio de Valleverde",5, 0]; 
			objectives[ 54 ] = ["Refugio Neblinoso",5, 0]; 
			objectives[ 55 ] = ["Tierras Bajas de Aguarroja",5, 0]; 
			objectives[ 56 ] = ["La Garra del Titán",5, 0]; 
			objectives[ 57 ] = ["Cumbrepeñasco",10, 0]; 
			objectives[ 58 ] = ["Sabiduría de los Dioses",5, 0]; 
			objectives[ 59 ] = ["Refugio Vallerojo",5, 0]; 
			objectives[ 60 ] = ["Arboleda de las Estrellas",5, 0]; 
			objectives[ 61 ] = ["Tierras Bajas de Aguaverde",5, 0]; 

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
	"	<a href='#'>Todo</a>"+
	"</li>"+
	"<li class='map-view'  id='Center'>"+
	"	<a href='#' class='NoTeamColor'>Eternos</a>"+
	"</li>"+
	"<li class='map-view'  id='GreenHome'>"+
	"	<a href='#' class='GreenTeamColor'>Verde</a>"+
	"</li>"+
	"<li class='map-view'  id='BlueHome'>"+
	"	<a href='#' class='BlueTeamColor'>Azul</a>"+
	"</li>"+
	"<li class='map-view'  id='RedHome'>"+
	"	<a href='#' class='RedTeamColor'>Rojo</a>"+
	"</li>"+
	"</ul>"+
	"<ul class='tabs-desktop nav-maps nav-tabs'>"+
	"<li class='map-view-all active' id='all'>"+
	"	<a href='#'>Todos</a>"+
	"</li>"+
	"<li class='map-view'  id='Center'>"+
	"	<a href='#' class='NoTeamColor'>Campos de Batalla Eternos</a>"+
	"</li>"+
	"<li class='map-view'  id='GreenHome'>"+
	"	<a href='#' class='GreenTeamColor'>Frontera Verde</a>"+
	"</li>"+
	"<li class='map-view'  id='BlueHome'>"+
	"	<a href='#' class='BlueTeamColor'>Frontera Azul</a>"+
	"</li>"+
	"<li class='map-view'  id='RedHome'>"+
	"	<a href='#' class='RedTeamColor'>Frontera Rojo</a>"+
	"</li>"+
	"</ul>"+
	"<table class='table'>"+
	"<thead id='loghead'>"+
	"<tr>"+
	"<th><span class='text'>Objetivo</span></th>"+
	"<th><span class='text'>Tiempo</span></th>"+
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

$(".WvWTimers-widget").append("<span id='footer'>Por <a href='https://github.com/Galbar/' target='_blank'>Galbar</a></span>");

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
	$.getJSON("https://api.guildwars2.com/v1/world_names.json?lang=es", function (world_names) {
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