var c, ctx, clr, ps;

c = document.getElementById("slate");
ctx = c.getContext("2d");
clr = document.getElementById("clear");
ps = document.getElementById("pause");

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

var pause = function(){
    window.cancelAnimationFrame(requestID);
};

var clear = function(){
    pause();
    ctx.clearRect(0, 0, 500, 500);
}

c.addEventListener("click", start);
clr.addEventListener("click", clear);
ps.addEventListener("click", pause);
