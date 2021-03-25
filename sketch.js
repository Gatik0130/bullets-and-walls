var speed,thickness,wall,bullet,weight



function setup() {
  createCanvas(1200,400);
  thickness=random(28,83)
  
  wall=createSprite(1100, 200,thickness , 200);
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(20,200,20,20)
  bullet.velocityX=speed

}

function draw() {
  background(255,255,255);  
  

  if (hasCollided(bullet,wall))
  { 
    bullet.velocityX=0;
   var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  if (damage>10)
  {
    wall.shapeColor=color(225,0,0) 
   }
  

   if(damage<10)
   {
     wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
  


function hasCollided(Lbullet,Lwall)
{
bulletRightEdge=Lbullet.x +Lbullet.width;
wallLeftEdge=Lwall.x;
if (bulletRightEdge>=wallLeftEdge)
   {
  return true
   }
 return false;
  }

