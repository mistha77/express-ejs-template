const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.get("/",(req, res)=>{
    res.render("index",{title:"express Templates",
        message: "welcome to express templates !",
        greeting:"",
    });
});
app.post("/",(req, res)=>{
    const{name} = req.body;
    const greeting = `hello,${name}!`
    res.render("index",{title:"Express Templates",
        message: "welcome to express templates !",
        greeting,
    })
});
app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
});
