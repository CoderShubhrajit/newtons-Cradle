class Ball
{
    constructor(x,y,r)
    {
        var properties = {
            'isStatic':false,
            'restitution':1.0,
            'density':0.7,
            'friction':0.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r-25,properties);
        World.add(world,this.body);
    }
    display()
    {
        push();
        fill("grey");
        //translate(this.body.position.x,this.body.position.y);
        /*strokeWeight(5);
        stroke("black");*/
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }
}