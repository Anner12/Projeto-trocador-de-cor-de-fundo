var trexSprite, trex;

function preload() {
  trexSprite = loadImage("trex_collided.png");
}

function setup() {
  createCanvas(400,400);
  background(51);
  trex = createSprite(200,200,30,30);
  trex.addImage(trexSprite);
}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada

  if (keyIsDown(RIGHT_ARROW))
  {
    background("red");
  }
  
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

