
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ball_options;
var ground,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

	ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(100,120,15,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,620,width,20);
	leftSide = new Ground(750,550,20,160);
	rightSide = new Ground(1000,550,20,160);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  
  fill(255);
  ellipse(ball.position.x,ball.position.y,15);

  ground.display();
  leftSide.display();
  rightSide.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0})
	}
}



