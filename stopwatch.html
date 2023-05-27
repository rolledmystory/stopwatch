<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no">
<title>index</title>
<style>
body,html
{
	width:100%;
	height:100%;
	padding:0;
	margin:0;
	background-color:#FFFFFF;
	font-family: "DejaVu Sans Condensed", Helvetica, Arial, "sans-serif";
	font-size: 120%;
}
#animation_container
{
	position:absolute;
	margin:auto;
	left:0;
	right:0;
	top:0;
	bottom:0;
	width:400px; 
	height:285px;
}
#dom_overlay_container
{
	pointer-events:none; 
	overflow:hidden; 
	width:400px; 
	height:285px; 
	position: absolute; 
	left: 0px; 
	top: 0px; 
	display: block;
	
}


canvas 
{
  	outline: none;
  	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
 	 width:400px; 
  	height:285px;
	position: absolute; 
	display: block;
  	background-color:#FFFFFF;
}

#loader
{
	position:absolute;
	top:30%;
	left:0; 
	width:100%;
	font-family: "DejaVu Sans Condensed", Helvetica, Arial, "sans-serif";
	font-size:8vh; 
	text-align:center; 
	font-weight:bold;	
}

@media screen and (orientation:portrait) 
{
  label
  {
  	font-size: 6vw;
	white-space: nowrap;
  }
   input[type="radio"], input[type="checkbox"]   
  {
  	width: 5vw;
	height: 5vw;
	margin: 0 2vw 2vw 0;
	white-space: nowrap;
  }
  input[type="number"]  
  {
  	text-align: center;
	font-size: 7vw;
	white-space: nowrap;
  }
}

@media screen and (orientation:landscape) 
{
  label
  {
  	font-size: 6vh;
	white-space: nowrap;
  }
  input[type="radio"], input[type="checkbox"]   
  {
  	width: 5vh;
	height: 5vh;
	margin: 0 2vh 2vh 0;
  }
  input[type="number"]  
  {
  	text-align: center;
	font-size: 6vh;
	white-space: nowrap;
  }
}

</style>
<script src="/js/createjs-2015.11.26.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="/js/timerfix.js"></script>
<script src="/js/prototypes.js"></script>
<script src="/js/snippets.js"></script>
<script src="/js/downtimer.js"></script>
<script src="js/main.js"></script>
<script src="js/index.js"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var urlData=urlSettings();
function init() 
{
	$("canvas").hide();
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("6109E36FCEBCFE48AA299AE54B799FE3");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	loader.addEventListener("progress", function(evt){handleProgress(evt,comp)});
	loader.addEventListener("error", function(evt){handleError(evt,comp)});
	lib.properties.manifest.push(
	{id:"language", src:"/language-files/"+urlData.language+".txt"});
	if (urlData.ns) lib.properties.manifest.push(
	{id:urlData.ns, src:"/sounds/"+urlData.ns+".mp3"}); 
	loader.loadManifest(lib.properties.manifest);
}
function handleError(evt, comp)
{
	if (evt.data.type=="sound") urlData.ns=null;
	if (evt.data.type=="text") urlData.language=null;
}
function handleProgress(evt, comp)
{
	$("#loader").html(Math.round(evt.progress*100)+"% loaded");
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.index();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();
	createjs.Touch.enable(stage);
	urlData.language=(urlData.language)?JSON.parse(queue.getResult("language")):null;
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(true,'both',true,1);	
	$("#loader").html("wait, initializing...");
	setTimeout(function()
	{
		$("#loader").hide();
		new Main(urlData);
		$("canvas").show();
	},200);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
</script>
</head>
<body onload="init();" style="margin:0px;">
<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:400px; height:285px">
<canvas id="canvas" width="400" height="285" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:400px; height:285px; position: absolute; left: 0px; top: 0px; display: block;">
</div>
</div>
<div id="loader">Loading...</div>
</body>
</html>
