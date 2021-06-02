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

import { TimeConfigsTypes, renderInputMsgTypes } from './types';

import { Section, DivPresets, DivInputs } from './styles';
import DivChangePage from '../../styles/styles';

export default function TimeConfigs(propsConfigs: TimeConfigsTypes) {
  const { sharedProps, setConfigsProps, theme } = propsConfigs;
  const {
    setPresets,
    setStartMsg,
    setEndMsg,
    startMsg,
    endMsg,
  } = setConfigsProps;
  const { presets } = sharedProps;

  const [localPresets, setLocalPresets] = useState(presets);

  const [valueStart, setValueStart] = useState('');
  const [valueEnd, setValueEnd] = useState('');

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

  const renderInputMsg = (inputProps: renderInputMsgTypes) => {
    const {
      msg,
      placeholder,
      setStateApp,
      setStateConfig,
    } = inputProps;

    const borderStyle = msg
      ? `1px solid ${theme.colors.primary}`
      : `1px solid ${theme.colors.text}`;

    return (
      <DivInputs>
        <input
          onChange={(e) => {
            setStateConfig(e.target.value);
            setStateApp(e.target.value);
          }}
          placeholder={placeholder}
          value={msg}
          style={{ borderBottom: borderStyle }}
        />
      </DivInputs>
    );
  };

  const inputsText = {
    start: {
      msg: valueStart,
      placeholder: startMsg,
      setStateApp: setStartMsg,
      setStateConfig: setValueStart,
    },
    end: {
      msg: valueEnd,
      placeholder: endMsg,
      setStateApp: setEndMsg,
      setStateConfig: setValueEnd,
    },
  };

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

          {renderInputMsg(inputsText.start)}

          {renderInputMsg(inputsText.end)}
        </div>
      </main>
    </Section>
  );
}
