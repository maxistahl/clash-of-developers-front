import { selector } from 'recoil';
import textState from 'recoil/atoms/textState';
// import words

const charMatchPartialState = selector({
  key: 'charMatchPartial', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    if (text && 'hello'.startsWith(text, 0)) {
      return true;
    }

    return false;
  },
});

export default charMatchPartialState;
