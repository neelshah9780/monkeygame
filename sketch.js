var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, ObstacleGroup;
var score;
var survivalTime=0;
var invisibleGround;


function preload(){
  
  
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(600,310);
  
score=0;
FoodGroup=new Group();
ObstacleGroup=new Group();  
  
monkey=createSprite(90,250,30,30);  
monkey.addAnimation("running",monkey_running);
monkey.scale=0.15;  
  
invisibleGround=createSprite(300,295,600,10);
invisibleGround.shapeColor="red";
}


function draw() {
background("lightblue");
  
  survivalTime = Math.round(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 30,30);  
  
  if(mousePressedOver(monkey))
   {
   monkey.velocityY=-6;
   }
  
  monkey.velocityY=monkey.velocityY+0.13;
  
  text("SCORE:"+score,500,30);
  
  Banana();
  Obstacles();
  
  textSize(10);
  text("IF YOU PRESS OVER MONKEY THEN ONLY IT WILL JUMP",180,30)
  textSize(10);
  text("IF MONKEY TOUCHES THE STONE SCORE WILL -1",190,50)
  
  monkey.collide(invisibleGround); 

  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach();
     score=score+1;
     } 
  
  if(monkey.isTouching(ObstacleGroup)){
     ObstacleGroup.destroyEach();
     score=score-1;
     }
  
  drawSprites(); 
}

function Banana() {
  var ran = Math.round(random(110,200));
  if(frameCount%150 === 0) {
  var banana = createSprite(600, ran, 10, 10);
  banana.addImage(bananaImage);
  banana.velocityX = -8;
  banana.scale = 0.1;
  FoodGroup.add(banana);
  }
}

function Obstacles() {
  if(frameCount%200 === 0) {
  var obstacle = createSprite(600,258,10,10);
  obstacle.velocityX = -7;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  ObstacleGroup.add(obstacle);
  }
}