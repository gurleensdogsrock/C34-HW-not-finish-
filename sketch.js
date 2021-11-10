
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites=Matter.Composites;
const Composite=Matter.Composite;
const Constraint=Matter.Constraint;


var cannonball;
var building;
var building1,building2,building3,building4;
var engine;
var world;
var rope;
var bg_Img;
var canonConnect;

function preload(){
  bg_Img=loadImage('bg.jpg');

  building2=loadImage("building1.jpg")
  canon=loadImage('canon.png');

}

function setup() {
  createCanvas(400,400);

  rope =new Rope(7,{x:120,y:120});
  canon=Bodies.circle(300,300,20);
  Matter.Composites.add(rope.body,canon);
canonConnect=new Link(rope,canon);
  engine = Engine.create();
  world = engine.world;

  building=createSprite(100,height-60,100,100);
  building.scale=0.2;
  building.addImage(building2)
}


function draw() 
{
  //background(51);
  image(bg_Img,0,0,width,height);
  push();
  imageMode(CENTER);
  pop();
rope.show();
  Engine.update(engine);
  drawSprites();
}

