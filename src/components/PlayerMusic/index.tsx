import React from 'react';

import PlayerMusicTypes from './types';

import Section from './styles';

export default function PlayerMusic(playerProps: PlayerMusicTypes) {
  const { isActive, playCountdown } = playerProps;
  return (
    <Section isActive={isActive}>
      <iframe
        width="280"
        height="157.5"
        src={`https://www.youtube.com/embed/5qap5aO4i9A?autoplay=${playCountdown ? 1 : 0}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Section>
  );
}
