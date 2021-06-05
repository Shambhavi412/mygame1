const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "level1";

var play;
var HowToPlay;
var decider = true;

var eg;

var stone1, stone2, stone3, stone4, stone5, stone6, stone7, stone8, stone9, stone10, stone11, stone12, stone13, stone14 ;

var I;

var A1, A2, A3, A4;

var im;

var ima;

var player;

var spr, spr2;

function preload()
{

  I = loadImage("images/blue2.jpg");
  im = loadImage("images/kkkk.png");
  ima = loadImage("images/sil.jpg")
}


function setup() {
  createCanvas(displayWidth,displayHeight - 150);

  engine = Engine.create();

world = engine.world;

if(gameState === "level1")
{
  //rectMode(CORNER)
  stone1 = new Stone(250,400,140,140);
  
  //fill("pink");
  stone2 = new Stone(850,500,140,140);
fill(0);
  stone3 = new Stone(1450,300,140,140);

  stone4 = new Stone(2050,500,140,140);

  stone5 = new Stone(2750,500,140,140);

  stone6 = new Stone(3335,500,140,140);

  stone7 = new Stone(3950,500,140,140);

  stone8 = new Stone(4550,740,140,140);

  stone9 = new Stone(5150,980,140,140);

  stone10 = new Stone(5750,1220,140,140);

  stone11 = new Stone(6350,1220,140,140);

  stone12 = new Stone(6950,1220,140,140);

  stone13 = new Stone(7550,1220,140,140);

  stone14 = new Stone(8150,200,140,140);

  spr2 = createSprite(250,400);
  spr2.velocityX = 4;
  player = new Player();

  spr = Bodies.circle(100,10,20,{restitution : 0.01});
  World.add(world,spr);
  //
  
  }

}

function draw() {
  background(I);

  Engine.update(engine);

  //imageMode(CENTER);
  //image(im,250,450,220,250);

  //imageMode(CENTER);
  //image(im,250,610,220,250);
 
  //imageMode(CENTER);
  //image(ima,150,500,50,300);

  camera.position.x = spr2.x;
  camera.position.y = spr2.y;
  
  ellipse(spr.position.x,spr.position.y,20,20);
  //keyPressed();

  //player.postion.x = mouseX;
  //player.position.y = mouseY;

  DisplayingStones();
  console.log(player.body.position.y);
  

  drawSprites();

}
function keyPressed()
 {
  if(keyCode === 32)
  {
    Matter.Body.applyForce(player.body,{x : 0, y : 0},{x : 0.05, y: 0})
  }
  
 }
 

































/* 
//4000,4000
  //displayWidth,displayHeight
  //
  //eg =createSprite(400, 200, 50, 50);
 A1 = new Stone(250,480,140,140);
  A2 = new Stone(250,620,140,140);
  A3 = new Stone(250,760,140,140);*/
  //A1 = new Stone(250,480,140,140);


//creation
/*play = Bodies.rectangle(100,100,100,100,{isStatic : true});
World.add(world,play);

HowToPlay = Bodies.rectangle(100,300,100,100,{isStatic : true});
World.add(world,HowToPlay);*/

//form = new Form;


//before draw sprites
/*CreatingButtons();
  DestroyOrNot();
  ButtonsPressed();
  
  ChangeState();
//changeBackground()
//keyPressed();
changeBackground()

//rect(play.position.x,play.position.y,play.width,play.height);
  //rect(HowToPlay.position.x,HowToPlay.position.y,HowToPlay.width,HowToPlay.height)
  

/*if(gameState!=="Home")
  {
    }*/
 

/*function ChangeState()
{
  if(gameState === "Home" && keyDown("UP_ARROW"))
  {
    World.remove(world,play);
    World.remove(world,HowToPlay);
  
    gameState = "level1";
  }

  if(gameState === "Home" && keyDown("DOWN_ARROW"))
  {
    World.remove(world,play);
    World.remove(world,HowToPlay);
  
    gameState = "HowToPlay"
  }
}

function changeBackground()
{
  if(gameState === "level1")
  {
    background(0)
  }

  else if(gameState==="HowToPlay")
  {
    background("yellow")
  }
  else if(gameState === "Home"){
    background("pink");
  }
}

/*function keyPressed()
{
  if(keyCode(32))
  {
    textSize(20);
    text("hi",200,200)
  }
}*/
