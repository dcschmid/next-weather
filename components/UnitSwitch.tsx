import styles from "./UnitSwitch.module.css";

type Props = {
  onClick: any;
  unitSystem: string;
};

export const UnitSwitch = ({ onClick, unitSystem }: Props) => {
  return (
    <div className={styles.wrapper}>
      <p
        className={`${styles.switch} ${
          unitSystem == "metric" ? styles.active : styles.inactive
        }`}
        onClick={onClick}
      >
        Metric System
      </p>
      <p
        className={`${styles.switch} ${
          unitSystem == "metric" ? styles.inactive : styles.active
        }`}
        onClick={onClick}
      >
        Imperial System
      </p>
    </div>
  );
};
