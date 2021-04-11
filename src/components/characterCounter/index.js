import InputText from 'components/InputText';
import DisplayInfo from 'components/displayInfo';
import ProgressBar from 'components/ProgressBar';

function CharacterCounter() {
  return (
    <div>
      <InputText />
      <DisplayInfo />
      <ProgressBar />
    </div>
  );
}

export default CharacterCounter;
