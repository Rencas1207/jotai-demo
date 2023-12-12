import { useAtom } from 'jotai';

const TodoItem = ({ todoItem, removeTodo }) => {
  const [item, setItem] = useAtom(todoItem);

  return (
    <li key={item.id}>
      <span
        className={item.completed ? 'line-through' : ''}
        onClick={() =>
          setItem((prev) => ({ ...prev, completed: !prev.completed }))
        }
      >
        {item.title}
      </span>
      <button
        type="button"
        onClick={() => removeTodo(todoItem)}
        style={{ marginLeft: '20px' }}
      >
        🗑️
      </button>
    </li>
  );
};

export default TodoItem;
