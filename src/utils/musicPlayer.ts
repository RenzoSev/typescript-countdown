const filterLink = (link: string) => {
  const isWebLink = link.includes('watch?v=');
  return isWebLink
    ? link.split('watch?v=')[1]
    : link.split('/')[3];
};

export const lofiLink = 'https://www.youtube.com/watch?v=5qap5aO4i9A';

export const getLink = (link: string, playCountdown: boolean) => {
  const filteredLink = filterLink(link);
  return `https://www.youtube.com/embed/${filteredLink}?autoplay=${playCountdown ? 1 : 0}`;
};

export const getDefaultLink = (link: string) => {
  const filteredLink = filterLink(link);
  return `https://www.youtube.com/embed/${filteredLink}`;
};
