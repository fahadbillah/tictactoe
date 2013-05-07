// JavaScript Document
//$('#game').text('my first game work starts here.')

var canvas
var context

canvasSetup = function(){
	canvas = document.getElementById("gameCanvas");
	context = canvas.getContext("2d");
	canvas.width = screen.availWidth
	canvas.height = screen.availHeight	
	
	img = new Image()
	img.onload = onImageLoad
	img.src = ""
	
}

onImageLoad = function(){
	console.log("Image!!!!")
}

//var ctx=
ctx.fillStyle="#444"
function dynamicDisplay(){
	width = screen.availWidth
	height = screen.availHeight
	left = 0
	top = 0
	if(width>700 || height>1300){
		width = 320
		height = 480
		left = screen.availWidth - width
		left = left/2
	}
	w = Math.floor(width/10)
	h = Math.floor(height/10)
	$('#game').css({'width':width+'px'})
	$('#game').css({'height':height+'px'})
	$('#game').css({'margin-left':left+'px'})
	$('#game').css({'margin-top':top+'px'})
	//$('#gameCanvas').css({'width':320+'px'})
	//$('#gameCanvas').css({'height':320+'px'})
//	$('#gameCanvas').css({'margin-left':left+'px'})
//	$('#gameCanvas').css({'margin-top':top+'px'})
	$('#boardTableHolder').css({'width':width+'px'})
	$('#boardTableHolder').css({'height':height+'px'})
	$('#boardTableHolder').css({'margin-left':0+'px'})
	$('#boardTableHolder').css({'margin-top':0+'px'})
	//$('.box').css({'width':w+'px'})
	//$('.box').css({'height':h+'px'})
}
function boardDraw(){
	k = 100
	var html = ''
	html+='<table cellpadding="0" cellspacing="0">'
	for(i=0;i<10;i++){
		html+='<tr>'
		for(j=0;j<10;j++){
			html+='<td><div id="b'+k+'" class="box">'+k+'</div></td>'	
			k--
		}
		html+='</tr>'
	}
	html+='</table>'
	$('#boardTableHolder').html(html);
}
function canvasDrawing(){
	k = 200
	canvasOffset = $('#gameCanvas').offset()
	//for(i=1;i<101;i++){
		offset = $('#b65').offset()
		console.log(offset.left+' '+offset.top)
		fleft = offset.left - canvasOffset.left
		ftop = offset.top - canvasOffset.top - 25
		ctx.fillRect(fleft,ftop,32,32)
		console.log(fleft+' '+ftop)
		//k++
	//}
}
function init(){
	dynamicDisplay()
	canvasSetup()  
	boardDraw()
	canvasDrawing()	
}
init()
//screen.availWidth - available screen width
//screen.availHeight - available screen height