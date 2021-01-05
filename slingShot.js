class RubberBand
{
    constructor(bodyA,pointB)
    {
        var properties = {
            bodyA: bodyA.body, pointB: pointB, stiffness: 0.4, length: 15
        }
        this.band = Constraint.create(properties);
        this.pointB = pointB;
        this.bodyA = bodyA;
        World.add(world,this.band);
    }
    display()
    {
        strokeWeight(6);
        line(this.band.bodyA.position.x, this.band.bodyA.position.y, this.pointB.x, this.pointB.y);
        
    }
}