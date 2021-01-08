
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var polygon;
var b1;
var score=0;

function preload(){
   api()
   polygonIMG=loadImage("polygon.png");
   bgIMG=loadImage("bg.png");
   bg2IMG=loadImage("bg2.jpg")
   
}

function setup() {
	createCanvas(1000, 500);
  
	engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  
  ba=createSprite(width/2,height/2,width,height);
  ba.shapeColor="white";
  

	ground = new Ground(700,375,450,20);

	polygon = new Polygon(135,305,100,100);

	b1 = new Block(520,335,60,60);
	b2 = new Block(580,335,60,60);
	b3 = new Block(640,335,60,60);
	b4 = new Block(700,335,60,60);
	b5 = new Block(760,335,60,60);
	b6 = new Block(820,335,60,60);
	b7 = new Block(880,335,60,60);
	b8 = new Block(580,275,60,60);
	b9 = new Block(640,275,60,60);
  b10 = new Block(700,275,60,60);
	b11 = new Block(760,275,60,60);
	b12 = new Block(820,275,60,60);
	b13 = new Block(640,215,60,60);
	b14 = new Block(700,215,60,60);
	b15 = new Block(760,215,60,60);
	b16 = new Block(700,155,60,60);

	c = new Constraint(polygon.body,{x: 185, y: 305});
	

   
}


function draw() {
  background("grey");
  Engine.update(engine);
  drawSprites();

  ground.display();

  polygon.display();
  
  fill("red")
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("orange")
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("yellow")
  b13.display();
  b14.display();
  b15.display();
  fill("green")
  b16.display();

  c.display();

 
  fill("red");
  textSize(20);
  text("Press 'spacebar' to shoot again",10,30);
  text("score "+score,100,100);

  if(score===8000){
    World.remove(world,c.body);
    World.remove(world,polygon.body);
    ba.destroy();
    World.remove(world,ground.body);
    textSize(30);
    text("YAY!! You did it!!",width/2-150,height/2)
  }
 
}



function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x: mouseX,y:mouseY});
}    


function mouseReleased(){
    c.fly();
}


function keyPressed(){
	if(keyCode===32){
	Matter.Body.setPosition(polygon.body,{x:135,y:305})
	c.attach(polygon.body)}

}


async function api(){
  var helper=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var type=await helper.json();
  var dateTime=type.datetime;
  console.log(dateTime);
  var slicer=dateTime.slice(11,13);
  console.log(slicer);
  if(slicer<16&&slicer>06){
    ba.addImage(bgIMG); 
    ba.scale=1;
  }
  else{
    ba.addImage(bg2IMG);
    ba.scale=2.3}
} 