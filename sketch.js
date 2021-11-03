   var arman,armanImage;
   var gamedev,gamedevImage;
   var background1,background1Image;
   var team,teamImage;
   var fireworks,fireworksImage;
   var about,aboutImage;
   var ar,arImage;

function preload(){

  arImage = loadImage("un.png");

  aboutImage = loadImage("untitled (2).png")

  fireworksImage = loadImage("unnamed.png");
  
  teamImage = loadImage("gamedev.png");

  background1Image = loadImage("diwali.jpg");
 
  armanImage = loadImage("channels4_profile.jpg");
 
  gamedevImage = loadImage("u.png");
}



function setup() {

  createCanvas(1800, 800);
   
   background1 = createSprite(710,300);
   background1.addImage(background1Image);
 
   arman = createSprite(700,400);
   arman.addImage(armanImage);
   arman.scale=0.5; 
 
  
  gamedev = createSprite(700,100);
  gamedev.addImage(gamedevImage);
  
  team = createSprite(300,400);
  team.addImage(teamImage);
  
  fireworks = createSprite(1100,400);
  fireworks.addImage(fireworksImage);

  about = createSprite(300,100);
  about.addImage(aboutImage);
  about.scale=0.3;

  ar = createSprite(1100,100);
  ar.addImage(arImage);
  ar.scale=0.3;
}

function draw() {
 background(192);
    






 
  
  drawSprites();

}












