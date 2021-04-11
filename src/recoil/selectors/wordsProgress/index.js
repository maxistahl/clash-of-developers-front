import { selector } from 'recoil';
import wordIndexState from 'recoil/atoms/wordIndexState';
import wordsState from 'recoil/atoms/wordsState';

const wordsProgress = selector({
  key: 'wordsProgress',
  get: ({ get }) => {
    const words = get(wordsState);
    const index = get(wordIndexState);

    return {
      count: words.length,
      current: index,
    };
  },
});

export default wordsProgress;
