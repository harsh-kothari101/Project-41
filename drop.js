class Drop{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.4            
        }
        this.r=r
        this.body = Bodies.circle(x,y,r,options);       
        this.color = color("darkblue");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);      
        ellipse(0,0,this.r*2,this.r*2);
        pop();
    }

}