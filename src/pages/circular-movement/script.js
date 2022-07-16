const canvas = document.getElementById('myCanvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

let objects = []

function Object(x, y, radius, color, velocity, orbitLength) {
  this.x = x
  this.y = y
  this.radius = radius
  this.color = color
  this.velocity = velocity
  this.orbitLength = orbitLength
  this.radians = 0

  this.update = () => {
    this.radians += this.velocity
    this.x = x + Math.cos(this.radians) * this.orbitLength
    this.y = y + Math.sin(this.radians) * this.orbitLength
    this.draw()
  }

  this.draw = () => {
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    context.fillStyle = this.color
    context.fill()
    context.closePath()
  }
}

function init() {
  let object1 = new Object(
    canvas.width / 2,
    canvas.height / 2,
    10,
    'blue',
    0.05,
    100
  )

  objects.push(object1)

  animate()
}

function animate() {
  requestAnimationFrame(animate)
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = 'black'
  context.fillRect(0, 0, canvas.width, canvas.height)
  objects.map((object) => object.update())
}

init()
