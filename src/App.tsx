/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Countdown from 'react-countdown';
import SetCountdown from './components/SetCountdown';

import Section from './styles';

import { CountdownTypes, setTimeInfoTypes } from './types';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [playCountDown, setPlayCount] = useState(false);
  const getPlayCount = (playcount: boolean) => setPlayCount(!playcount);

  const [decMinutes, setDecMinutes] = useState(1);
  const [unitMinutes, setUnitMinutes] = useState(2);
  const [decSeconds, setDecSeconds] = useState(3);
  const [unitSeconds, setUnitSeconds] = useState(4);
  const handleClickTime = (setTimeInfos: setTimeInfoTypes) => {
    const { setTime, symbol, time } = setTimeInfos;
    const setTimeOperations: {[key: string]: number} = {
      '+': time + 1,
      '-': time - 1,
    };

    const operationResult = setTimeOperations[symbol];
    setTime(operationResult);
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
        date={Date.now() + 3000}
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
          oi!
        </button>
      </Section>
    </div>
  );
};

export default App;
