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
		this.i = 0;
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
	display(img)
	{
		if (0 < this.pos.x && this.pos.x < 1000 && 0 < this.pos.y && this.pos.y < 1000 )
		putPixel(img, parseInt(this.pos.x), parseInt(this.pos.y), 255, 0, 0);
	}
}

function putPixel(data, x, y, r, g, b)
{
	this.i = (x + y * 1000) * 4;
	data[this.i + 0] = 0;
	data[this.i + 1] = 255;
	data[this.i + 2] = 0;
	data[this.i + 3] = 255;
}

function imgClear(imageData)
{
	for (var i = 0; i < imageData.data.length; i += 4)
	{
		imageData.data[i + 0] = 0;
		imageData.data[i + 1] = 0;
		imageData.data[i + 2] = 0;
		imageData.data[i + 3] = 255;
	}

}
