
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
