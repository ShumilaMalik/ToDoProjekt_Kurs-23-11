import { Router } from 'express';
import { Todo, todos } from './todo.model';

const router = Router();

// Erstellen
router.post('/todo', (req, res) => {
  const { todo, deadline, assignee, owner } = req.body;
  const newTodo: Todo = {
    id: todos.length + 1, // einfache ID-Zuweisung
    todo,
    deadline,
    assignee,
    owner,
    status: 'not started'
  };
  todos.push(newTodo);
  res.status(201).send(newTodo);
});

// Lesen (alle Todos)
router.get('/todo', (req, res) => {
  res.send(todos);
});

// Lesen (ein Todo nach ID)
router.get('/todo/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).send({ message: 'Todo not found' });
  }
  res.send(todo);
});

// Aktualisieren
router.put('/todo/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send({ message: 'Todo not found' });
  }
  const updatedTodo = { ...todos[index], ...req.body };
  todos[index] = updatedTodo;
  res.send(updatedTodo);
});

// Löschen
router.delete('/todo/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send({ message: 'Todo not found' });
  }
  todos.splice(index, 1);
  res.status(204).send();
});

export default router;
