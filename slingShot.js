class SlingShot {
    constructor(object, point) {
        var options = {
            length: 10,
            bodyA: object,
            pointB: point,
            stifness: 0.04
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);

    }
    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            stroke("turquoise");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }

    }
    fly() {
        this.sling.bodyA = null;
    }
}
