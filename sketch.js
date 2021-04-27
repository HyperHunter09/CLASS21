var fixedRect, movingRect,GO_one,GO_THREE,GO_FOUR,GO_TWO;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  GO_one = createSprite(100,100,50,50);
  GO_one.shapeColor="green";
  GO_TWO=createSprite(200,100,50,50);
  GO_TWO.shapeColor="green";
  GO_THREE = createSprite(300,100,50,50);
  GO_THREE.shapeColor="green";
  GO_FOUR = createSprite(400,100,50,50);
  GO_FOUR.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
 if(isTouching(movingRect,GO_one)){
   movingRect.shapeColor="red";
   GO_one.shapeColor="red";
 }
 else{
  movingRect.shapeColor = "blue";
  GO_one.shapeColor = "blue";
 }

  drawSprites();
}
