import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import gameState from 'recoil/atoms/gameState';
import textState from 'recoil/atoms/textState';
import charMatchState from 'recoil/selectors/charMatchState';
import styles from './input.module.scss';

function InputText() {
  const [text, setText] = useRecoilState(textState);
  const match = useRecoilValue(charMatchState);
  const gameStatus = useRecoilValue(gameState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    setText('');
  }, [match]);

  return (
    <div className={styles.input}>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <input disabled={gameStatus === 'gameover'} type="text" value={text} onChange={onChange} autoFocus />
      <div className={styles.focus} />
    </div>
  );
}

export default InputText;
