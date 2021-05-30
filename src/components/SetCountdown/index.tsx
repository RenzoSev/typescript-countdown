/* eslint-disable no-unused-vars */
import React, { Dispatch, SetStateAction } from 'react';

import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from 'react-icons/md';

import { buttonTypes, propsTypes, timeTypes } from './types';

import Section from './styles';

export default function SetCountdown(propsTime : propsTypes) {
  const { dataTime, handleClickTime } = propsTime;
  const { minutes, seconds } = dataTime;

  const getTimeObj = (setTime: Dispatch<SetStateAction<number>>, time: number, symbol: string) => (
    { setTime, symbol, time }
  );

  const renderCountDown = (time: timeTypes, buttonDisabled: buttonTypes) => {
    const { dec, unit } = time;
    const { buttonDec, buttonUnit } = buttonDisabled;

    const clickTime = {
      clickDec: {
        more: getTimeObj(dec.setDec, dec.dec, '+'),
        less: getTimeObj(dec.setDec, dec.dec, '-'),
      },
      clickUnit: {
        more: getTimeObj(unit.setUnit, unit.unit, '+'),
        less: getTimeObj(unit.setUnit, unit.unit, '-'),
      },
    };
    const { clickDec, clickUnit } = clickTime;

    return (
      <div>
        <div>
          <button
            type="button"
            onClick={() => handleClickTime(clickDec.more, true)}
            disabled={buttonDec}
          >
            <MdKeyboardArrowUp />
          </button>
          <span>{dec.dec}</span>
          <button
            type="button"
            onClick={() => handleClickTime(clickDec.less, true)}
          >
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => handleClickTime(clickUnit.more, false)}
            disabled={buttonUnit}
          >
            <MdKeyboardArrowUp />
          </button>
          <span>{unit.unit}</span>
          <button
            type="button"
            onClick={() => handleClickTime(clickUnit.less, false)}
          >
            <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
    );
  };

  const minButtonDec = minutes.dec.dec === 5;
  const minButtonUnit = minButtonDec && minutes.unit.unit === 9;
  const minutesButtonDisable = {
    buttonDec: minButtonDec,
    buttonUnit: minButtonUnit,
  };

  const secButtonDec = minButtonUnit && seconds.dec.dec === 5;
  const secButtonUnit = secButtonDec && seconds.unit.unit === 9;
  const secondsButtonDisable = {
    buttonDec: secButtonDec,
    buttonUnit: secButtonUnit,
  };

  return (
    <Section>
      {renderCountDown(minutes, minutesButtonDisable)}
      <p>:</p>
      {renderCountDown(seconds, secondsButtonDisable)}
    </Section>
  );
}
