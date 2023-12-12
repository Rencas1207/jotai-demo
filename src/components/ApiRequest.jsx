import { atom, useAtom } from 'jotai';

const usersAtom = atom(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
});

const ApiRequest = () => {
  const [users] = useAtom(usersAtom);

  console.log(users);
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map(({ id, name, email, phone, username }) => (
          <li key={id}>
            {name} / {email} / {phone} / {username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiRequest;
