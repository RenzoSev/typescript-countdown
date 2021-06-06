const filterLink = (link: string) => link.split('=')[1];

export const lofiLink = 'https://www.youtube.com/watch?v=5qap5aO4i9A';

export const getLink = (link: string, playCountdown: boolean) => {
  const filteredLink = filterLink(link);
  return `https://www.youtube.com/embed/${filteredLink}?autoplay=${playCountdown ? 1 : 0}`;
};

export const getDefaultLink = (link: string) => {
  const filteredLink = filterLink(link);
  return `https://www.youtube.com/embed/${filteredLink}`;
};
