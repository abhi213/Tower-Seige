const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11,
block12, block13, block14, block15, block16, block17, block18, block19, block20, block21,
 block22, block23, block24, block25;
var polygon, slingshot;
var score1 = 0;
var bgcolor = 255;

function preload() {
  polygonImage = loadImage("polygon.png");
  getBackground();
}

function setup() {
  createCanvas(1200, 750);
  engine = Engine.create();
  world = engine.world;
 
   var width = 30;
   var height = 40;
   var stand1X = 700;
   var stand1Y = 700;
   var stand2X = 970;
   var stand2Y = 400;
   
  stand1 = new Ground(stand1X, stand1Y+30, 350, 20);
  stand2 = new Ground(stand2X, stand2Y+30, 250, 20);

  block1 = new Box(stand2X-width*2, stand2Y, width, height);
  block2 = new Box(stand2X-width, stand2Y, width, height);
  block3 = new Box(stand2X, stand2Y, width, height);
  block4 = new Box(stand2X+width, stand2Y, width, height);
  block5 = new Box(stand2X+width*2, stand2Y, width, height);
  block6 = new Box(stand2X-width, stand2Y-height, width, height);
  block7 = new Box(stand2X, stand2Y-height, width, height);
  block8 = new Box(stand2X+width, stand2Y-height, width, height);
  block9 = new Box(stand2X, stand2Y-height*2, width, height);

  block10 = new Box(stand1X-width*3, stand1Y, width, height);
  block11 = new Box(stand1X-width*2, stand1Y, width, height);
  block12 = new Box(stand1X-width, stand1Y, width, height);
  block13 = new Box(stand1X, stand1Y, width, height);
  block14 = new Box(stand1X+width, stand1Y, width, height);
  block15 = new Box(stand1X+width*2, stand1Y, width, height);
  block16 = new Box(stand1X+width*3, stand1Y, width, height);
  block17 = new Box(stand1X-width*2, stand1Y-height, width, height);
  block18 = new Box(stand1X-width, stand1Y-height, width, height);
  block19 = new Box(stand1X, stand1Y-height, width, height);
  block20 = new Box(stand1X+width, stand1Y-height, width, height);
  block21 = new Box(stand1X+width*2, stand1Y-height, width, height);
  block22 = new Box(stand1X-width, stand1Y-height*2, width, height);
  block23 = new Box(stand1X, stand1Y-height*2, width, height);
  block24 = new Box(stand1X+width, stand1Y-height*2, width, height);
  block25 = new Box(stand1X, stand1Y-height*3, width, height);

  polygon = Bodies.circle(100, 500, 20);
  World.add(world, polygon);

  slingshot = new SlingShot(polygon, {x:200,y:500});
  textSize(50);
  Engine.run(engine);
}
async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Pacific/Auckland");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime
  var hour = dateTime.slice(11, 13);
  if(hour >= 06 && hour <= 17){
    bgcolor = 255;
  }else{
    bgcolor = 0;
  }  
}

function draw() {
  background(bgcolor);
    
  stand1.display();
  stand2.display();

  imageMode(CENTER);
  image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);

  fill("darkturquoise");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("greenyellow");
  block6.display();
  block7.display();
  block8.display();
  fill("pink");
  block9.display();
  fill("lightsteelblue");
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  fill("orchid");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("mediumseagreen");
  block22.display();
  block23.display();
  block24.display();
  fill("darkorange");
  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

  fill("yellow");
  text("SCORE:" + score1, 750, 40);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}
