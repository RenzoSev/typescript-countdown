/* eslint-disable no-unused-vars */

import React, { ChangeEvent, useState } from 'react';

import TimeConfigsTypes from './types';

import Section from './styles';

export default function TimeConfigs(propsConfigs: TimeConfigsTypes) {
  const { presets, setPresets } = propsConfigs;

  const [newPresets, setNewPresets] = useState(presets);

  const sendNewPreset = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
    const { value } = e.target;

    console.log(value);

    // const splicedPresets = [...presets];
    // splicedPresets.splice(index, 1, value);

    // setNewPresets(splicedPresets);
  };

  const renderSelect = (index: number) => {
    const arrayFrom59 = Array.from(Array(60).keys());
    const optionsValue = arrayFrom59.map((num) => (`0${num}`).slice(-2));

    return (
      <select onChange={(e) => sendNewPreset(e, index)}>
        {optionsValue.map((num) => (
          <option key={num}>
            {num}
          </option>
        ))}
      </select>
    );
  };
  const renderPresets = () => {
    const arrayFrom59 = Array.from(Array(60).keys());
    const optionsValue = arrayFrom59.map((num) => (`0${num}`).slice(-2));

    return (
      presets.map((preset, index) => (
        <div key={preset}>
          <div>
            <div>
              <p>Minutes</p>
              {renderSelect(index)}
            </div>

            <div>
              <p>Seconds</p>
              {renderSelect(index)}
            </div>
          </div>
        </div>
      )));
  };

  return (
    <Section>
      <div>
        {renderPresets()}
      </div>
    </Section>
  );
}
