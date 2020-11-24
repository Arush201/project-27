
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1000);

  bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,800,50)
	bob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY)
  rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0)
  
  bob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY)
  rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0)
  
	bob3 = new Bob(startBobPositionX,startBobPositionY)
  rope3 = new Rope(bob3.body,roof.body,0,0)
  
	bob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY)
  rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0)
  
	bob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY)
  rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0)
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  roof.display()
  bob1.display()
  rope1.display()
  bob2.display()
  rope2.display()
  bob3.display()
  rope3.display()
  bob4.display()
  rope4.display()
  bob5.display()
  rope5.display()
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}
    


