class crope{
	constructor(body1, body2, pointA, pointB)
	{

		this.offsetX = pointA;
		this.offsetY = pointB;
		

		var options ={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:pointA, y:pointB}
		}
		
		this.rope = Matter.Constraint.create({
			bodyA:body1,
			pointA:{x:0, y:0},
			bodyB:body2,
			pointB:{x:pointA, y:pointB},
			length:100,
			stiffness:0.1
		});
		
		World.add(world, this.rope);

	}


    display ()
	{
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2);
		line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
	}

}
