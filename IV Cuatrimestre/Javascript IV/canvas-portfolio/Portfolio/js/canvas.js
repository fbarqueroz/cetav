// Var
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let shapes = [];
let nShapes = 50;
let timing = Date.now();

// Canvas size
canvas.width = 1930;
canvas.height = 1000;

// Colors
function randomColor () {
    let colors = ['#034078', '#1282A2'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Update
function update () {
    let now = Date.now(),
        time = now - timing;

    for (let i = shapes.length - 1; i >= 0; i--) {
        let pShapes = shapes[i];

        if (pShapes.y > canvas.height) {
            shapes.splice(i, 1);
            continue;
        }

        pShapes.y += pShapes.gravity * time;
        pShapes.rotation += pShapes.rotationSpeed * time;
    }


    while (shapes.length < nShapes) {
        shapes.push(new Confetti(Math.random() * canvas.width, -20));
    }

    timing = now;
    setTimeout(update, 1);
}

// Draw shapes
function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    shapes.forEach(function (particles) {
        ctx.save();
        ctx.fillStyle = particles.color;
        ctx.translate(particles.x + particles.size / 2, particles.y + particles.size / 2);
        ctx.rotate(particles.rotation);
        ctx.fillRect(-particles.size / 2, -particles.size / 2, particles.size, particles.size);
        ctx.restore();
    });

    requestAnimationFrame(draw);
}

class Confetti {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = (Math.random() * 0.5 + 0.75) * 15;
        this.gravity = (Math.random() * 0.5 + 0.75) * 0.1; // Set falling vel
        this.rotation = (Math.PI * 2) * Math.random();
        this.rotationSpeed = (Math.PI * 2) * (Math.random() - 0.5) * 0.0001; // Set spinning vel
        this.color = randomColor(); // Set random color
    }
}

// Function callback
update();
draw();



/*

    References

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
    https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    https://www.geeksforgeeks.org/p5-js-save-function/
    https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore

*/
