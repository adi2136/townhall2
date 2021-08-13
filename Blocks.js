class Blocks{
    constructor(x,y,width,height){
        var options={
            
            restitution:1,
            friction:1,
            density:2
                    }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        
      
        if((this.body.speed)<4){
            rectMode(CENTER);
            fill("red")
            rect(this.body.position.x,this.body.position.y,this.width,this.height)
            }
            else{
                World.remove(world,this.body);
               
              }
    }
}