/* eslint-disable no-unused-vars */

import React, { useEffect, useState, useRef } from 'react';
import Countdown from 'react-countdown';
import SetCountdown from './components/SetCountdown';

import Section from './styles';

import {
  convertDecAndUnit,
  convertMinToMili,
  convertSecToMili,
} from './utils/convertTime';
import fixTheTimeToDisplay from './utils/changeTimeToDisplay';
import { CountdownTypes, setTimeInfoTypes } from './types';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const usePrevious = <T extends unknown>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const [playCountDown, setPlayCount] = useState(false);
  const getPlayCount = (playcount: boolean) => setPlayCount(!playcount);

  const [decMinutes, setDecMinutes] = useState(0);
  const [unitMinutes, setUnitMinutes] = useState(0);
  const [decSeconds, setDecSeconds] = useState(0);
  const [unitSeconds, setUnitSeconds] = useState(0);
  const states = {
    decMinutes,
    unitMinutes,
    decSeconds,
    unitSeconds,
  };

  const oldState = usePrevious(states);
  const checkOldState = () => {
    const checkDecSecChange = oldState?.decSeconds === decSeconds;
    const checkUnitSecChange = unitSeconds === 0 && oldState?.unitSeconds === 9;
    if (checkDecSecChange && checkUnitSecChange) {
      setDecSeconds(decSeconds + 1);
    }
  };

  const handleClickTime = (setTimeInfos: setTimeInfoTypes) => {
    const { setTime, symbol, time } = setTimeInfos;
    const setTimeOperations: {[key: string]: number} = {
      '+': time + 1,
      '-': time - 1,
    };

    const operationResult = setTimeOperations[symbol];
    const fixTimeResult = fixTheTimeToDisplay(operationResult);
    setTime(fixTimeResult);
  };
  const dataTime = {
    minutes: {
      dec: {
        dec: decMinutes,
        setDec: setDecMinutes,
      },
      unit: {
        unit: unitMinutes,
        setUnit: setUnitMinutes,
      },
    },
    seconds: {
      dec: {
        dec: decSeconds,
        setDec: setDecSeconds,
      },
      unit: {
        unit: unitSeconds,
        setUnit: setUnitSeconds,
      },
    },
  };
  const getCountdownTime = () => {
    const minutes = convertDecAndUnit(decMinutes, unitMinutes);
    const seconds = convertDecAndUnit(decSeconds, unitSeconds);

    const filteredTime = {
      minutes: convertMinToMili(minutes),
      seconds: convertSecToMili(seconds),
    };

    return filteredTime.minutes + filteredTime.seconds;
  };

  const Completionist = () => <span>VQV!</span>;
  const renderer = (countDown: CountdownTypes) => {
    const {
      completed,
      formatted,
      props: propsCount,
      api,
    } = countDown;

    const { minutes, seconds } = formatted;
    const { autoStart } = propsCount;
    const { start } = api;

    const timer = `${minutes}:${seconds}`;

    if (!autoStart) {
      start();
      setPlayCount(!autoStart);
    }

    if (completed) return <Completionist />;
    return <span>{timer}</span>;
  };

  checkOldState();

  const checkWhatWillBeRender = () => {
    if (!playCountDown) {
      return (
        <SetCountdown
          dataTime={dataTime}
          handleClickTime={handleClickTime}
        />
      );
    }
    return (
      <Countdown
        date={Date.now() + getCountdownTime()}
        renderer={renderer}
        autoStart={playCountDown}
      />
    );
  };

  return (
    <div>
      <GlobalStyle />
      <Section>
        {checkWhatWillBeRender()}
        <button
          type="button"
          onClick={() => getPlayCount(playCountDown)}
        >
          {playCountDown ? 'stop' : 'goTrybe!'}
        </button>
      </Section>
    </div>
  );
};

export default App;
