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

// Routes user
import user from './routes/user.routes.js';
app.use('/user', user);

// Routes album
import album from './routes/album.routes.js';
app.use('/album', album);

// Routes page
import page from './routes/page.routes.js';
app.use('/page', page);

// Routes comment
import comment from './routes/comment.routes.js';
app.use('/comment', comment);

// Routes photo
import photo from './routes/photo.routes.js';
app.use('/photo', photo);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});