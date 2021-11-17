import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]); // utilizando array para ter uma list de anotações.

   
      const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) { // expressão regular que busca procurar por linhas em branco / vazias
          return;
        }
  
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo, ...todos);
    };

    const completeTodo = id => {
      let updateTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updateTodos)
    };

    const removeTodo = id => {
      const remove = [...todos].filter(todo => todo.id !== id);
  
      setTodos(remove);
    };

    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) { // expressão regular que busca procurar por linhas em branco / vazias
        return;
      }
  
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    return (
        <div>
            <h1>Qual é o plano para hoje?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    )
    }


export default TodoList;
