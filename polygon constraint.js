class Constraint{
    constructor(a,b){
       var options={
           bodyA: a,
           pointB: b,
           length: 70,
           stiffness: 0.2
       } 
       this.body=Matter.Constraint.create(options);
       World.add(world,this.body)
       
       this.s=b;
        
    }
    fly(){
        this.body.bodyA=null;
      }
    attach(ab){
        this.body.bodyA=ab
    }  
    display(){
       if(this.body.bodyA){
       var posa=this.body.bodyA.position;
       var posb=this.s;  

       line(posa.x,posa.y,posb.x,posb.y); 
       }
    }
}