import React from 'react';

import propsPresetsTypes from './types';

export default function Presets(propsPresets: propsPresetsTypes) {
  const { presets, setLocalStorage } = propsPresets;

  const renderPresetsButtons = () => (
    presets.map((preset) => (
      <button
        key={preset}
        type="button"
        onClick={() => setLocalStorage(preset)}
      >
        {preset}
      </button>
    ))
  );

  return (
    <div>
      {renderPresetsButtons()}
    </div>
  );
}
