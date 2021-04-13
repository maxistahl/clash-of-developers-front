import styles from './GameOverMessage.module.scss';

const GameOverMessage = () => (
  <div className={styles.message}>
    <span>G</span>
    <span>a</span>
    <span>m</span>
    <span>e</span>
    <span>{' '}</span>
    <span>o</span>
    <span>v</span>
    <span>e</span>
    <span>r</span>
    <span>!</span>
  </div>
);

export default GameOverMessage;
