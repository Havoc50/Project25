const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1;
var paper, ground;
var force = 0;
var engine, world;

function setup(){

	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 630, 70);
	ground = new Ground(width / 2, 670, width, 20);
	b1 = new Dustbin(1200, 650);

	Engine.run(engine);
  
}

function draw(){

	rectMode(CENTER);
	background(255);
	
	paper.display();
	b1.display();	
	ground.display();

	keyPressed();

	drawSprites();
 
}

function keyPressed(){ 

	if(force === 0){

		if(keyCode === UP_ARROW){ 
			Matter.Body.applyForce(paper.body,paper.body.position,{x:150, y:-150}); 
			force = 1;
		} 
		
	}

} 

