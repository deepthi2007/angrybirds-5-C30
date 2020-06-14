class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibilty = 255;
  }
  display(){
    if(this.body.speed>10){
    World.remove(world,this.body);
    push();
    this.visibilty=this.visibilty-5;
    tint(255,this.visibilty);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
    }else{
      super.display();
    }
  }

};