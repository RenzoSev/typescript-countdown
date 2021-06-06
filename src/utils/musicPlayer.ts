export const lofiLink = 'https://www.youtube.com/watch?v=0neO8Q33YC4';

export const getLink = (link: string, playCountdown: boolean) => {
  const filteredLink = link.split('=')[1];
  return `https://www.youtube.com/embed/${filteredLink}?autoplay=${playCountdown ? 1 : 0}`;
};
