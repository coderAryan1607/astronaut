var bg, sleep,brush, gym, eat, drink,move;
var astronaut, bkGround;
var edges;




function preload(){
bg = loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym11.png","images/gym12.png");
eat = loadAnimation("images/eat1.png","images/eat2.png")
drink = loadAnimation("images/drink1.png","images/drink2.png","images/bath1.png","images/bath2.png");
move = loadAnimation("./images/move.png","./images/move1.png");






}
function setup() {
  createCanvas(400, 400);
 
astronaut = createSprite(300,320);
astronaut.addAnimation("sleeping", sleep);
astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  edges = createEdgeSprites();


  astronaut.bounceOff(edges);



  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush)
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym)
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat)
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("space")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");    
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("drinking", drink)
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  drawSprites();
}