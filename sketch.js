var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  fixedrect=createSprite(150,200,50,50);
  fixedrect.shapecolor="red";
  movingrect.shapecolor="green"
  movingrect.debug=true;
  fixedrect.debug=true
  movingrect.velocityX=-5;
  fixedrect.velocityX=5;
}

function draw() {
  background(255,255,255); 
 
      bounceoff(movingrect,fixedrect);
  drawSprites();
}
