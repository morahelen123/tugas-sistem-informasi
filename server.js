const express = require("express");
const app = express();

app.use(express.json());

let makeupProducts = [
  { id: 1, name: "Lipstick Matte", brand: "Wardah", price: 55000 },
  { id: 2, name: "Foundation Glow", brand: "Maybelline", price: 120000 },
  { id: 3, name: "Blush On Pink", brand: "Emina", price: 45000 },
];

app.get("/", (req, res) => {
  res.send("API Makeup Collection - Bocil B");
});

app.get("/api/makeup", (req, res) => {
  res.json(makeupProducts);
});

app.get("/api/makeup/:id", (req, res) => {
  const product = makeupProducts.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Produk tidak ditemukan" });
  res.json(product);
});

app.post("/api/makeup", (req, res) => {
  if (!req.body.name || !req.body.brand || !req.body.price) {
    return res.status(400).json({ message: "Semua field wajib diisi" });
  }

  const newProduct = {
    id: makeupProducts.length + 1,
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
  };

  makeupProducts.push(newProduct);
  res.status(201).json({
    message: "Produk baru berhasil ditambahkan",
    data: newProduct,
  });
});

app.put("/api/makeup/:id", (req, res) => {
  const product = makeupProducts.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Produk tidak ditemukan" });

  product.name = req.body.name || product.name;
  product.brand = req.body.brand || product.brand;
  product.price = req.body.price || product.price;

  res.json({
    message: "Produk berhasil diperbarui",
    data: product,
  });
});

app.delete("/api/makeup/:id", (req, res) => {
  makeupProducts = makeupProducts.filter(p => p.id !== parseInt(req.params.id));
  res.json({ message: "Produk berhasil dihapus" });
});

app.use((err, req, res, next) => {
  console.error("Error detail:", err.stack);
  res.status(500).json({ message: "Terjadi kesalahan di server", error: err.message });
});

app.listen(3000, () => {
  console.log("Server Makeup API berjalan di port 3000");
});
