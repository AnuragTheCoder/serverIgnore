
require('dotenv').config();

const express=require('express');

const app=express();
const port=process.env.PORT;
app.get('/',(req,res)=>{
    res.send('Hello World')
})



app.get('/twitter',(req,res)=>{
    res.send("Sending Response Of Twitter")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai Aur Code</h2>')
})

app.listen(port,()=>{
    console.log(`Example App is Listening on Port ${port}`);
})


// const express=require('express');
// const app=express();
// require('dotenv').config()
// const port=process.env.PORT

// app.get("/",(req,res)=>{
//     res.send("My response")
// })

// app.listen(port,()=>{
//     console.log("listening on "+port);
// })

// const express=require('express');
// const app=express();


// // require('dotenv').config();
// require('dotenv').config();

// app.get('/',(req,res)=>{
//     res.send(process.env.MYRESPONSE)
// })

// app.listen(process.env.PORT,()=>{
//     console.log(`${process.env.MYRESPONSE}`);
// })
