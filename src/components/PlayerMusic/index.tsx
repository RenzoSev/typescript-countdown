import React, { useState } from 'react';

import PlayerMusicTypes from './types';

import Section from './styles';
import { getLink } from '../../utils/musicPlayer';

export default function PlayerMusic(playerProps: PlayerMusicTypes) {
  const {
    isActive, playCountdown, userLinkPlayer, setUserLinkPlayer,
  } = playerProps;

  const [inputLink, setInputLink] = useState('');
  const filteredLink = getLink(userLinkPlayer, playCountdown);

  return (
    <Section isActive={isActive}>
      <input onChange={(e) => setInputLink(e.target.value)} />
      <iframe
        width="280"
        height="157.5"
        src={filteredLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <button
        type="button"
        onClick={() => setUserLinkPlayer(inputLink)}
      >
        Enviar
      </button>
    </Section>
  );
}
