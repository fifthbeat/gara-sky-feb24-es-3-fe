export const formatSecondsToMinutes = (seconds: string): string => {
  const sec = Number(seconds);
  if (isNaN(sec)) return "Invalid input";

  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const remainingSeconds = sec % 60;

  const secString = remainingSeconds === 0 ? "" : `${remainingSeconds}s`;

  if (hours > 0) {
    return `${hours}h ${minutes}m ${secString}`;
  } else if (minutes > 0) {
    return `${minutes}m ${secString}`;
  } else {
    return `${secString}`;
  }
};
