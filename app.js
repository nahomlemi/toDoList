let fs = require("fs");

app.listen(4000);

app.use((req, res, next)=>{
  console.log("new request made:");
  console.log("host:", req.hostname);
  console.log("path:", req.path);
  console.log("method:", req.method);
  next();
});

app.get('/', (req, res)=>{
  let blogs = fs.readFile("./db.json",(err, data)=>{
    if (err){
      console.log(err);
    };
    console.log(data);
  });
  console.log(blogs)
})

app.get("/home", (req,res)=>{
  res.render("home",{title:"Home"})
})
