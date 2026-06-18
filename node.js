const express = require('express');
const path = require('path');
const app = express();

// Serve a specific HTML file on the home route
app.use(express.static(path.join(__dirname, 'index'))); // Serve static files from the 'index' directory

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index', 'index.html')); // Send the index.html file for the home route
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index', '404.html')); // Send the 404 HTML file for any unmatched routes
});

app.listen(3000, () => {
    console.log('Express server running on port 3000');
});
