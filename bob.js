class Bob{
    constructor(x,y){
        var options ={
            isStatic : false,
            restitution : 0.4,
            fricion : 0.5,
            density : 1.2
        }
        this.radius = 40
        this.body = Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)

    }
    display(){
        push()
        var pos = this.body.position
        translate(pos.x,pos.y)
        fill("pink")
        rectMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        pop()
        
    }
}