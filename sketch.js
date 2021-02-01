
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var platform;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,500,20);
	bob2 = new Bob(240,500,20);
	bob3 = new Bob(280,500,20);
	bob4 = new Bob(320,500,20);
	bob5 = new Bob(360,500,20);

	platform = new Roof(278,200,300,30);

	rope1 = new Rope(bob1.body, {x : 200, y : 200});
	rope2 = new Rope(bob2.body, {x : 240, y : 200});
	rope3 = new Rope(bob3.body, {x : 280, y : 200});
	rope4 = new Rope(bob4.body, {x : 320, y : 200});
	rope5 = new Rope(bob5.body, {x : 360, y : 200});

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(190);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  platform.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:-1000})
	}
}


