import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import textState from 'recoil/atoms/textState';
import charMatchState from 'recoil/selectors/charMatchState';

function InputText() {
  const [text, setText] = useRecoilState(textState);
  const match = useRecoilValue(charMatchState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    setText('');
  }, [match]);

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo:
      {' '}
      {text}
    </div>
  );
}

export default InputText;
