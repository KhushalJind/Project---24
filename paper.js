class Paper {
    constructor(x,y,radius){
        var options = {
            restitution:0.5,
            friction:1,
            density:1
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius = radius
    }

    display(){
        ellipseMode(RADIUS)
        fill("gray")
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}