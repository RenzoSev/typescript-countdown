/* eslint-disable no-unused-vars */

import { useMediaQuery } from 'react-responsive';

const checkDisplay = (range: string, display: string, value: number) => (
  useMediaQuery({ query: `(${range}-device-${display}: ${value}px)` })
);

export const checkMobileOrDesktop = () => checkDisplay('min', 'width', 720);

export const getLottieDevice = () => {
  const isSmallHeight = checkDisplay('max', 'height', 568);
  const isMediumHeight = checkDisplay('max', 'height', 850);
  const isLargeWidth = checkDisplay('min', 'width', 768);

  const largeWidth = isLargeWidth ? 360 : 270;

  if (isSmallHeight) return 190;
  if (isMediumHeight && isLargeWidth) return 280;
  return largeWidth;
};
