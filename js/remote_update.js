
var LatestVersion = "1.0.5";
console.log("Remote update");
if (localStorage.version == undefined)
{
	requestUpdate();
}
else if(LatestVersion > localStorage.version)
{
	requestUpdate();
}

function requestUpdate () {
/* Modal */
	$("body").append("<div id='updateAlert' class='modal hide fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>"+
		"<div class='modal-header'>"+
		"<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button>"+
		"<h3 id='myModalLabel'></h3>"+
		"</div>"+
		"<div class='modal-body'>"+
		"<p>One fine body…</p>"+
		"</div>"+
		"<div class='modal-footer'>"+
		"<button class='btn' id='updateAlertClose' data-dismiss='modal' aria-hidden='true'></button> "+
		"<a id='updateAlertAccept' class='btn btn-primary' href='#'></a>"+
		"</div>"+
		"</div>");

	if(localStorage.lang == "en")
	{
		$("#myModalLabel").html("New Version Available");
		$("#updateAlertClose").html("Close");
		$("#updateAlertAccept").html("Download");
		$(".modal-body").html("<strong>Version " + LatestVersion + ".<br>List of changes: </strong>" +
			"<ul>" +
			"<li> Added update alerts." +
			"</li>" +
			"<ul>");
	}
	else if (localStorage.lang == "fr")
	{
		$("#myModalLabel").html("Nouvelle Version Disponible");
		$("#updateAlertClose").html("Fermer");
		$("#updateAlertAccept").html("Télécharger");
		$(".modal-body").html("<strong>Version " + LatestVersion + ".<br>Liste des modifications: </strong>" +
			"<ul>" +
			"<li> Ajouté alertes de mise à jour." +
			"</li>" +
			"<ul>");
	}
	else if (localStorage.lang == "de")
	{
		$("#myModalLabel").html("Neue Version Verfügbar");
		$("#updateAlertClose").html("Schließen");
		$("#updateAlertAccept").html("Herunterladen");
		$(".modal-body").html("<strong>Version " + LatestVersion + ".<br>Liste der Änderungen: </strong>" +
			"<ul>" +
			"<li> Update Warnungen." +
			"</li>" +
			"<ul>");
	}
	else if (localStorage.lang == "es")
	{
		$("#myModalLabel").html("Nueva Versión Disponible");
		$("#updateAlertClose").html("Cerrar");
		$("#updateAlertAccept").html("Descargar");
		$(".modal-body").html("<strong>Versión " + LatestVersion + ".<br>Lista de cambios: </strong>" +
			"<ul>" +
			"<li> Añadido alertas de actualización." +
			"</li>" +
			"<ul>");
	}
    $('#updateAlert').modal('show');


    $("#updateAlertAccept").click(function(){
    	window.open('http://google.com', 'blank');
    	$('#updateAlert').modal('hide');

    })
}