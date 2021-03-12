import { atom } from 'recoil';

const wordsState = atom({
  key: 'words',
  default: [],
});

export default wordsState;
