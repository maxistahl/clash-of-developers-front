import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import wordIndexState from 'recoil/atoms/wordIndexState';
import charCountState from 'recoil/selectors/charCountState';
import charMatchPartialState from 'recoil/selectors/charMatchPartialState';
import charMatchState from 'recoil/selectors/charMatchState';
// import getRandomInt from './getRandomInt';
// import words from './words.json';

const useGame = () => {
  // const [isPlaying, setIsPlaying] = useState(true);
  // const [wordIndex, setWordIndex] = useState(0);

  const hitCounter = useRecoilValue(charCountState);
  const matchPartial = useRecoilValue(charMatchPartialState);
  const match = useRecoilValue(charMatchState);

  const [wordIndex, setWordIndex] = useRecoilState(wordIndexState);

  // const degrees = (rad) => ((rad * 180) / Math.PI);

  // function calcAngle(opposite, adjacent) {
  //   return degrees(Math.atan(opposite / adjacent));
  // }

  // console.log(calcAngle(5, 12));

  // console.log(Math.hypot(5, 12));

  useEffect(() => {
    if (match) setWordIndex(wordIndex + 1);

    console.log('Game Status:', wordIndex, hitCounter, matchPartial, match);
  }, [hitCounter, matchPartial, match]);
};

export default useGame;
