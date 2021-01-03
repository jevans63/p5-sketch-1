function setup()
{
    createCanvas(600, 600);
    background(0);
    frameRate(100);
    let r = random(100);
    strokeWeight(r*0.005);
}
  
function draw() 
{
    for(let i = 0; i < 1000; i++)
    {
        line(i,i+i,i*i,i,i,i*i);
        stroke(i*i,i,0);
    }
}

function mousePressed() 
{
    clear();
    background(0);
  }