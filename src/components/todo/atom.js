import { atom } from 'jotai'

export const todosAtom = atom([]);
export const filterAtom = atom('all'); // list all atoms initially
export const filteredAtom = atom((get) => {
   const todos = get(todosAtom);
   const filterValue = get(filterAtom);

   if (filterValue === 'all') return todos;
   if (filterValue === 'pending')
      return todos.filter((todo) => !get(todo).completed);
   if (filterValue === 'completed')
      return todos.filter((todo) => get(todo).completed);
});

export const amountTodosAtom = atom((get) => get(todosAtom).length);