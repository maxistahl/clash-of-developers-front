import { atom } from 'recoil';

const wordIndexState = atom({
  key: 'wordIndex',
  default: 0,
});

export default wordIndexState;
