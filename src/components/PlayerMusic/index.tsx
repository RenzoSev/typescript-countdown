import React, { useState } from 'react';

import { checkMobileOrDesktop } from '../../utils/checkDisplayDevice';
import { getDefaultLink, getLink } from '../../utils/musicPlayer';
import PlayerMusicTypes from './types';

import Section from './styles';
import usePersistedState from '../../helper/usePersistedToState';

export default function PlayerMusic(playerProps: PlayerMusicTypes) {
  const {
    isActive, playCountdown, userLinkPlayer, setUserLinkPlayer,
  } = playerProps;

  const [inputLink, setInputLink] = useState('');
  const [autoPlay, setAutoPlay] = usePersistedState('autoPlay', true);

  const isDesktop = checkMobileOrDesktop();
  const isDesktopAndAutoPlay = isDesktop && autoPlay;
  const filteredLink = isDesktopAndAutoPlay
    ? getLink(userLinkPlayer, playCountdown)
    : getDefaultLink(userLinkPlayer);

  return (
    <Section isActive={isActive} isDesktop={isDesktop}>
      <input onChange={(e) => setInputLink(e.target.value)} />

      <label htmlFor="autoplay">
        <input
          type="checkbox"
          id="autoplay"
          onChange={(e) => setAutoPlay(e.target.checked)}
          checked={autoPlay}
        />
        autoplay
      </label>

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
        Play
      </button>
    </Section>
  );
}
