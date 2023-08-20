const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(3001,()=>{
    console.log(`http://localhost:3001`);
});