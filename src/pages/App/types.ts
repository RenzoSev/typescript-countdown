/* eslint-disable no-unused-vars */
import React, { Dispatch, SetStateAction } from 'react';

import {
  CountdownApi,
  CountdownProps,
  CountdownTimeDeltaFormatted,
} from 'react-countdown';

export type CountdownTypes = {
    completed: boolean;
    formatted: CountdownTimeDeltaFormatted;
    props: CountdownProps;
    api: CountdownApi;
 }

export type setTimeInfoTypes = {
  setTime: Dispatch<SetStateAction<number>>;
  symbol: string;
  time: number;
 }

export type timeTypes = {
  dec: {
    dec: number,
    oldDec: number | undefined,
    setDec: Dispatch<SetStateAction<number>>
  },
  unit: {
    unit: number,
    oldUnit: number | undefined,
  },
}
