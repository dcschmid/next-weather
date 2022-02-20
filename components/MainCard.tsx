import Image from "next/image";
import { ctoF } from "../services/converter";
import styles from "./MainCard.module.css";

type Props = {
  city: string;
  country: string;
  description: string;
  iconName: string;
  unitSystem: string;
  weatherData: any;
};

export const MainCard = ({
  city,
  country,
  description,
  iconName,
  unitSystem,
  weatherData,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{description}</p>
      <Image
        width="300px"
        height="300px"
        src={`/icons/${iconName}.svg`}
        alt="weather icon"
      />
      <h2 className={styles.temperature}>
        {unitSystem == "metric"
          ? Math.round(weatherData.main.temp)
          : Math.round(ctoF(weatherData.main.temp))}
        °{unitSystem == "metric" ? "C" : "F"}
      </h2>
      <p>
        Feels like{" "}
        {unitSystem == "metric"
          ? Math.round(weatherData.main.feels_like)
          : Math.round(ctoF(weatherData.main.feels_like))}
        °{unitSystem == "metric" ? "C" : "F"}
      </p>
    </div>
  );
};
