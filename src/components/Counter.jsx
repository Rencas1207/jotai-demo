import { atom, useAtom } from 'jotai';

const counterAtom = atom(0);
const doubleAtom = atom((get) => get(counterAtom) * 2);

const Counter = () => {
  const [counterValue, setCounterValue] = useAtom(counterAtom);
  const [doubleValue] = useAtom(doubleAtom);

  return (
    <>
      <h1>Counter: {counterValue}</h1>
      <div>
        <button onClick={() => setCounterValue((c) => c + 1)}>
          Incrementar
        </button>
        <button onClick={() => setCounterValue((c) => c - 1)}>
          Decrementar
        </button>
      </div>
      <hr />
      <h1>Double: {doubleValue}</h1>
    </>
  );
};

export default Counter;
