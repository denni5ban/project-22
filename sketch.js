const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(250,300,10);
  	World.add(world,bob1);
	
	bob2 = Bodies.circle(270,300,10);
  	World.add(world,bob2);

	bob3 = Bodies.circle(290,300,10);
  	World.add(world,bob3);

	bob4 = Bodies.circle(310,300,10);
  	World.add(world,bob4);

	bob5 = Bodies.circle(330,300,10);
  	World.add(world,bob5);

	rope1 = new crope (bob1, roof, -80, 0);
	World.add(world, rope1);

	rope2 = new crope (bob2, roof, -60, 0);
	World.add(world, rope2);

	rope3 = new crope (bob3, roof, -40, 0);
	World.add(world, rope3);

	rope4 = new crope (bob4, roof, -20, 0);
	World.add(world, rope4);

	rope5 = new crope (bob5, roof, 0, 0);
	World.add(world, rope5);

	Engine.run(engine);
	

}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  ellipse(bob1.position.x, bob1.position.y, 10);
  ellipse(bob2.position.x, bob2.position.y, 10);
  ellipse(bob3.position.x, bob3.position.y, 10);
  ellipse(bob4.position.x, bob4.position.y, 10);
  ellipse(bob5.position.x, bob5.position.y, 10);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
	if (keyCode==UP_ARROW) {
		Matter.Body.applyForce(bob1, {x:0, y:0}, {x:-0.01, y:0});
	}
}
