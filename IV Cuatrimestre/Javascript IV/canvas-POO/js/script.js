//
// POO Animation
//

class circle {
    constructor(x, y, vx, vy, r) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
    }

    feactCircle() {
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.fillStyle="Pink";
        ctx.fill();
        ctx.closePath(); // Cerrar figura
        }

    animation () {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        if (x > canvas.width - r || x < r) {
            vx =- vx;
        }
        if (y > canvas.height - r || y < r) {
            vy =- vy;
        }
        x += vx;
        y += vy;
    }
}

const circleInstance = new circle(80, 110, 20, 10, 12);