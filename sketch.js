const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var GRound;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  GRound = new ground(400,390,800,20);
}

function draw() {
  background(255,255,255);  
  GRound.display();
  drawSprites();
}