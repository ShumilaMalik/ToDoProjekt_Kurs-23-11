import express from 'express';
import todoRoutes from './todo.routes'; // Stelle sicher, dass der Pfad korrekt ist

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware für JSON

app.use('/api', todoRoutes); // Bindet die ToDo-Routen unter dem '/api' Pfad ein

app.get('/', (req, res) => {
  res.send('Hello, this is the TODO API!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
