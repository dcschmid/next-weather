import Image from "next/image";
import styles from "./MetricsCard.module.css";

type Props = {
  title: string;
  iconSrc: string;
  metric: any;
  unit?: any;
};

export const MetricsCard = ({ title, iconSrc, metric, unit }: Props) => {
  console.log(title, metric);
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <div className={styles.content}>
        <Image width="100px" height="100px" src={iconSrc} alt="Weather Icon" />
        <div>
          <h2>{metric}</h2>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  );
};
