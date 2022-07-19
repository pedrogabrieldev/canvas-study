const canvas = document.getElementById('myCanvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

const gravity = 1
const friction = 0.9

let objects = []

class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color
  }

  update() {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy *= -friction
    } else {
      this.dy += gravity
    }

    this.y += this.dy

    this.draw()
  }

  draw() {
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    context.fillStyle = this.color
    context.fill()
    context.closePath()
  }
}

function init() {
  const ball = new Ball(canvas.width / 2, canvas.height / 2, 0, 2, 10, 'white')

  objects.push(ball)
}

function animate() {
  requestAnimationFrame(animate)
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = 'black'
  context.fillRect(0, 0, canvas.width, canvas.height)
  objects.map((object) => object.update())
}

init()

animate()
