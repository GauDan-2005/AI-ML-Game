import styles from "./Water.module.css";
// import styles2 from "../../App.module.css";

function WaterJug() {
  return (
    <div className={styles.waterjug}>
      <img className={styles.bg} src="link" alt="name" />
      <form>
        <p className={styles.input_1}>Jug-1</p>
        <input type="number" placeholder="Enter capacity..." />
        <p>Jug-2</p>
        <input type="number" placeholder="Enter capacity..." />
        <p>Desired Amount</p>
        <input type="number" placeholder="Enter capacity..." />
      </form>
    </div>
  );
}

export default WaterJug;
// input : jug 1, jug 2, desired amount
