  var car,wall;
  var weight,speed;
  var Deformation
function setup() {
  createCanvas(1800,400);
  speed = random(40,90);
  weight =random (400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1000,200,60,height/2);
  car.velocityX = speed;
}

function draw() {
  background(0,0,0); 

  if(wall.x-car.x<(wall.width+car.width)/2 ){
    car.velocityX = 0;
    Deformation = 0.5*speed*weight*speed/22500;
    if(Deformation<100){
      car.shapeColor = "green";
    }
    if(Deformation>100&&Deformation<180){
      car.shapeColor ="yellow"
    }
    if(Deformation>180){
      car.shapeColor = "red";
    }
  }
  drawSprites();
}