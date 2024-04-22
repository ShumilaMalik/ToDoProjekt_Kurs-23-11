interface Todo {
    id: number;
    todo: string;
    deadline: string;
    assignee: string;
    owner: string;
    status: 'not started' | 'in progress' | 'ready for review' | 'in review' | 'done';
  }
  
  let todos: Todo[] = []; // Dies dient als einfache Datenbankersatz
  
  export { Todo, todos };
  