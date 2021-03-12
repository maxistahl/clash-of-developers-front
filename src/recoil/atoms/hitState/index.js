import { atom } from 'recoil';

const hitState = atom({
  key: 'hitState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export default hitState;
