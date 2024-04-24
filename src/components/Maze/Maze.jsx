import React, { useState } from "react";
import axios from "axios";

import styles from "./Maze.module.css";

const Maze = () => {
  const [maze, setMaze] = useState("");
  const [solution, setSolution] = useState("");

  const handleSolve = async () => {
    try {
      const response = await axios.post("/solve_maze", {
        input_maze: parseInput(maze),
      });
      setSolution(response.data.solution);
    } catch (error) {
      console.error("Error solving maze:", error);
    }
  };
  const parseInput = (input) => {
    return input
      .trim()
      .split("\n")
      .map((row) => row.trim().split(/\s+/).map(Number));
  };
  return (
    <div className={styles.maze}>
      <p className={styles.heading}>Rat in a Maze</p>
      <textarea
        rows={5}
        cols={30}
        placeholder="Enter a 5v5 maze..."
        value={maze}
        onChange={(e) => setMaze(e.target.value)}
      />
      <button className={styles.solve_btn} onClick={handleSolve}>
        Solve Maze
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

export default Maze;
