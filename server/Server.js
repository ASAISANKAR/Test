const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
app.use(bodyParser.json());
app.use(cors());

const URL="mongodb+srv://saisankar:system@cluster0.gv6neug.mongodb.net/Portifolio";

mongoose.connect(URL,{
useNewUrlParser:true,

useUnifiedTopology:true,
});

const db=mongoose.connection;
db.on('error',console.error.bind(console,'mongodb connection error'));

//Feed Back Form
const userSchema=new mongoose.Schema({
    experience:String,
    suggestion:String,
    comments:String,
  });
  
  const User2=mongoose.model("Feed_Back",userSchema);
  
  //routes routes
  
  
  app.post("/feedback", async (req, res) => {
    console.log("");
    console.log("Feedback");
    console.log(req.body);
    const { experience,suggestion,comments } = req.body;
    try {
        
        const newUser = new User2({ experience,suggestion,comments});
        await newUser.save();
        console.log(newUser);
        res.send({ message: "successful" });
      
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  

app.listen(6969,()=>{
    console.log("Server Run at Port Number 6969");
});
