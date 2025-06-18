const express = require('express');
const path = require('path');
const app = express();

// Set the port from environment variable or default to 8080
const PORT = process.env.PORT || 8080;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Victory Chapter specific routes
app.get('/victory', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'Victory Command Center is OPERATIONAL',
        timestamp: new Date().toISOString(),
        server: 'Azure App Service',
        chapter: 'VICTORY'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🏆 Victory Command Center is running on port ${PORT}`);
    console.log(`🎯 Harvey Specter's Strategic Dashboard is LIVE`);
    console.log(`🚀 Azure deployment successful at: https://bni-victory-command.azurewebsites.net`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('🏁 Victory Command Center shutting down gracefully');
    process.exit(0);
});
