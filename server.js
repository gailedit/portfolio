// === Require Modules ===
const express = require("express");

// === Create Express App ===
const app = express();


// === Configure App ===
const PORT = 4000;

// === Mount Middleware ===
app.set('view engine', 'ejs');

app.use(express.static('views'));

// === Routes/Controllers ===
app.get("/", function(request, response) {
  response.render("index.html")
});


// === Server Listener ===
app.listen(PORT, () => console.log(`Port ${PORT} in the house!`));