var w = 600;
var h = 600;

var draw = SVG('drawing').size(w, h);

function drawFlower(x,y,color){
    var stem = draw.line(x,y,x,y+60);
    stem.stroke({color:'green', width:5})
    for(var i = 0; i < 8; i++){
        var degree = i*(Math.PI/4);
        var cx = Math.cos(degree);
        var cy = Math.sin(degree);
        var circle = draw.circle(20).fill('purple');
        circle.center(x+(cx*20), y+(cy*20));
    }
    var mCircle = draw.circle(40).fill(color);
    mCircle.center(x,y);
}

for(var i = 0; i < 9; i++){
    var x = Math.random()*500+40;
    var y = Math.random()*500+40;
    drawFlower(x, y,'yellow');
}

function drawBee(x,y){
    var wing1 = draw.ellipse(40, 50);
    var wing2 = draw.ellipse(40, 50);
    wing1.center(x-10,y-40).rotate(135).opacity(0.1);
    wing2.center(x+10,y-40).rotate(45).opacity(0.1);
    draw.ellipse(70, 50).fill('yellow').center(x,y);
    draw.circle(45).center(x-35, y);
}

var bee = drawBee(500,100);

var test = draw.circle(40);
function move(){
    test.animate(6000).move(x-20,y-20).after(function() {
        test.animate().move(0,0);
    });
}
test.on('click',move);
