document.addEventListener("DOMContentLoaded", function(){

});


const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

const h = canvas.height;
const w = canvas.width;

for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
        ctx.fillStyle = `rgb(
            ${Math.floor(0.51 * i)},
            ${Math.floor(0.51 * j)},
            ${Math.floor((i + j) / 0.255)}`;
        ctx.fillRect(j, i, 1, 1);
    }
}

ctx.beginPath();
//void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
ctx.arc(w / 2, h / 2, 100, 0, Math.PI * 2);
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx.stroke();

const grd = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, 100);
grd.addColorStop(0, `rgb(17, 240, 225)`);
grd.addColorStop(0.22, `rgb(98, 237, 38)`);
grd.addColorStop(0.5, `rgb(196, 23, 227)`);
grd.addColorStop(0.77, `rgb(245, 140, 34)`);
grd.addColorStop(1, `rgb(52, 34, 245)`);
ctx.fillStyle = grd;
ctx.fill();



