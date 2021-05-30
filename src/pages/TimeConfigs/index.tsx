/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import React, { ChangeEvent, useState } from 'react';

import TimeConfigsTypes from './types';

import { Section, DivPresets } from './styles';
import { convertNumbersToCountdown } from '../../utils/convertTime';

export default function TimeConfigs(propsConfigs: TimeConfigsTypes) {
  const { presets, setPresets } = propsConfigs;

  const [localPresets, setLocalPresets] = useState(presets);

  const changeMinutes = (preset: string[], value: string) => {
    preset.shift();
    preset.unshift(value);
  };
  const changeSeconds = (preset: string[], value: string) => {
    preset.pop();
    preset.push(value);
  };
  const sendNewPreset = (e: ChangeEvent<HTMLSelectElement>, index: number, time: string) => {
    const { value } = e.target;
    const preset = localPresets[index].split(':');

    const timeIndex: {[key: string]: (preset: string[], value: string) => void} = {
      minutes: changeMinutes,
      seconds: changeSeconds,
    };

    timeIndex[time](preset, value);
    const convertedPreset = convertNumbersToCountdown(preset);

    const splicedPresets = [...localPresets];
    splicedPresets.splice(index, 1, convertedPreset);

    setLocalPresets(splicedPresets);
  };

  const renderSelect = (index: number, time: string) => {
    const arrayFrom59 = Array.from(Array(60).keys());
    const optionsValue = arrayFrom59.map((num) => (`0${num}`).slice(-2));

    return (
      <select onChange={(e) => sendNewPreset(e, index, time)}>
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
        <DivPresets key={preset}>
          <div>
            <p>Minutes</p>
            {renderSelect(index, 'minutes')}
          </div>

          <div>
            <p>Seconds</p>
            {renderSelect(index, 'seconds')}
          </div>
        </DivPresets>
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
