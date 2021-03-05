const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

let notes = [];
// Counter for note IDs
let count = 0;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Paths
app.use("/assets", express.static('assets'));
// HTML paths
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));
// API paths
app.get("/api/notes", (req, res) => res.json(notes));

app.post("/api/notes", (req, res) => {
    let note = req.body;
    count++;

    note.id = count;
    notes.push(note);

    res.json(notes);
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));