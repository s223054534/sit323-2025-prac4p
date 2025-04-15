const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse query params
app.use(express.json());

// Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    res.json({ result: a + b });
});

// Subtraction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    res.json({ result: a - b });
});

// Multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    res.json({ result: a * b });
});

// Division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    if (b === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    res.json({ result: a / b });
});

// 404 Handling
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});

