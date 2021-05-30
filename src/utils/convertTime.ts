export const convertDecAndUnit = (dec: number, unit: number) => dec * 10 + unit;

export const convertMinToMili = (minutes: number) => minutes * 60000;

export const convertSecToMili = (seconds: number) => seconds * 1000;

export const convertCountdownToNumbers = (countdown: string) => (
  countdown.split(':').join('').split('')
);

export const convertNumbersToCountdown = (countdown: string[]) => {
  const presetCountdown = countdown;
  presetCountdown.splice(1, 0, ':');
  return presetCountdown.join('');
};
