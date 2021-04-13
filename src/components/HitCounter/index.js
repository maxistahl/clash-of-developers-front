import { HITTHRESHOLD } from 'lib/constants';
import hitCounterState from 'recoil/selectors/hitState';
import { useRecoilValue } from 'recoil';
import styles from './HitCounter.module.scss';

const HitCounter = () => {
  const hitCounter = useRecoilValue(hitCounterState);

  if (hitCounter < HITTHRESHOLD) {
    return null;
  }

  return (
    <div className={styles['hit-counter']}>
      <div className={styles.icon} />
      {hitCounter && <span key={hitCounter}>{hitCounter}</span>}
      hits!
    </div>
  );
};

export default HitCounter;
