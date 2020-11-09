class Box {
    constructor(x, y, width, height){
     // super(x,y,width,height);
      //this.image = loadImage("sprites/wood1.png");
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    }
    display(){
      //var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
     // rotate(angle);
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
      rectMode(CENTER);
      rectangle(this.x,this.y,this.width,this.height);
      pop();
    }
  
  };