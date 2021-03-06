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
import GameOverMessage from 'components/GameOver';

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
      <div className="bg" />
      {gameStatus === 'gameover' && <GameOverMessage />}
      <CharacterCounter />
      <Weapon />
    </div>
  );
}

export default App;
