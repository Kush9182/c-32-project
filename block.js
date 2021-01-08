class Block{
    constructor(x,y,w,h){
       var options={         
           restitution:0.5,
           friction:1
       } 
       this.body=Bodies.rectangle(x,y,w,h,options);
       this.w=w;
       this.h=h;
       this.visibility=255;
       World.add(world,this.body);
    }
    display(){
        if(this.body.speed<3){ 
            rectMode(CENTER); 
            rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
    if(this.body.speed>3) {
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5; 
        if(this.visibility<0&&this.visibility>-2505){
            score=score+1
        }
        pop();
    }
    }
     
}