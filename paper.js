class Paper{
    constructor(x, y,r) {
      var options = {
        'density':0.3,
        'friction': 1.5,
        'restitution':0.5
      };
     

      this.body = Bodies.circle(x, y,r, options);
      this.r=r;
     
      World.add(world, this.body);
      this.image = loadImage("paper.png");
    };

    

    
    display(){
      var pos = this.body.position;
   
  
  
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle)
      ellipseMode(RADIUS)
      ellipse(0,0,this.r)
      imageMode(CENTER);
      image(this.image, 0, 0,this.r);
     pop();
    };
  

  }