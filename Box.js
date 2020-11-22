class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.width = width;
    this.height = height;
  }
   display(){
    var pos =this.body.position;
    super.display();
     push();
     rectMode(CENTER);
     rect(pos.x, pos.y, this.width, this.height);
     pop();

   }
};
