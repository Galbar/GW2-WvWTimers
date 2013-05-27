var viewing_match = "";
var viewing_map = "all";
var hist_status = new Array();
var objective_names = new Array();
var objectives = new Array();
			objectives[ 1 ] = ["Overlook",25, 0];
			objectives[ 2 ] = ["Valley",25, 0];
			objectives[ 3 ] = ["Lowlands",25, 0];
			objectives[ 4 ] = ["Golanta Clearing",5, 0];
			objectives[ 5 ] = ["Pangloss Rise",5, 0];
			objectives[ 6 ] = ["Speldan Clearcut",5, 0];
			objectives[ 7 ] = ["Danelon Passage",5, 0];
			objectives[ 8 ] = ["Umberglade Woods",5, 0];
			objectives[ 9 ] = ["Stonemist Castle",35, 0];
			objectives[ 10 ] = ["Rogue's Quarry",5, 0];
			objectives[ 11 ] = ["Aldon's Ledge",10, 0];
			objectives[ 12 ] = ["Wildcreek Run",10, 0];
			objectives[ 13 ] = ["Jerrifer's Slough",10, 0];
			objectives[ 14 ] = ["Klovan Gully",10, 0];
			objectives[ 15 ] = ["Langor Gulch",10, 0];
			objectives[ 16 ] = ["Quentin Lake",10, 0];
			objectives[ 17 ] = ["Mendon's Gap",10, 0];
			objectives[ 18 ] = ["Anzalias Pass",10, 0];
			objectives[ 19 ] = ["Ogrewatch Cut",10, 0];
			objectives[ 20 ] = ["Veloka Slope",10, 0];
			objectives[ 21 ] = ["Durios Gulch",10, 0];
			objectives[ 22 ] = ["Bravost Escarpment",10, 0];
			objectives[ 23 ] = ["Garrison",25, 0];
			objectives[ 24 ] = ["Champion's demense",5, 0];
			objectives[ 25 ] = ["Redbriar",10, 0];
			objectives[ 26 ] = ["Greenlake",10, 0];
			objectives[ 27 ] = ["Ascension Bay",25, 0];
			objectives[ 28 ] = ["Dawn's Eyrie",10, 0];
			objectives[ 29 ] = ["The Spiritholme",5, 0];
			objectives[ 30 ] = ["Woodhaven",10, 0];
			objectives[ 31 ] = ["Askalion Hills",25, 0];
			objectives[ 32 ] = ["Etheron Hills",25, 0];
			objectives[ 33 ] = ["Dreaming Bay",25, 0];
			objectives[ 34 ] = ["Victors's Lodge",5, 0];
			objectives[ 35 ] = ["Greenbriar",10, 0];
			objectives[ 36 ] = ["Bluelake",10, 0];
			objectives[ 37 ] = ["Garrison",25, 0];
			objectives[ 38 ] = ["Longview",10, 0];
			objectives[ 39 ] = ["The Godsword",5, 0];
			objectives[ 40 ] = ["Cliffside",10, 0];
			objectives[ 41 ] = ["Shadaran Hills",25, 0];
			objectives[ 42 ] = ["Redlake",10, 0];
			objectives[ 43 ] = ["Hero's Lodge",5, 0];
			objectives[ 44 ] = ["Dreadfall Bay",25, 0];
			objectives[ 45 ] = ["Bluebriar",10, 0];
			objectives[ 46 ] = ["Garrison",25, 0];
			objectives[ 47 ] = ["Sunnyhill",10, 0];
			objectives[ 48 ] = ["Faithleap",5, 0];
			objectives[ 49 ] = ["Bluevale Refuge",5, 0];
			objectives[ 50 ] = ["Bluewater Lowlands",5, 0];
			objectives[ 51 ] = ["Astralholme",5, 0];
			objectives[ 52 ] = ["Arah's Hope",5, 0];
			objectives[ 53 ] = ["Greenvale Refuge",5, 0];
			objectives[ 54 ] = ["Foghaven",5, 0];
			objectives[ 55 ] = ["Redwater Lowlands",5, 0];
			objectives[ 56 ] = ["The Titanpaw",5, 0];
			objectives[ 57 ] = ["Cragtop",10, 0];
			objectives[ 58 ] = ["Godslore",5, 0];
			objectives[ 59 ] = ["Redvale Refuge",5, 0];
			objectives[ 60 ] = ["Stargrove",5, 0];
			objectives[ 61 ] = ["Greenwater Lowlands",5, 0];

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

