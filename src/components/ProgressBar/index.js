import { useRecoilValue } from 'recoil';
import gameState from 'recoil/atoms/gameState';
import wordsProgress from 'recoil/selectors/wordsProgress';
import styles from './progressBar.module.scss';

function ProgressBar() {
  const { current, count } = useRecoilValue(wordsProgress);
  const gameStatus = useRecoilValue(gameState);

  const currentString = `${current + 1}/${count}`;
  const currentPercentage = gameStatus === 'gameover' ? 100 : Math.round((100 * current) / count);

  return (
    <div className={styles['progress-bar-container']}>
      <div className={styles['words-counter']}>
        <span className={styles.value}>{currentString}</span>
        <span className={styles.description}> words</span>
      </div>
      <div className={styles['percent-completed']}>
        <span className={styles.value}>
          {currentPercentage}
          %
        </span>
        <span className={styles.description}> completed</span>
      </div>
      <div className={styles['progress-bar']}><div style={{ transform: `scaleX(${currentPercentage / 100})` }} /></div>
    </div>
  );
}

export default ProgressBar;
