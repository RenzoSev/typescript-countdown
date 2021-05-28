/* eslint-disable no-unused-vars */

import React, {
  useEffect,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react';
import Countdown from 'react-countdown';
import SetCountdown from './components/SetCountdown';

import Section from './styles';

import {
  convertDecAndUnit,
  convertMinToMili,
  convertSecToMili,
} from './utils/convertTime';
import fixTimeToDisplay from './utils/changeTimeToDisplay';
import { CountdownTypes, setTimeInfoTypes, timeTypes } from './types';

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

    if (checkDecSecChange && checkUnitSecChange) {
      dec.setDec(dec.dec + 1);
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
