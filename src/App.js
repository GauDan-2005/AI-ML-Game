import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

import WaterJug from "./components/WaterJug/WaterJug";
import Puzzle from "./components/8Puzzle/Puzzle";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Maze from "./components/Maze/Maze";
import TravSalesMan from "./components/TravellingSalesman/TravSalesman";
import Home from "./components/Home/Home";

import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Link to="/" className={styles.back_btn}>
          <p className={styles.back_btn_text}>⬅</p>
        </Link>
        <Link to="/">
          <p className={styles.heading}>Game Master</p>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waterjug" element={<WaterJug />} />
          <Route path="/8puzzle" element={<Puzzle />} />
          <Route path="/maze" element={<Maze />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/tsp" element={<TravSalesMan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
