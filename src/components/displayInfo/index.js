import { useRecoilValue } from 'recoil';
import hitCounterState from 'recoil/selectors/hitState';
import charMatchState from 'recoil/selectors/charMatchState';
import wordsState from 'recoil/atoms/wordsState';
import { HITTHRESHOLD } from 'lib/constants';
import Selector from 'components/Selector';
import styles from './displayInfo.module.scss';

function DisplayInfo() {
  const hitCounter = useRecoilValue(hitCounterState);
  const words = useRecoilValue(wordsState);
  const match = useRecoilValue(charMatchState);

  return (
    <>
      <div className={styles.words}>
        <Selector />
        {words.map((item) => (
          <div
            key={item.word}
            style={{
              top: `${item.position.y}%`,
              left: `${item.position.x}%`,
            }}
          >
            {item.word}
          </div>
        ))}
      </div>
      {hitCounter > HITTHRESHOLD && (
      <div>
        {hitCounter}
        {' '}
        hits!
      </div>
      )}
      {match ? ' boom!' : ''}
    </>
  );
}

export default DisplayInfo;
