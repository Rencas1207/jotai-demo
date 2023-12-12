import { atom, useAtom } from 'jotai';

const atomText = atom('');
const atomTextUppercase = atom((get) => get(atomText).toUpperCase());

const TextUppercase = () => {
  const [text, setText] = useAtom(atomText);
  const [textUppercase] = useAtom(atomTextUppercase);
  return (
    <form>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <br />
      <label htmlFor="description">{textUppercase}</label>
    </form>
  );
};

export default TextUppercase;
