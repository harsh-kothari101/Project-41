class Boy{
    constructor(x,y,w,h){
        
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.image = loadImage("images/Walking Frame/walking_1.png");    
        this.w=w;
        this.h=h;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.image,pos.x,pos.y,this.w,this.h);
    }
};