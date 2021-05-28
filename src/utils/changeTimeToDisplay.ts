const fixTheTimeToDisplay = (time: number) => {
  if (time > 9) return 0;
  if (time < 0) return 9;
  return time;
};

export default fixTheTimeToDisplay;