function getMatchCallBack(i)
{
	return function (status)
	{
		if (hist_status.length == 0)
		{
			hist_status = status;
//			console.log("inicializando hist_status");
		}
		var str = "id"+i;
//		console.log("Actualizando puntuaciones");
		$("#"+str+"team0").html(status.scores[0]);
		$("#"+str+"team1").html(status.scores[1]);
		$("#"+str+"team2").html(status.scores[2]);
		var max_score = max(status.scores[0], status.scores[1], status.scores[2]);

//		console.log("Contando sitios");
		var blue = 0;
		var green = 0;
		var red = 0;
		for (var k = status.maps.length - 1; k >= 0; k--) {
			for(var j = 0; j < status.maps[k].objectives.length; ++j)
			{
				if(status.maps[k].objectives[j].owner != hist_status.maps[k].objectives[j].owner)
				{
					$("#loghead").after(
						"<tr id='entry"+status.maps[k].objectives[j].id+"' class='map-all map-"+status.maps[k].type+"'>"+
						"<td class='map-"+status.maps[k].type+"'>"+
						"<strong class='"+getTeamColor(status.maps[k].objectives[j].owner)+"'>"+objectives[status.maps[k].objectives[j].id][0]+"</strong>"+
						"</td>"+
						"<td class='map-"+status.maps[k].type+"'>"+
						"<span id='timer"+status.maps[k].objectives[j].id+"' class='label "+getLableClass(status.maps[k].objectives[j].owner)+"'>05 : 00</span>"+
						"</td>"+
						"</tr>");
					if (viewing_map != "all" && status.maps[k].type != viewing_map)
					{
						$(".map-"+status.maps[k].type).css("display", "none");
					}
					objectives[status.maps[k].objectives[j].id][2] = new Date();
					hist_status.maps[k].objectives[j] = status.maps[k].objectives[j];
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
			};
		};
		
//		console.log("Actualizando barras");
		$("#"+"id"+i+"barteam2").css("width", (status.scores[2]/max_score*100)+"%");
		$("#"+"id"+i+"barteam2").html("+"+green);
		$("#"+"id"+i+"barteam1").css("width", (status.scores[1]/max_score*100)+"%");
		$("#"+"id"+i+"barteam1").html("+"+blue);
		$("#"+"id"+i+"barteam0").css("width", (status.scores[0]/max_score*100)+"%");
		$("#"+"id"+i+"barteam0").html("+"+red);
	};
}

function update()
{
	$.getJSON("https://api.guildwars2.com/v1/world_names.json", function (world_names) {
		$.getJSON("https://api.guildwars2.com/v1/wvw/matches.json", function (aux_matches) {
			var matches = aux_matches.wvw_matches;
			var found = false
			for (i = 0; i < matches.length && !found; ++i) {
				if (matches[i].wvw_match_id == viewing_match)
				{
					found = true;
					$.getJSON("https://api.guildwars2.com/v1/wvw/match_details.json?match_id="+ matches[i].wvw_match_id, getMatchCallBack(i));
				}
			}
		});
	});	
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
	var url = document.createElement('a');
	url.href = window.location.href;
	viewing_match = url.hash.substring(1, 4);
	if (viewing_match == "") viewing_match = "2-1";
	$("#timers"+viewing_match).parent().addClass("active");
	$(".map-view").children().attr("href", "#"+viewing_match);
	$(".map-view-all").children().attr("href", "#"+viewing_match);
	$.getJSON("https://api.guildwars2.com/v1/wvw/objective_names.json", function (aux_objective_names) {
		objective_names = aux_objective_names;
	});
	$.getJSON("https://api.guildwars2.com/v1/world_names.json", function (world_names) {
		$.getJSON("https://api.guildwars2.com/v1/wvw/matches.json", function (aux_matches) {
			var matches = aux_matches.wvw_matches;
			var found = false;
			for (i = 0; i < matches.length && !found; ++i) {
				if (matches[i].wvw_match_id == viewing_match)
				{
					found = true;
					$("#content").append(
						"<tr><td><strong>"+
						"<span style='color:#5eb95e;' id='"+matches[i].green_world_id+"'>"+ getWorldName(matches[i].green_world_id, world_names) +"</span><br>"+
						"<span style='color:#4bb1cf;' id='"+matches[i].blue_world_id+"'>"+ getWorldName(matches[i].blue_world_id, world_names) +"</span><br>"+
						"<span style='color:#dd514c;' id='"+matches[i].red_world_id+"'>"+ getWorldName(matches[i].red_world_id, world_names) +"</span><br>"+
						"</strong></td>"+
						"<td style='text-align:right;'><strong>"+
						"<br>"+
						"<span id='id"+i+"team2'></span><br>"+
						"<span id='id"+i+"team1'></span><br>"+
						"<span id='id"+i+"team0'></span><br>"+
						"</strong></td>"+
						"<td id='id"+i+"bars' style='width:500px;'>"+
						"<br>"+
						"<div class='score-bar progress progress-success'>"+
						"<div id='id"+i+"barteam2' class='bar' style='width: 0%'></div>"+
						"</div>"+
						"<div class='score-bar progress progress-info'>"+
						"<div id='id"+i+"barteam1' class='bar' style='width: 0%'></div>"+
						"</div>"+
						"<div class='score-bar progress progress-danger'>"+
						"<div id='id"+i+"barteam0' class='bar' style='width: 0%'></div>"+
						"</div>"+
						"</td>"+
						"</tr>"
					);
					$.getJSON("https://api.guildwars2.com/v1/wvw/match_details.json?match_id="+ matches[i].wvw_match_id, getMatchCallBack(i));
				}
			}
		});
	});
	self.setInterval(function(){update()},5000);
	self.setInterval(function(){updateTimers()}, 500);
});