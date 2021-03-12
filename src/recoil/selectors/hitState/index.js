import { selector } from 'recoil';
import hitState from 'recoil/atoms/hitState';

const hitCounterState = selector({
  key: 'hitCounterState',
  get: ({ get }) => {
    const counter = get(hitState);

    return counter;
  },
});

export default hitCounterState;
