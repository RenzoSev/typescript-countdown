/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import React, { ChangeEvent, useState } from 'react';

import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';

import { convertNumbersToCountdown } from '../../utils/convertTime';

import TimeConfigsTypes from './types';

import { Section, DivPresets } from './styles';
import DivChangePage from '../../styles/styles';

export default function TimeConfigs(propsConfigs: TimeConfigsTypes) {
  const { sharedProps, setConfigsProps } = propsConfigs;
  const { setPresets, setStartMsg, setEndMsg } = setConfigsProps;
  const { presets } = sharedProps;

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

  const renderInputMsg = (text: string, setMsg: React.Dispatch<React.SetStateAction<string>>) => (
    <div>
      <p>{text}</p>
      <input
        onChange={(e) => setMsg(e.target.value)}
      />
    </div>
  );

  return (
    <Section>
      <DivChangePage>
        <Link to="/">
          <RiArrowGoBackLine />
        </Link>
      </DivChangePage>

      <div>
        {renderPresets()}

        <button
          type="button"
          onClick={() => setPresets(localPresets)}
        >
          Save
        </button>

        {renderInputMsg('Button Start', setStartMsg)}

        {renderInputMsg('Button Stop', setEndMsg)}
      </div>
    </Section>
  );
}
