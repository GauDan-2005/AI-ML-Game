import { useState } from "react";
import axios from "axios";

import styles from "./TravSalesman.module.css";

const FindS = () => {
  const [initialState, setInitialState] = useState("");
  const [solution, setSolution] = useState("");

  const handleSolve = async () => {
    try {
      const response = await axios.post("/solve_8puzzle", {
        initial_state: parseInput(initialState),
      });
      setSolution(response.data.solution);
    } catch (error) {
      console.error("Error solving tsp:", error);
    }
  };

  const parseInput = (input) => {
    return input
      .trim()
      .split("\n")
      .map((row) => row.trim().split(/\s+/).map(Number));
  };
  return (
    <div className={styles.tsp}>
      <p className={styles.heading}>Travelling Salesman</p>
      <textarea
        rows={3}
        cols={30}
        placeholder="Enter city coordinates..."
        value={initialState}
        onChange={(e) => setInitialState(e.target.value)}
      />
      <button className={styles.solve_btn} onClick={handleSolve}>
        Solve TSP
      </button>
      {solution && (
        <div className={styles.result_div}>
          <h3 className={styles.solution}>Solution:</h3>
          <pre>{solution}</pre>
        </div>
      )}
    </div>
  );
};

export default FindS;
