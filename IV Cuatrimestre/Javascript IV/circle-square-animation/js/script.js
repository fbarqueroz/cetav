//
// Canvas animation - 🎈 Fabian Barquero 🎈
//

// Square fill
/*-----------------------------
ctx.fillStyle = 'green';
ctx.fillRect(75, 75, 150, 150);
-----------------------------*/

////////////////////////////////////////////////////////////////

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Animation position circle

class circle {
  constructor(x, y, vx, vy, r) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.r = r;
  }
}

const circleInstance = new circle(80, 110, 20, 10, 12);

x = 80;
y = 110;
vx = 20;
vy = 10;
r = 12;

function animationShapes() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if (x > canvas.width - r || x < r) {
    vx =- vx;
  }
  if (y > canvas.height - r || y < r) {
    vy =- vy;
  }

  x += vx;
  y += vy;

  // Circle

  //ctx.beginPath(); // Dibuja una linea en el canvas
  ctx.arc(x,y,r,0,2*Math.PI);
  ctx.fillStyle="Pink";
  ctx.fill();
  ctx.closePath(); // Cerrar figura



  window.requestAnimationFrame(animationShapes);

}

animationShapes();