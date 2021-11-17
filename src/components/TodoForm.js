import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    });

    const handleChange = event => {
        setInput(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        
      props.onSubmit({ /// função feita para sempre que for add
                      /// uma anotação, gerar um id de forma aleatoria.
            id: Math.floor(Math.random() * 10000),
            text: input
        });
    
    setInput('');
    }
    return (
        <form onSubmit={handleSubmit} className='todo-form'>
          {props.edit ? (
            <>
              <input
                placeholder='Atualize a sua tarefa'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
                className='todo-input edit'
              />
              <button onClick={handleSubmit} className='todo-button edit'>
                Atualizar
              </button>
            </>
          ) : (
            <>
              <input
                placeholder='Adicione sua tarefa'
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
              />
              <button onClick={handleSubmit} className='todo-button'>
               Adicionar
              </button>
            </>
          )}
        </form>
      );
    }
    
    export default TodoForm;