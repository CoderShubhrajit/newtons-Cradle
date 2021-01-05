class Rope
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var properties = {
            bodyA: bodyA, 
            bodyB: bodyB,
            stiffness: 0.4
        }
        this.rope = Constraint.create(properties);
        World.add(world,this.rope);
    }
    display()
    {
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        strokeWeight(5);
        fill("black");
        line(posA.x,posA.y,posB.x+this.offsetX,posB.y);
    }
}