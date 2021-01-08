class Polygon{
    constructor(x,y,w,h){
     
        var options={
           isStatic: false,
           restitution:0,
           friction:1,
           density:1.2,
       } 
       this.body=Bodies.rectangle(x,y,w,h,options);
       this.image=loadImage("polygon.png");
       this.w=w;
       this.h=h;
       World.add(world,this.body);
    }
    display(){
 
       imageMode(CENTER); 
       image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    }
}