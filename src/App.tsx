/* eslint-disable no-unused-vars */

import React, { useEffect, useState, useRef } from 'react';
import Countdown from 'react-countdown';
import SetCountdown from './components/SetCountdown';

import Section from './styles';

import {
  convertCountdownToNumbers,
  convertDecAndUnit,
  convertMinToMili,
  convertSecToMili,
} from './utils/convertTime';
import fixTimeToDisplay from './utils/changeTimeToDisplay';
import { CountdownTypes, setTimeInfoTypes, timeTypes } from './types';
import { getStorage, setStorage } from './helper/localStorage';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const usePrevious = <T extends unknown>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const [playCountdown, setPlayCount] = useState(false);
  const getPlayCount = () => setPlayCount(!playCountdown);

  const [countdown, setCountdown] = useState('00:00');
  const saveCountDown = (timer: string) => setCountdown(timer);

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
  const dataTime = {
    minutes: {
      dec: {
        dec: decMinutes,
        oldDec: oldState?.decMinutes,
        setDec: setDecMinutes,
      },
      unit: {
        unit: unitMinutes,
        oldUnit: oldState?.unitMinutes,
        setUnit: setUnitMinutes,
      },
    },
    seconds: {
      dec: {
        dec: decSeconds,
        oldDec: oldState?.decSeconds,
        setDec: setDecSeconds,
      },
      unit: {
        unit: unitSeconds,
        oldUnit: oldState?.unitSeconds,
        setUnit: setUnitSeconds,
      },
    },
  };

  const checkUnitToChangeDec = (time: timeTypes) => {
    const { dec, unit } = time;

    const checkDecSecChange = dec.dec === dec.oldDec;
    const checkUnitSecChange = unit.unit === 0 && unit.oldUnit === 9;
    const checkActualDec = (dec.dec + 1) > 5 ? 0 : dec.dec + 1;

    if (checkDecSecChange && checkUnitSecChange) {
      dec.setDec(checkActualDec);
    }
  };
  const checkSecToChangeMin = () => {
    const { seconds, minutes } = dataTime;
    const { unit } = minutes;
    const { dec } = seconds;

    const checkUnitMinChange = unit.unit === unit.oldUnit;
    const checkDecSecChange = dec.dec === 0 && dec.oldDec === 5;
    const checkActualUnit = (unit.unit + 1) > 9 ? 0 : unit.unit + 1;

    if (checkUnitMinChange && checkDecSecChange) {
      unit.setUnit(checkActualUnit);
    }
  };
  const checkOldState = () => {
    const { seconds, minutes } = dataTime;

    checkUnitToChangeDec(seconds);
    checkUnitToChangeDec(minutes);
    checkSecToChangeMin();
  };
  checkOldState();

  const handleClickTime = (setTimeInfos: setTimeInfoTypes, isDec: boolean) => {
    const { setTime, symbol, time } = setTimeInfos;
    const setTimeOperations: {[key: string]: number} = {
      '+': time + 1,
      '-': time - 1,
    };

    const operationResult = setTimeOperations[symbol];
    const maximumTime = isDec ? 5 : 9;
    const fixTimeResult = fixTimeToDisplay(operationResult, maximumTime);
    setTime(fixTimeResult);
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
    setStorage('countdown', timer);

    if (!autoStart) {
      start();
      setPlayCount(!autoStart);
    }

    if (completed) return <Completionist />;
    return <span>{timer}</span>;
  };

  const checkWhatWillBeRender = () => {
    if (!playCountdown) {
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
        autoStart={playCountdown}
        controlled={false}
      />
    );
  };

  const setLocalStorageToState = (countdownStorage: string) => {
    const splitedCountdown = convertCountdownToNumbers(countdownStorage);
    const timeCountdown = {
      decMin: Number(splitedCountdown[0]),
      unitMin: Number(splitedCountdown[1]),
      decSec: Number(splitedCountdown[2]),
      unitSec: Number(splitedCountdown[3]),
    };

    setDecMinutes(timeCountdown.decMin);
    setUnitMinutes(timeCountdown.unitMin);
    setDecSeconds(timeCountdown.decSec);
    setUnitSeconds(timeCountdown.unitSec);
  };

  useEffect(() => {
    const countdownStorage = getStorage('countdown');
    if (countdownStorage) setLocalStorageToState(countdownStorage);
    console.log(playCountdown);
  }, [playCountdown]);

  useEffect(() => {
    const timer = `${decMinutes}${unitMinutes}:${decSeconds}${unitSeconds}`;
    if (oldState) setStorage('countdown', timer);
  });

  return (
    <div>
      <GlobalStyle />
      <Section>
        {checkWhatWillBeRender()}
        <button
          type="button"
          onClick={() => getPlayCount()}
        >
          {playCountdown ? 'Stop' : 'goTrybe!'}
        </button>
      </Section>
    </div>
  );
};

export default App;
