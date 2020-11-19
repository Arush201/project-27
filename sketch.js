
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,250,600,100)
	bob1 = new Bob(400,500)
	rope1 = new Rope(bob1.body,roof.body,bob1.radius*8,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  roof.display()
  bob1.display()
  rope1.display()
  drawSprites();
 
}



