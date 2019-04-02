var w = 600;
var h = 600;
var x = w/2;
var y = h/2;
var numRows = 8;
var bL = 50;
var bH = 30;

var draw = SVG('drawing').size(w, h);

for(var i=0; i<numRows;i++){
    //the y value for each row
    var rowY = (i*bH)+(bH/2);
    //x value, take center, and move whole row back by amount of blocks in that row
    var xpos = (x-(bL/2)) - (i*(bL/2));
    //starts pyramid at the bottom
    var ypos = (h-bH);
    
    for(var j = 0; j< i+1; j++){
        //x center positions for each blocks in a row
        let blockx = (j*bL)+(bL/2);
        let blocky = rowY - ((numRows-1)*bH);

        var rect = draw.rect(bL,bH);

        rect.stroke('black').fill('white');
        rect.center(blockx + xpos, blocky + ypos);
    }
}