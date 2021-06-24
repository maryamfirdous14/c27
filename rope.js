class rope{
	constructor(body1,pointB)
	{
		
		var options={
			bodyA:body1,
			pointB:pointB,
			
		}
		//console.log(options);
		this.pointB=pointB
		this.rope=Constraint.create(options)
	
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.pointB;

		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x,pointB.y)

		
	}

}