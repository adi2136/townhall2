class Ball{
    constructor(x,y,radius){
       
        var options={
         
            restitution:1,
            friction:0,
            density:2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius=radius;
        World.add(world, this.body);
      
    }
    display(){
        
        ellipseMode(CENTER);
        fill("red")
        ellipse(this.body.position.x,this.body.position.y,20)
        
    }
}