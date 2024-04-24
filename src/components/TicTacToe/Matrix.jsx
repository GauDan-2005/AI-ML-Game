import styles from "./Matrix.module.css";

const Matrix = () => {
  return (
    <div className={styles.matrix}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <p className={styles.cell_text}>X</p>
        </div>
        <div className={styles.cell}>
          <p className={styles.cell_text}>X</p>
        </div>
        <div className={styles.cell}>
          <p className={styles.cell_text}>X</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <p className={styles.cell_text}>X</p>
        </div>
        <div className={styles.cell}>
          <p className={styles.cell_text}>X</p>
        </div>
        <div className={styles.cell}>
          <p className={styles.cell_text}>X</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <p className={styles.cell_text}>X</p>
        </div>
        <div className={styles.cell}>
          <p className={styles.cell_text}>X</p>
        </div>
        <div className={styles.cell}>
          <p className={styles.cell_text}>X</p>
        </div>
      </div>
    </div>
  );
};

export default Matrix;
