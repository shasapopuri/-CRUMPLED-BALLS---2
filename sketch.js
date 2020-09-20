
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paperImg,dustbinImg,dustbin;

function preload()
{

dustbinImg=loadImage("dustbin.png");
paperImg=loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	//Create the Bodies Here.
	paperSprite=createSprite(100,500,30,30);
	paperSprite.shapeColor=color("WHITE");
	paperSprite.addImage(paperImg);
	paperSprite.scale=0.3;
	

	dustbin=createSprite(620,590,10,10);
	dustbin.addImage(dustbinImg);
	dustbin.scale=0.5;

	wall1=createSprite(560,620,20,100);
	wall1.shapeColor=color("HOTPINK");
	wall1.visible=false;

    wall2=createSprite(670,620,20,100);
	wall2.shapeColor=color("HOTPINK");
	wall2.visible=false;

    wall3=createSprite(610,660,150,20);
	wall3.shapeColor=color("HOTPINK");
	wall3.visible=false;

	ground=createSprite(400,680,800,20);
	ground.shapeColor=color("yellow")

	engine = Engine.create();
	world = engine.world;

	var paper_options={
		isStatic:true,
		restitution:0.3,
		friction:0.5,
		density:1.2
	};

	paper = Bodies.circle(100,650,10,paper_options);
	
	World.add(world,paper);

	Engine.run(engine);
  
}


function draw() {
background(255);

if(paperSprite.isTouching(wall3)){
	Matter.Body.setStatic(paper, true);
}

paperSprite.x=paper.position.x;
paperSprite.y=paper.position.y;
ellipseMode(RADIUS);

ground.display();
dustbin.display();
paperSprite.display();

drawSprites();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
	Matter.Body.setStatic(paper, false);
	Matter.Body.applyForce(paper,{x:paper.position.x,y:paper.position.y},{x:14,y:-14});
	}
	
	}


