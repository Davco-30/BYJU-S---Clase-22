class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonB = loadImage("./assets/cannonBase.png")
    this.cannon = loadImage("./assets/canon.png")
  }

  display(){
    //Crear la parte superior del cañón
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    //rectMode(CENTER);
    imageMode(CENTER);
    image(this.cannon,0,0,this.width,this.height);
    //rect(this.x,this.y,this.width,this.height);
    pop();
    //Crear la parte inferior del cañón
    image(this.cannonB,70,20,200,200);
    noFill();
  }

}
