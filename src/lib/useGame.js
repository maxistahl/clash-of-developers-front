import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import wordIndexState from 'recoil/atoms/wordIndexState';
import hitState from 'recoil/atoms/hitState';
import charMatchPartialState from 'recoil/selectors/charMatchPartialState';
import charMatchState from 'recoil/selectors/charMatchState';
// import wordsListState from 'recoil/selectors/wordsListState';

// import wordsArray from 'lib/words.json';
import gameState from 'recoil/atoms/gameState';
import wordsState from 'recoil/atoms/wordsState';
import hitMatchState from 'recoil/selectors/hitMatchState';
import charCountState from 'recoil/selectors/charCountState';

// import getRandomInt from './getRandomInt';

const useGame = () => {
  // const [isPlaying, setIsPlaying] = useState(true);

  const matchPartial = useRecoilValue(charMatchPartialState);
  const match = useRecoilValue(charMatchState);
  const words = useRecoilValue(wordsState);
  const charCount = useRecoilValue(charCountState);
  const matchCounter = useRecoilValue(hitMatchState);

  const [gameStatus, setGameStatus] = useRecoilState(gameState);
  const [wordIndex, setWordIndex] = useRecoilState(wordIndexState);
  const [hitCounter, setHitCounter] = useRecoilState(hitState);

  // const degrees = (rad) => ((rad * 180) / Math.PI);

  // function calcAngle(opposite, adjacent) {
  //   return degrees(Math.atan(opposite / adjacent));
  // }

  // console.log(calcAngle(5, 12));

  // console.log(Math.hypot(5, 12));

  // const [words, setWords] = useRecoilState(wordsState);

  useEffect(() => {
    console.log(words);
  }, []);

  useEffect(() => {
    if (match) {
      if (words.length === wordIndex + 1) {
        setGameStatus('gameover');
      } else {
        setWordIndex(wordIndex + 1);
      }
    }
  }, [match]);

  useEffect(() => {
    if (charCount) {
      if (matchCounter) {
        setHitCounter(hitCounter + 1);
      } else {
        setHitCounter(0);
      }
    }
  }, [charCount]);

  useEffect(() => {
    console.log('Game Status:', wordIndex, hitCounter, matchPartial, matchCounter);
  }, [hitCounter, matchPartial]);

  return {
    gameStatus,
  };
};

export default useGame;
