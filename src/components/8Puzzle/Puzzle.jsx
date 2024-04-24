import { useState } from "react";
import axios from "axios";

import styles from "./Puzzle.module.css";

function PuzzleSolver() {
  const [initialState, setInitialState] = useState("");
  const [goalState, setGoalState] = useState("");
  const [solution, setSolution] = useState("");

  const handleSolve = async () => {
    try {
      const response = await axios.post("/solve_8puzzle", {
        initial_state: parseInput(initialState),
        goal_state: parseInput(goalState),
      });
      setSolution(response.data.solution);
    } catch (error) {
      console.error("Error solving puzzle:", error);
    }
  };

  const parseInput = (input) => {
    return input
      .trim()
      .split("\n")
      .map((row) => row.trim().split(/\s+/).map(Number));
  };

  return (
    <div className={styles.puzzle}>
      <p className={styles.heading}>8-Puzzle</p>
      <textarea
        rows={3}
        cols={30}
        placeholder="Enter initial state"
        value={initialState}
        onChange={(e) => setInitialState(e.target.value)}
      />
      <textarea
        rows={3}
        cols={30}
        placeholder="Enter goal state"
        value={goalState}
        onChange={(e) => setGoalState(e.target.value)}
      />
      <button className={styles.solve_btn} onClick={handleSolve}>
        Solve Puzzle
      </button>
      {solution && (
        <div className={styles.result_div}>
          <h3 className={styles.solution}>Solution:</h3>
          <pre>{solution}</pre>
        </div>
      )}
    </div>
  );
}

export default PuzzleSolver;
