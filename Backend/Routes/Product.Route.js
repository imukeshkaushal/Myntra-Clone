const { Router } = require("express");
const { ProductModel } = require("../Model/Product.Model");
const productRoute = Router();

productRoute.get("/:id",async (req, res) => {
  const ID = req.params.id;
  try {
    let data = await ProductModel.find({ _id: ID });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

productRoute.get("/", async (req, res) => {
  let { query } = req.query;
  if (query) {
    try {
      const productData = await ProductModel.find({
        title: { $regex: `${query}`, $options: "i" },
      });
      res.send(productData);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  } else {
    const product = await ProductModel.find();
    res.send(product);
  }
});

productRoute.post("/create", async (req, res) => {
  try {
    //  const movie = new ProductModel(req.body)
    //  await movie.save()
    await ProductModel.insertMany(req.body);
    res.status(201).send({ msg: "Product has been added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

productRoute.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send({ msg: "Product has been updated" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

productRoute.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.send({ msg: "Product has been Deleted" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = { productRoute };
