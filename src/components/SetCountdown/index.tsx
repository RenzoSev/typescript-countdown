/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from 'react-icons/md';

import { propsTypes, timeTypes } from './types';

import Section from './styles';

export default function SetCountdown({ dataTime } : propsTypes) {
  const { minutes, seconds } = dataTime;

  const renderCountDown = (time: timeTypes) => {
    const { dec, unit } = time;
    return (
      <div>
        <div>
          <button type="button">
            <MdKeyboardArrowUp />
          </button>
          <span>{dec}</span>
          <button type="button">
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div>
          <button type="button">
            <MdKeyboardArrowUp />
          </button>
          <span>{unit}</span>
          <button type="button">
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
