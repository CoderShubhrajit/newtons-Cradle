const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof, thread1, thread2, thread3,thread4,thread5;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,50,700,15);
	bobObject1 = new Ball(260,450,50);
	bobObject2 = new Ball(330,450,50);
	bobObject3 = new Ball(400,450,50);
	bobObject4 = new Ball(470,450,50);
  bobObject5 = new Ball(540,450,50);
  thread1 = new Rope(bobObject1.body,roof.body,-105,0);
  thread2 = new Rope(bobObject2.body,roof.body,-53,0);
  thread3 = new Rope(bobObject3.body,roof.body,0,0);
  thread4 = new Rope(bobObject4.body,roof.body,53,0);
  thread5 = new Rope(bobObject5.body,roof.body,105,0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  thread1.display();
  thread2.display();
  thread3.display();
  thread4.display();
  thread5.display();

  //keyPressed();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -120, y: -120 });
	}
}