const Orb = function (centerX, centerY, radius, color) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
};

Orb.randomOrb = function (maxX, maxY, numOrbs) {
    return new Orb(
        maxX * Math.random(),
        maxY * Math.random(),
        Orb.radius(maxX, maxY, numOrbs),
        'white'
    );
};

Orb.prototype.movePattern = function (maxX, maxY) {
    let dx = (Math.random() * 2) - 1;
    let dy = (Math.random() * 2) - 1;

    this.centerX = Math.abs((this.centerX + (dx * this.radius * 0.1)) % maxX);
    this.centerY = Math.abs((this.centerY + (dy * this.radius) * 0.1) % maxY);
};

Orb.radius = function (maxX, maxY, numOrbs) {
    let targetOrbArea = (maxX * maxY) / numOrbs;
    let targetRadius = Math.sqrt(targetOrbArea / Math.PI);
    return 2 * targetRadius;
};

Orb.prototype.render = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.centerX,
        this.centerY,
        this.radius,
        0,
        2 * Math.PI,
        false
    );

    ctx.fill();
};

module.exports = Orb;