var quadrado

function setup() {
  createCanvas(800,600);
  quadrado = createSprite (200,200,50,50)
}

function draw() 
{
  background(30);

  if (keyDown("up")){
    quadrado.y = quadrado.y - 3
  }

  if (keyDown("down")){
    quadrado.y = quadrado.y + 3
  }

  if (keyDown("left")){
    quadrado.x = quadrado.x - 3
  }

  if (keyDown("right")){
    quadrado.x = quadrado.x + 3
  }

  drawSprites()
}




