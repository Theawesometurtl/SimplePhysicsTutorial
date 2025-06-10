let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let interval = setInterval(() => main(), 60)

class Circle {
    constructor(radius, position) {
        this.radius = radius
        this.position = position
        this.velocity = [0,0]
        this.acceleration = [0,0]
    }
    draw(colour) {
        ctx.fillStyle = colour
        ctx.beginPath()
        ctx.arc(this.position[0], this.position[1], this.radius, 0, Math.PI*2)
        ctx.fill()
        ctx.closePath()
    }
    update() {
        this.acceleration[1] += 1
        this.velocity[0] += this.acceleration[0]
        this.velocity[1] += this.acceleration[1]
        this.position[0] += this.velocity[0]
        this.position[1] += this.velocity[1]
        this.acceleration = [0, 0]

        if (this.position[1] +  this.radius >= canvas.height) {
            this.position[1] = canvas.height - this.radius
            this.velocity[1] *= -1
        }


    }
}

let circle1 = new Circle(20, [100, 100])

function main() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    circle1.draw("red")
    circle1.update()
}