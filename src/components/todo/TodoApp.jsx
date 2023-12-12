import { atom, useAtom, useSetAtom } from 'jotai';
import TodoItem from './TodoItem';
import { amountTodosAtom, filterAtom, filteredAtom, todosAtom } from './atom';

const TodoApp = () => {
  const setTodosAtom = useSetAtom(todosAtom);
  const setFilterAtom = useSetAtom(filterAtom);
  const [todos] = useAtom(filteredAtom);
  const [amounTodos] = useAtom(amountTodosAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.currentTarget.inputValue.value;
    setTodosAtom((prevTodos) => [
      ...prevTodos,
      atom({ id: +Date.now(), title, completed: false }),
    ]);
    e.currentTarget.inputValue.value = '';
  };

  const removeTodo = (atomTodo) => {
    setTodosAtom((prevTodos) => prevTodos.filter((todo) => todo !== atomTodo));
  };

  return (
    <>
      <hr />
      <h2>TODO con Jotai y Atoms</h2>
      <span>Total todos: {amounTodos}</span>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputValue"
          autoFocus
          placeholder="Agregar un todo..."
          style={{
            padding: '12px 16px',
            borderRadius: '12px',
            outline: 'none',
            border: 'none',
          }}
        />
      </form>
      <br />
      <div style={{ display: 'flex', gap: '.8rem', padding: 'auto' }}>
        <button onClick={() => setFilterAtom('all')}>Todos</button>
        <button onClick={() => setFilterAtom('pending')}>Pendientes</button>
        <button onClick={() => setFilterAtom('completed')}>Finalizados</button>
      </div>
      <ul>
        {todos.map((todoAtom) => (
          <TodoItem todoItem={todoAtom} removeTodo={removeTodo} />
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
