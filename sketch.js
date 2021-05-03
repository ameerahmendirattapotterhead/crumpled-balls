
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paper;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper=new paper(1000,650)
	paper.addImage("paper.png");
	paper.scale=5
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
	function keyPressed(){
		if (keycode === UP_ARROW){
			Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145

			})
		
		}
	}
  groundObject.display();
  dustbinObj.display();
  paper.display();
}

