/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import React, {
  ChangeEvent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';

import { convertNumbersToCountdown, convertCountdownToNumbers } from '../../utils/convertTime';

import TimeConfigsTypes from './types';

import { Section, DivPresets, DivInputs } from './styles';
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

    const timeConverted = convertCountdownToNumbers(presets[index]);
    const timeConvertedObj: {[key: string]: string} = {
      minutes: timeConverted[0] + timeConverted[1],
      seconds: timeConverted[2] + timeConverted[3],
    };

    return (
      <select
        onChange={(e) => sendNewPreset(e, index, time)}
        defaultValue={timeConvertedObj[time]}
      >
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
            {renderSelect(index, 'minutes')}
          </div>

          <span>:</span>

          <div>
            {renderSelect(index, 'seconds')}
          </div>
        </DivPresets>
      )));
  };

  const renderInputMsg = (text: string, setMsg: Dispatch<SetStateAction<string>>) => (
    <DivInputs>
      <input
        onChange={(e) => setMsg(e.target.value)}
        placeholder={text}
      />
    </DivInputs>
  );

  return (
    <Section>
      <DivChangePage>
        <Link to="/">
          <RiArrowGoBackLine />
        </Link>
      </DivChangePage>

      <main>
        <div>
          {renderPresets()}

          <button
            type="button"
            onClick={() => setPresets(localPresets)}
          >
            Save
          </button>

          {renderInputMsg('Start Button', setStartMsg)}

          {renderInputMsg('Stop Button', setEndMsg)}
        </div>
      </main>
    </Section>
  );
}
