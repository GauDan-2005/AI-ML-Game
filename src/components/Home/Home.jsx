import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Games = () => {
  return (
    <div className={styles.game_div}>
      <Link to="/maze" className={styles.game_button}>
        <div>
          <p className={styles.game_text}>Maze</p>
        </div>
      </Link>
      <Link to="/waterjug" className={styles.game_button}>
        <div>
          <p className={styles.game_text}>Water jug</p>
        </div>
      </Link>
      <Link to="/8puzzle" className={styles.game_button}>
        <div>
          <p className={styles.game_text}>8 puzzle</p>
        </div>
      </Link>
      <Link to="/tic-tac-toe" className={styles.game_button}>
        <div>
          <p className={styles.game_text}>Tic-Tac-Toe</p>
        </div>
      </Link>
      <Link to="/tsp" className={styles.game_button}>
        <div>
          <p className={styles.game_text}>Travelling Salesman</p>
        </div>
      </Link>
    </div>
  );
};

export default Games;
