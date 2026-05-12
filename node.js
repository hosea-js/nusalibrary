const express = require('express');
const path = require('path');
const app = express();

// Serve a specific HTML file on the home route
app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, 'index'))); // Serve static files from the "public" folder
    res.sendFile(path.join(__dirname, 'index', 'index.html')); // Send the specific HTML file
});

app.listen(3000, () => {
    console.log('Express server running on port 3000');
});
