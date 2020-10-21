var bullet, wall, thickness;
var speed, weight;



function setup() {
  createCanvas(1200,400);
 thickness=random(23,80) 
speed=random(223,321)
weight=random(30,52)
bullet = createSprite(50,200,50,50)
bullet.shapeColor='blue'
wall = createSprite(1000,200,thickness, height/2)
wall.shapeColor='black'
  bullet.velocityX=speed
 
}
function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0
  

  
  var damage=.5 * weight *speed *speed/(thickness * thickness * thickness)
  if(damage>10){
    wall.shapeColor= color(255,0,0)
  }

if(damage<10){
  wall.shapeColor= color(0,255,0)
}

  }
  drawSprites();
}


  

