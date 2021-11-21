//renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var property = {
    isStatic: true 
  }
  ground = Bodies.rectangle (200, 390, 400, 20, property)
  World.add (world, ground) 
  
  var property2 = {
    restitution: 1
  }
 ball = Bodies.circle (40,100, 20,  property2)
World.add (world, ball) 


box = Bodies.rectangle (120,50,60,60, property2)
World.add (world, box)  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill ("red")
  rectMode(CENTER)
  rect (ground.position.x, ground.position.y, 400, 20)
  
  ellipseMode (RADIUS)
  ellipse(ball.position.x, ball.position.y, 20)

  rect (box.position.x, box.position.y, 60,60 )
}

