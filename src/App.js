import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <p className={styles.heading}>AI-ML Game</p>
      <div className={styles.game_div}>
        <div className={styles.game_button}>
          <p className={styles.game_text}>Maze</p>
        </div>
        <div className={styles.game_button}>
          <p className={styles.game_text}>Water jug</p>
        </div>
        <div className={styles.game_button}>
          <p className={styles.game_text}>8 puzzle</p>
        </div>
        <div className={styles.game_button}>
          <p className={styles.game_text}>Tic-Tac-Toe</p>
        </div>
      </div>
    </div>
  );
}

export default App;
