const app = require('express')();

app.get('/', (req, res) => {
    res.json({ message: 'Docker Containerization Assignment' })
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});