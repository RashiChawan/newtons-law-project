class Bob{
    constructor(x, y, radius){
        var options={
            isStatic : true,
            restitution : 0.5,
            friction : 0.5,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.radius=radius;

        this.body=Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world,this.body);
      }
      display(){
          var bobpos = this.body.position;
          fill("pink");
          ellipseMode(RADIUS);
          circle(bobpos.x, bobpos.y, this.radius);
      }
};