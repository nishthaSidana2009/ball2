class Walker {
  constructor(x,y){
    this.pos = createVector(x,y);
    //this.vel = createVector(1,-1);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }
  
  update() {
    
    this.pos.add(this.vel)
  }
  show() {
    stroke("blue");
    strokeWeight(3);
    fill("pink")
    ellipse(this.pos.x, this.pos.y,60)
  }
}