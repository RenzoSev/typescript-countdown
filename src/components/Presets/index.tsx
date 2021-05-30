import React from 'react';

import propsPresetsTypes from './types';

import DivPresets from './styles';

export default function Presets(propsPresets: propsPresetsTypes) {
  const { presets, setLocalStorage, playCountdown } = propsPresets;

  const renderPresetsButtons = () => (
    presets.map((preset) => (
      <button
        key={preset}
        type="button"
        onClick={() => setLocalStorage(preset)}
        disabled={playCountdown}
      >
        {preset}
      </button>
    ))
  );

  return (
    <DivPresets>
      {renderPresetsButtons()}
    </DivPresets>
  );
}
