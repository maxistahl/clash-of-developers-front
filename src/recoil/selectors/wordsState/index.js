import { DefaultValue, selector } from 'recoil';

import wordIndexState from 'recoil/atoms/textState';
// import words

const wordsState = selector({
  key: 'charMatch',
  get: ({ get }) => {
    const index = get(wordIndexState);

    return index;
  },
});

export default wordsState;
