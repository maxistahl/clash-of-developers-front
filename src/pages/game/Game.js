import './styles.css';
import CharacterCounter from 'components/characterCounter';
import useGame from 'lib/useGame';

function App() {
  useGame();

  return (
    <div className="App">
      <CharacterCounter />
    </div>
  );
}

export default App;
