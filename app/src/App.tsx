import './App.css';
import Dictionary from './components/Dictionary';
import dict from './dict/en.json';

function App() {
  return (
    <>
      <Dictionary dictionary={dict} />
    </>
  );
}

export default App;
