var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,30,30)
}

function draw() 
{
  background("black");
  if(keyDown('W')){
    ball.y-=2;
  }
  if(keyDown('s')){
    ball.y+=2
  } 
  if(keyDown('a')){
    ball.x-=2;
  }
  if(keyDown('d')){
    ball.x+=2
  }
drawSprites();
}

