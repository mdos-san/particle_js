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
}

class Particle_2d
{
	constructor(pos, vel, acc) {
		this.pos = pos;
		this.vel = vel;
		this.acc = acc;
	}
	apply_force(f)
	{
		this.acc.add(f);
	}
}
