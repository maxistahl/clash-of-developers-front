import { useRecoilValue } from 'recoil';
import hitCounterState from 'recoil/selectors/hitState';
import charMatchState from 'recoil/selectors/charMatchState';
import wordsState from 'recoil/atoms/wordsState';
import { HITTHRESHOLD } from 'lib/constants';

function DisplayInfo() {
  const hitCounter = useRecoilValue(hitCounterState);
  const words = useRecoilValue(wordsState);
  const match = useRecoilValue(charMatchState);

  return (
    <>
      {words.map((item) => <div key={item.word}>{item.word}</div>)}
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
