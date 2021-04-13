import { useRecoilValue } from 'recoil';
import wordsState from 'recoil/atoms/wordsState';
import Selector from 'components/Selector';
import HitCounter from 'components/HitCounter';
import wordIndexState from 'recoil/atoms/wordIndexState';
import gameState from 'recoil/atoms/gameState';
import styles from './displayInfo.module.scss';

function DisplayInfo() {
  const words = useRecoilValue(wordsState);
  const indexWord = useRecoilValue(wordIndexState);
  const gameStatus = useRecoilValue(gameState);

  return (
    <>
      <div className={styles.words}>
        <Selector />
        {words.map((item, currentIndex) => (
          <div
            key={item.word}
            style={{
              top: `${item.position.y}%`,
              left: `${item.position.x}%`,
            }}
            className={`${(currentIndex < indexWord || (gameStatus === 'gameover' && words.length === currentIndex + 1)) ? `${styles.dead} ` : ''}${currentIndex === indexWord ? styles.current : ''}`}
          >
            {(currentIndex + 1 === indexWord || (gameStatus === 'gameover' && words.length === currentIndex + 1)) && <div className={styles.boom} />}
            <span className={styles.word}>{item.word}</span>
          </div>
        ))}
      </div>
      <HitCounter />
    </>
  );
}

export default DisplayInfo;
