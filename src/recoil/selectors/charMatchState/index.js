import { selector } from 'recoil';
import textState from 'recoil/atoms/textState';
import wordIndexState from 'recoil/atoms/wordIndexState';
import wordsState from 'recoil/atoms/wordsState';

const charMatchState = selector({
  key: 'charMatch', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    const words = get(wordsState);
    const index = get(wordIndexState);

    if (words.length > 0) {
      return words[index].word === text;
    }

    return false;
  },
});

export default charMatchState;
