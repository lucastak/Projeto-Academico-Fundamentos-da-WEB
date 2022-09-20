import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className="container">
      <div className={styles["error__container"]}>
        <h1>Página Error</h1>
      </div>
    </div>
  );
}
