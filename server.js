const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.use('/', express.static('src'))
app.use('/circular-movement', express.static('src/pages/circular-movement'))
app.use('/gravity', express.static('src/pages/gravity'))

app.listen(port, () => console.log(`Server listening on port ${port}`))
