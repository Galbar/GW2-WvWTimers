GW2-WvWTimers
=============

Displays the remaining time of recent conquered places' Lord's buff

Example: http://galbar.github.io/GW2-WvWTimers/

# Simple Web Widget
Inside the folder *server-widget* you will find all the files you need to add to your site a simplifyed version of GW2-WvWTimers.

Example: http://galbar.github.io/GW2-WvWTimers/server-widget/

## How to add it to a web
You will find all the files needed inside the folder *server-widget* in this repository.

First you need to have at least jquery 1.9.1 (http://jquery.com/). If you don't have it, just add the file *jquery-1.9.1.min.js* to a folder in your site (p.e. /a/folder/) and add the following line to the header of the page:
```
<script type='text/javascript' src='/a/folder/jquery-1.9.1.min.js' ></script>
```

Next thing you have to do is to add the widget wherever you want in your web, for doing so insert the following lines where you want it to be in your page:
```
<!-- GW2-WvWTimers Widget -->
<div class="WvWTimers-widget" server-id="2301" mode="1" style="overfolw: auto; width: 100%;"></div>
<link href='wvwtimers-widget-style.css' rel='stylesheet' media='screen'></link>
<script type='text/javascript' src='wvwtimers-widget.js'></script>
<!-- End of widget -->
```

Finally, just copy the folder *img* into the same folder where your web page with the widget is placed.

## How to set up the widget
There are two parameters you may want to set in the widget.

The first one is **server-id**. This is the id of the server in the match you want information from. If you don't know the id of your server, go to https://api.guildwars2.com/v1/world_names.json find your server and copy its id.

The second one is **mode**. It can be set to three values:
 * *"0"* The widget will only show the scores and the charts of the match.
 * *"1"* The widget will show both, the scores and the charts, and the capture timers.
 * *"2"* The widget will only show the capture timers.

Finally you can set the width inside the style attribute. The minimum recommended is *400px*.