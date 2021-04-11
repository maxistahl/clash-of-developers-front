import './styles.css';
import CharacterCounter from 'components/characterCounter';
import useGame from 'lib/useGame';
import wordsArray from 'lib/words.json';
import wordsState from 'recoil/atoms/wordsState';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

function App() {
  const [, setWords] = useRecoilState(wordsState);

  useEffect(() => {
    setWords(wordsArray);
  }, []);

  const game = useGame();

  return (
    <div className="App">
      {game.gameStatus === 'gameover' && <div>Game over!</div>}
      <CharacterCounter />
    </div>
  );
}

export default App;
