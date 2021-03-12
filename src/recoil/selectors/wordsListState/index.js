import { selector } from 'recoil';
import wordsState from 'recoil/atoms/wordsState';

const wordsListState = selector({
  key: 'wordList',
  get: ({ get }) => {
    const list = get(wordsState);

    return list;
  },
});

export default wordsListState;
