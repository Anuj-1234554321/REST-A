const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// authRoutes
const authRoutes = require('./routes/authRoute');
app.use('/api',authRoutes)

//route not found
app.use('*',(req,res,next)=>{
    res.status(404).json({
        message: 'Route not found'
    })
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
