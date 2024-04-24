import { useState } from "react";
import axios from "axios";

import styles from "./Water.module.css";

function WaterJug() {
  const [jug1Capacity, setJug1Capacity] = useState("");
  const [jug2Capacity, setJug2Capacity] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [solution, setSolution] = useState("");

  const handleSolve = async () => {
    try {
      const response = await axios.post("/solve_water_jug", {
        jug1_capacity: parseInt(jug1Capacity),
        jug2_capacity: parseInt(jug2Capacity),
        goal_amount: parseInt(goalAmount),
      });
      setSolution(response.data.steps);
    } catch (error) {
      console.error("Error solving water jug problem:", error);
    }
  };

  return (
    <div className={styles.waterjug}>
      <p className={styles.heading}>Water Jug</p>
      <form className={styles.water_form}>
        <div className={styles.form_input_div}>
          <label className={styles.input_text}>Jug-1 Capacity</label>
          <input
            type="number"
            min={0}
            placeholder="Enter capacity..."
            value={jug1Capacity}
            onChange={(e) => setJug1Capacity(e.target.value)}
          />
        </div>

        <div className={styles.form_input_div}>
          <label className={styles.input_text}>Jug-2 Capacity</label>
          <input
            type="number"
            min={0}
            placeholder="Enter capacity..."
            value={jug2Capacity}
            onChange={(e) => setJug2Capacity(e.target.value)}
          />
        </div>
        <div className={styles.form_input_div}>
          <label className={styles.input_text}>Desired Amount</label>
          <input
            type="number"
            min={0}
            placeholder="Enter capacity..."
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
          />
        </div>
      </form>
      <button className={styles.solve_btn} onClick={handleSolve}>
        Solve
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

export default WaterJug;
