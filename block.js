class Block {
  constructor(x, y,width,height) {
    var options={
      restitution:0.8,
      friction:0.0,
      //density:0.04,
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
  } 
  display(){
    var pos=this.body.position
    var angle=this.body.angle
  push()
  translate(pos.x,pos.y);
  rotate(angle)
  rectMode(CENTER)
  strokeWeight(4);
  stroke("black")
  fill(2, 213, 237)
  rect(0,0,this.width,this.height)
  if(this.body.speed<1){
   // super.display();
  } else {
    World.remove(world,this.body)
    push();
    this.Visiblity=this.Visiblity-5
     tint(255,this.Visiblity)
     pop();
  }
  
  pop()
  }

  score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
      score++
    }
  }
  
};
