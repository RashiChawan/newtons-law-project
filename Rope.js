class Rope{
    constructor(bodyA, pointB){
        
        var options = {
            bodyA: bodyA,
           
            pointB: pointB,
            stiffness: 0.04,
            length: 40
        }
        this.pointB=pointB;
        this.R = Constraint.create(options);
        World.add(world, this.R);
    }
    

    display(){
        var pointA = this.R.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

}