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
	update()
	{
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mul(0);
	}
	display(data, size)
	{
		data[this.pos.x * 4 + this.pos.y * size * 4] = 255;
		data[this.pos.x * 4 + this.pos.y * size * 4 + 1] = 255;
		data[this.pos.x * 4 + this.pos.y * size * 4 + 2] = 255;
	}
}
