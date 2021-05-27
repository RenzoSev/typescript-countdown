/* eslint-disable no-unused-vars */

import React, { useState, Dispatch, SetStateAction } from 'react';

import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from 'react-icons/md';

import { propsTypes, timeTypes, objTimeTypes } from './types';
import { setTimeInfoTypes } from '../../types';

import Section from './styles';

export default function SetCountdown(propsTime : propsTypes) {
  const { dataTime, handleClickTime } = propsTime;
  const { minutes, seconds } = dataTime;

  const getTimeObj = (setTime: Dispatch<SetStateAction<number>>, time: number, symbol: string) => (
    { setTime, symbol, time }
  );

  const renderCountDown = (time: timeTypes) => {
    const { dec, unit } = time;

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
            onClick={() => handleClickTime(clickDec.more)}
          >
            <MdKeyboardArrowUp />
          </button>
          <span>{dec.dec}</span>
          <button
            type="button"
            onClick={() => handleClickTime(clickDec.less)}
          >
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => handleClickTime(clickUnit.more)}
          >
            <MdKeyboardArrowUp />
          </button>
          <span>{unit.unit}</span>
          <button
            type="button"
            onClick={() => handleClickTime(clickUnit.less)}
          >
            <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
    );
  };

  return (
    <Section>
      {renderCountDown(minutes)}
      <p>:</p>
      {renderCountDown(seconds)}
    </Section>
  );
}
