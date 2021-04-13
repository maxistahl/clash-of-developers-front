import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import gameState from 'recoil/atoms/gameState';
import wordIndexState from 'recoil/atoms/wordIndexState';
import hitMatchState from 'recoil/selectors/hitMatchState';
import styles from './Weapon.module.scss';

const calculateSelectorPosition = (elem) => {
  const rect = elem?.getBoundingClientRect();
  if (!rect) return 0;

  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
};

const degrees = (rad) => ((rad * 180) / Math.PI);

function calcAngle(opposite, adjacent) {
  return degrees(Math.atan(opposite / adjacent));
}

const Weapon = () => {
  const [rotation, setRotation] = useState(0);
  const [shoot, setShoot] = useState(3);
  const [hypo, setHypo] = useState(0);
  const gameStatus = useRecoilValue(gameState);
  const indexWord = useRecoilValue(wordIndexState);
  const matchCounter = useRecoilValue(hitMatchState);

  useEffect(() => {
    const selectorPos = calculateSelectorPosition(document.querySelector('#mark'));
    const weaponPos = {
      left: (window.innerWidth / 2),
      top: ((window.innerHeight / 2) + 287),
    };

    const adyacente = weaponPos.top - selectorPos.top;
    const opuesto = selectorPos.left - weaponPos.left;

    const weaponAngle = calcAngle(opuesto, adyacente);

    const hypoValue = Math.hypot(opuesto, adyacente);

    setHypo(hypoValue);
    setRotation(weaponAngle);
  }, [indexWord, gameStatus]);

  useEffect(() => {
    setShoot(shoot < 3 ? shoot + 1 : 1);
  }, [matchCounter]);

  return (
    <div id="weapon" className={styles['weapon-container']} style={{ transform: `rotate(${rotation}deg) translateX(-50%)` }}>
      <div className={styles.weapon} />
      {shoot && <div className={styles[`bullet${shoot}`]} style={{ height: `${hypo}px` }} />}
    </div>
  );
};

export default Weapon;
