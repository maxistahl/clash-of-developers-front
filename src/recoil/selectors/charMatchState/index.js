import { selector } from 'recoil';
import textState from 'recoil/atoms/textState';
// import words

const charMatchState = selector({
  key: 'charMatch', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text === 'hello';
  },
});

export default charMatchState;
