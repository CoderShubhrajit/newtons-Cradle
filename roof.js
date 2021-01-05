class Roof
{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }
    display()
    {
        fill("blue");
        strokeWeight(4);
        stroke("black");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}