var pelota;
function setup ()
{
    createCanvas(500,500);
    pelota=createSprite(250,250,10,10);
    pelota.shapeColor = "red";
}
function draw()
{
    background("white");
    
        if(keyDown("left"))
        {
            cambiopos(-1,0);
        }
        else if (keyDown("right"))
        {
            cambiopos(1,0);
        }
        else if (keyDown("up"))
        {
            cambiopos(0,-1);
        }
        else if (keyDown("down"))
        {
            cambiopos(0,+1);
        }
        drawSprites();
}
function cambiopos(x,y)
{
    pelota.x=pelota.x+x;
    pelota.y=pelota.y+y;
}
