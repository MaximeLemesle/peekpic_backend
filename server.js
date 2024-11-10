import express from "express";

// Init server
const app = express();
const port = 8888;

// Init ejs
app.set('view engine', 'ejs');

// Get home page
app.get("/", (req, res) => {
  res.status(200).render('views');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});