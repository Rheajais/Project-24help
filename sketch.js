
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;
var boundary1, boundary2, boundary3;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(700,height,1400,20,{isStatic:true});
	paper=new Paper(200,220,40);

	boundary1=createSprite(1100,630,20,120, {isStatic:true});
	boundary1.shapeColor="red";

	boundary2=createSprite(1028,680,120,20, {isStatic:true});
	boundary2.shapeColor="red";

	boundary3=createSprite(956,630,20,120,{isStatic:true});
	boundary3.shapeColor="red";

	var option1={
		restitution:0.3,
		friction:0.5,
		density:1.2
	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();

  ground.display();
  paper.display();
  boundary2.display();
  boundary1.display();
  boundary3.display();
  
  drawSprites();

}

function keyPressed(){
	if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:27,y:-10});
	restitution:0.5;
	}

	else if (keyCode === LEFT_ARROW) {
  
		boundary3.x=boundary3.x-20;
		boundary1.x=boundary1.x-20;
		boundary2.x=boundary2.x-20;
	    translation={x:-20,y:0}
	  Matter.Body.translate(boundary3,translation)
      Matter.Body.translate(boundary1,translation)
	  Matter.Body.translate(boundary2,translation)
	  
  
	} else if (keyCode === RIGHT_ARROW) {
		boundary3.x=boundary3.x+20;  
		boundary1.x=boundary1.x+20;
		boundary2.x=boundary2.x+20;
		translation={x:+20,y:0}
	  Matter.Body.translate(boundary3,translation) 
	  Matter.Body.translate(boundary1,translation)
	  Matter.Body.translate(boundary2,translation)
	}

}



