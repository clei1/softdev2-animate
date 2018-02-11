var c, ctx, clr, ps, cir, box;

c = document.getElementById("slate");
ctx = c.getContext("2d");
clr = document.getElementById("clear");
ps = document.getElementById("pause");
cir = document.getElementById("cir");
box = document.getElementById("box");

var requestID;


var start = function(){
    
    window.cancelAnimationFrame(requestID);
    
    var radius = 0;
    var st = 1;
    
    var circle = function(){
	ctx.clearRect(0, 0, 500, 500);
	radius += st;
	if(radius > 250 || radius < 0){
	    st *= -1;
	}
	ctx.beginPath();
	ctx.arc(250, 250, radius, 0, 2 * Math.PI);
	ctx.fill();
	requestID = window.requestAnimationFrame(circle);
    };
    circle();
};

var dvd = function(){
    
    window.cancelAnimationFrame(requestID);
    
    var x = 0;
    var y = 0;

    var dx = 4.2;
    var dy = 3.4;
        
    var dvd = function(){
	x += dx;
	y += dy;
	if (x < 0 ||  x + 10 > c.width){
	    dx *= -1;
	}
	if( y < 0 || y + 20 > c.height){
	    dy *= -1;
	}
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.fillRect(x, y, 10, 20); 
	requestID = window.requestAnimationFrame(dvd);
    };
    dvd();
};

var pause = function(){
    window.cancelAnimationFrame(requestID);
};

var clear = function(){
    pause();
    ctx.clearRect(0, 0, 500, 500);
}

clr.addEventListener("click", clear);
ps.addEventListener("click", pause);

cir.addEventListener("click", start);
box.addEventListener("click", dvd);
