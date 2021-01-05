class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.4,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       
        this.image = loadImage("Images/paper.png");
        
   }
   display(){
    fill("blue");
    


    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    

    
   }
}
