import {
  unixToLocalTime,
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,
} from "./converter";

// getWindSpeed takes in the unit system and wind speed in meters in seconds. If the metric system is used, it returns
// meters per second, otherwise miles per hour.
export const getWindSpeed = (unitSystem: string, windInMps: number) => {
  const windSpeed = unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

  return windSpeed;
};

// getVisibility takes in the unit system and visibility distance in kilometers. If the metric system is used,
// it returns kilometers, otherwise miles.
export const getVisibility = (
  unitSystem: string,
  visibilityInMeters: number
) => {
  const visibility =
    unitSystem == "metric"
      ? (visibilityInMeters / 1000).toFixed(1)
      : kmToMiles(visibilityInMeters / 1000);

  return visibility;
};

// getTime takes in the unit system, current time in UNIX, and the timezone difference of the location. If the metric
// system is used, it returns time in 24-hour format (for example, 17:11), otherwise 12-hour format (for example, 5:11).
export const getTime = (
  unitSystem: string,
  currentTime: any,
  timezone: any
) => {
  const time =
    unitSystem == "metric"
      ? unixToLocalTime(currentTime, timezone)
      : timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

  return time;
};

// getAMPM takes in the unit system, current time in UNIX, and the timezone difference of the location. If the metric system
// is used, it returns an empty string (no value), otherwise AM or PM, based on the given time.
export const getAMPM = (
  unitSystem: string,
  currentTime: number,
  timezone: number
) => {
  const localTime = unixToLocalTime(currentTime, timezone);

  if (localTime)
    return unitSystem === "imperial"
      ? parseInt(localTime.split(":")[0]) >= 12
        ? "PM"
        : "AM"
      : "";
};

// getWeekDay takes in the weatherData object. Based on the current local time from the weatherData, it calculates the day
// of the week using the built-in .getUTCDay() function and then returns the name of the day from the titles array.
export const getWeekDay = (weatherData: any) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekday[
    new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
  ];
};
