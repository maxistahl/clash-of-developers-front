import { useRecoilValue } from 'recoil';
import charCountState from 'recoil/selectors/charCountState';
import charMatchPartialState from 'recoil/selectors/charMatchPartialState';
import charMatchState from 'recoil/selectors/charMatchState';

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  const matchPartial = useRecoilValue(charMatchPartialState);
  const match = useRecoilValue(charMatchState);

  return (
    <>
      Character Count:
      {' '}
      {count}
      {matchPartial ? ' match' : ' no match'}
      {match ? ' igual' : ' no igual'}
    </>
  );
}

export default CharacterCount;
