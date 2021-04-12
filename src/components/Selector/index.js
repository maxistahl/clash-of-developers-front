import { useRecoilValue } from 'recoil';
import wordIndexState from 'recoil/atoms/wordIndexState';
import wordsState from 'recoil/atoms/wordsState';
import styles from './Selector.module.scss';

const Selector = () => {
  const words = useRecoilValue(wordsState);
  const indexWord = useRecoilValue(wordIndexState);

  if (words.length === 0) {
    return null;
  }

  return (
    <>
      <div id="mark" style={{ position: 'absolute', top: `${words[indexWord].position.y}%`, left: `${words[indexWord].position.x}%` }} />
      <div
        id="selector"
        className={styles.selector}
        style={{ top: `${words[indexWord].position.y}%`, left: `${words[indexWord].position.x}%` }}
      >
        <div className={styles['selector-inner']}>
          <div className={styles.selector1} />
          <div className={styles.selector2} />
        </div>
      </div>
    </>
  );
};

export default Selector;
