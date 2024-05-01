import { useState } from 'react';
import './App.css';
import Dictionary from './components/Dictionary';
import dict from './dict/en.json';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dictionary dictionary={dict} />
    </>
  );
}

export default App;
