import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';
import PropTypes from 'prop-types';

function Recoil({ children }) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
}

Recoil.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Recoil;
