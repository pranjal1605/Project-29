const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var slingshot;
var polygon;

function setup() {
  createCanvas(1200,1000);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(330,175,30,40);
  box2 = new Box(380,175,30,40);
  box3 = new Box(430,175,30,40);
  box4 = new Box(480,175,30,40);
  box5 = new Box(450,125,30,40);
  box6 = new Box(400,125,30,40);
  box7 = new Box(350,125,30,40);
  box8 = new Box(400,75,30,40);
  ground = new Ground(600,700,250,10);
  polygon = new Polygon(300,500);

 slingshot = new SlingShot(polygon.body,{x:300,y:500})
}

function draw() {
  background("white");  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  polygon.display();
  ground.display();
  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  slingshot.fly(bodyA);
}
