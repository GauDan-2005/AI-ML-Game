import styles from "./App.module.css";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

import WaterJug from "./components/WaterJug/WaterJug";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <p className={styles.heading}>AI-ML Game</p>
        <div className={styles.game_div}>
          <Link to="/maze" className={styles.game_button}>
            <div>
              <p className={styles.game_text}>Maze</p>
            </div>
          </Link>
          <Link to="/waterjug">
            <div className={styles.game_button}>
              <img src="ihbfij" alt="" />
              <p className={styles.game_text}>Water jug</p>
            </div>
          </Link>
          <Link to="/puzzle">
            <div className={styles.game_button}>
              <p className={styles.game_text}>8 puzzle</p>
            </div>
          </Link>
          <Link to="/tic-tac-toe">
            <div className={styles.game_button}>
              <p className={styles.game_text}>Tic-Tac-Toe</p>
            </div>
          </Link>
          <div className={styles.game_button}>
            <p className={styles.game_text}>Find S</p>
          </div>
        </div>
        <Routes>
          <Route path="/waterjug" element={<WaterJug />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
