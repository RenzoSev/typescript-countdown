import React from 'react';

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
  setTime: React.Dispatch<React.SetStateAction<number>>;
  symbol: string;
  time: number;
 }
