const express = require('express')
const db = require('./Config')



// Initialize express app
const app = express()


// Blog Routes
app.use(require('./Routes/blogRoutes'))
app.use(express.static('/uploads'))




app.listen(4040,()=>{
    console.log('APP is Running on http://localhost:4040')
})
