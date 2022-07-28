const express = require("express");
const cors = require("cors");

require("./db/config");
const User = require("./db/user");
const Products = require("./db/product");

const app = express();

app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  // console.log(result);-
  res.send(result);
});
app.post("/addProducts", async (req, res) => {
  let products = new Products(req.body);
  let result = await products.save();
  res.send(result);
});
app.post("/login", async (req, res) => {
  let user = await User.findOne(req.body).select("-password");
  if (req.body.email && req.body.password) {
    if (user) {
      res.send(user);
    } else {
      res.send("user not found");
    }
  } else {
    res.send("user not found");
  }

  // if(user){
  //     res.send(user);
  // }else{
  //     res.send("user not found");
  // }
});

app.get("/products", async (req, res) => {
  const products = await Products.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "no user found" });
  }
});

app.delete("/products/:id", async (req, res) => {
  let result = await Products.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.get("/products/:id", async (req, res) => {
  let result = await Products.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No data" });
  }
});

app.put("/products/:id", async (req, res) => {
  let result = await Products.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.get("/search/:key", async (req, res) => {
  let result = await Products.find({
    $or: [
      {
        name: { $regex: req.params.key },
        
      },
      {
        category: { $regex: req.params.key },
        
      },
      {
        company: { $regex: req.params.key },
        
      },
    ],
  });
  res.send(result);
});

app.listen(8000);
