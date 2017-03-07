class Vector_2d
{
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	add(v)
	{
		this.x += v.x;
		this.y += v.y;
	}
	mul(nb)
	{
		this.x *= nb;
		this.y *= nb;
	}
	norm()
	{
		var d;

		d = Math.sqrt(this.x * this.x + this.y * this.y);
		this.x /= d;
		this.y /= d;
	}
}

class Particle_2d
{
	constructor(pos, vel, acc) {
		this.pos = pos;
		this.vel = vel;
		this.acc = acc;
		this.color = "rgb(" +
		   parseInt(Math.random() * 256) + ", " +
		   parseInt(Math.random() * 256) + ", " +
		   parseInt(Math.random() * 256) + ")"
	}
	apply_force(f)
	{
		this.acc.add(f);
	}
	update()
	{
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mul(0);
	}
	display(ctx)
	{
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(this.pos.x, this.pos.y, 3, 3);
	}
}
