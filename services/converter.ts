// cToF takes in temperature value in Celsius and returns the value in Fahrenheit.
export const ctoF = (c: number) => (c * 9) / 5 + 32;

// mpsToMph takes in the wind speed value in meters per second and returns the value in miles per hour.
export const mpsToMph = (mps: number) => (mps * 2.236936).toFixed(2);

// kmToMiles takes in distance value in kilometers and returns the value in miles.
export const kmToMiles = (km: number) => (km / 1.609).toFixed(1);

// timeTo12HourFormat takes in the time value in 24-hour format and returns the value in 12-hour format
// (for example: 22:32 to 10:32).
export const timeTo12HourFormat = (time: any) => {
  let [hours, minutes] = time.split(":");

  return `${(hours %= 12) ? hours : 12}:${minutes}`;
};

// degToCompass takes in the angle in degrees and returns the corresponding direction. First, we divide the angle by 22.5,
// because there are 16 directions (360/16), then round the value to the nearest integer, which we then use to calculate
// modulus from and detect the position in the given array of direction names.
export const degToCompass = (num: number) => {
  var val = Math.round(num / 22.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];

  return arr[val % 16];
};

// unixToLocalTime takes in the UNIX time in seconds (UTC) and the difference in the seconds for the local timezone.
// The new Date object is created, where both values are added and then multiplied by 1000, since Date object requires
// milliseconds. Then we use regex to get the first result that follows the hh:mm pattern. Finally, if the returned
// string starts with “0”, we remove the first character (for example, 07:12 to 7:12).
export const unixToLocalTime = (unixSeconds: any, timezone: any) => {
  let time = new Date((unixSeconds + timezone) * 1000)
    .toISOString()
    .match(/(\d{2}:\d{2})/)?.[0];

  if (time) return time.startsWith("0") ? time.substring(1) : time;

  return;
};
