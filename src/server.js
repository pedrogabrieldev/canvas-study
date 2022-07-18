const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.use('/', express.static('src/pages'))

app.listen(port, () => console.log(`Server listening on port ${port}`))
