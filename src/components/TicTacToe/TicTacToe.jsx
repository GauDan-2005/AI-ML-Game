import { useState } from "react";
import axios from "axios";

import Matrix from "./Matrix";
import styles from "./TicTacToe.module.css";

const TicTacToe = () => {
  const [userInput, setUserInput] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const d = e.target.value;
    setUserInput((prev) => [...prev, d]);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/tic_tac_toe_endpoint", {
        userInput: userInput,
      });
      setResponseMessage(response.data.message); // Assuming the backend sends a response message
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.ticTacToe}>
      <p className={styles.heading}>Tic-Tac-Toe</p>
      <div className={styles.input_div}>
        <p className={styles.player}>Player 1</p>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter your input..."
        />
      </div>
      <button onClick={handleSubmit} className={styles.solve_btn}>
        Submit
      </button>
      {responseMessage && (
        <div className={styles.responseMessage}>{responseMessage}</div>
      )}
      <Matrix />
    </div>
  );
};

export default TicTacToe;
