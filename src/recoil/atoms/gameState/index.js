import { atom } from 'recoil';

const gameState = atom({
  key: 'gameState',
  default: 'ready',
});

export default gameState;
