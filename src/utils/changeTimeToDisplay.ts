export const fixTimeToDisplay = (time: number, maxTime: number) => {
  if (time > maxTime) return 0;
  if (time < 0) return maxTime;
  return time;
};

export default fixTimeToDisplay;
