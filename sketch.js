function setup(){
    createCanvas(600,400);
    background(100,100,100);
}

function draw(){
    
    line(200,120,275,160);
    line(400,120,325,160);
    
    stroke(255,255,255);
    fill(255,0,0);
    rect(250,30,100,100);
    rect(275,130,50,80);
    
    strokeWeight(2);
    fill(0,0,255);
    stroke(0,0,0);
    line(300,75,300,90);
    ellipse(277,60,25,25);
    ellipse(323,60,25,25);
    line(277,110,323,110);


}

//draw mo 2 ellipses
//draw me 2 rectangles
//draw me 4 lines (1 with a positive slope, 1 with a negative slope)
//1 with a slope of 0, and 1 with a slope of undefined.