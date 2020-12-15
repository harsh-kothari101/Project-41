const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var PLAY = 1;
var END = 0;
var gameState = PLAY;


var bijli1,bijli2,bijli3,bijli4;
var bijliGroup;
var particles = [];

function preload(){
    
    bijli1 = loadImage("images/thunderbolt/1.png");
    bijli2 = loadImage("images/thunderbolt/2.png");
    bijli3 = loadImage("images/thunderbolt/3.png");
    bijli4 = loadImage("images/thunderbolt/4.png");
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
   createCanvas(1800,1000);

    boy = new Boy(900,680);
       
    bijliGroup = new Group();

    Engine.run(engine); 
}

function draw(){
    Engine.update(engine);

    background(255,255,255);

    spawnObstacles();

    if(frameCount % 1 === 0){
        particle = new Drop(random(width/2-1300, width/2+1000), 2, 2);
        particles.push(particle);
      }

      for (var j = 0; j < particles.length; j++ ){
        particles[j].display();
      } 
    
      boy.display();
      
      drawSprites();
}   

function spawnObstacles() {
    if(frameCount % 60 === 0) {
       var bijli = createSprite(900,150);
    
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: bijli.addImage(bijli1);
                break;
        case 2: bijli.addImage(bijli2);
                break;
        case 3: bijli.addImage(bijli3);
                break;
        case 4: bijli.addImage(bijli4);
                break;
        default: break;
      }        
      bijli.scale = 0.5;
      bijli.lifetime = 5;

      bijliGroup.add(bijli)
      
     
    }
  }

