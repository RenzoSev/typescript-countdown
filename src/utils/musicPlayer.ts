export const lofiLink = 'https://www.youtube.com/watch?v=5qap5aO4i9A';

export const getLink = (link: string, playCountdown: boolean) => {
  const filteredLink = link.split('=')[1];
  return `https://www.youtube.com/embed/${filteredLink}?autoplay=${playCountdown ? 1 : 0}`;
};
