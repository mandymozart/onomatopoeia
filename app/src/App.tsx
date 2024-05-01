import './App.css';
import Dictionary from './components/Dictionary';
import dict from './dict/en.json';

function App() {
  return (
    <>
      <img
        width='100%'
        src='https://camo.githubusercontent.com/2a58332524817f92453a93fd5701247b364f0f47e58f72bb6ff245c6da8cd02c/687474703a2f2f626c6f672e67656e676f2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f30362f7a61612d7a61612e706e67'
      />
      <Dictionary dictionary={dict} />
    </>
  );
}

export default App;
