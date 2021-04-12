import './styles.css';
import CharacterCounter from 'components/characterCounter';
import useGame from 'lib/useGame';
import wordsArray from 'lib/words.json';
import wordsState from 'recoil/atoms/wordsState';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import getRandomInt from 'lib/getRandomInt';
import Weapon from 'components/Weapon';
import gameState from 'recoil/atoms/gameState';

function App() {
  const [, setWords] = useRecoilState(wordsState);
  const [gameStatus, setGameStatus] = useRecoilState(gameState);

  useEffect(() => {
    const words = wordsArray.map((item) => ({
      ...item,
      position: {
        x: getRandomInt(0, 100),
        y: getRandomInt(0, 100),
      },
    }));
    setWords(words);
    setGameStatus('running');
  }, []);

  useGame();

  return (
    <div className="App">
      {gameStatus === 'gameover' && <div>Game over!</div>}
      <CharacterCounter />
      <Weapon />
    </div>
  );
}

export default App;
