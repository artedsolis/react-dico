import React, { useState, useRef } from 'react';
import './App.css';
import { useFetchHook } from './hooks/useFetchHook';

function App() {
  const [word, setWord] = useState('initialWord'); // Replace 'initialWord' with your initial word, if any.
  const write = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWord = write.current.value; // Get the value from the input field.
    setWord(newWord); // Update the word state with the new word.
  };

  const { data, loading, error } = useFetchHook(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="write a word" ref={write} />
        <button type="submit">Submit</button>
      </form>
      <div className="App">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;