LatestVersion = "1.0.1";
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
		"<button class='btn' id='updateAlertClose' data-dismiss='modal' aria-hidden='true'></button>"+
		"<button id='updateAlertAccept' class='btn btn-primary'></button>"+
		"</div>"+
		"</div>");

	if(localStorage.lang == "en")
	{
		$("#myModalLabel").text("New Version Available");
		$("#updateAlertClose").text("Close");
		$("#updateAlertAccept").text("Download");
		$(".modal-body").text("<strong> Version" + LatestVersion + ": List of changes: </ strong>" +
			"<ul>" +
			"<li> Added update alerts." +
			"<li>" +
			"<ul>");
	}
	else if (localStorage.lang == "fr")
	{
		$("#myModalLabel").text("Nouvelle Version Disponible");
		$("#updateAlertClose").text("Fermer");
		$("#updateAlertAccept").text("Télécharger");
		$(".modal-body").text("Version <strong>" + LatestVersion + ": Liste des modifications: </ strong>" +
			"<ul>" +
			"<li> Ajouté alertes de mise à jour." +
			"<li>" +
			"<ul>");
	}
	else if (localStorage.lang == "de")
	{
		$("#myModalLabel").text("Neue Version Verfügbar");
		$("#updateAlertClose").text("Schließen");
		$("#updateAlertAccept").text("Herunterladen");
		$(".modal-body").text("<strong> Version" + LatestVersion + ": Liste der Änderungen: </ strong>" +
			"<ul>" +
			"<li> Update Warnungen." +
			"<li>" +
			"<ul>");
	}
	else if (localStorage.lang == "es")
	{
		$("#myModalLabel").text("Nueva Versión Disponible");
		$("#updateAlertClose").text("Cerrar");
		$("#updateAlertAccept").text("Descargar");
		$(".modal-body").text("Versión <strong>" + LatestVersion + ": Lista de cambios: </ strong>" +
			"<ul>" +
			"<li> Añadido alertas de actualización." +
			"<li>" +
			"<ul>");
	}

    $('#updateAlert').modal('show');

    $("#updateAlertAccept").click(function(){
    	window.location("http://build.phonegap.com/apps/440645/install/?qrkey=KisptxnCYUotJEmsyfPc");
    })
}