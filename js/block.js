class Block {

constructor(x,y,width,height)
{

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    var options = {
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);

    this.image = loadImage('images/ghost.png');
    //this.image2 = loadImage('images/white.png');


}


display()
{

   var position = this.body.position;

    push();
    translate(position.x,position.y);
    rotate(this.body.angle);
    fill(255)
    rectMode(CENTER);
    rect(0,0,this.width,this.height);

    //image(this.image2,0,0,this.width+ 20,this.height + 20);
    //image()
    pop();
}



















}