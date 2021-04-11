import { atom } from 'recoil';

const gameState = atom({
  key: 'gameState',
  default: 'running',
});

export default gameState;
