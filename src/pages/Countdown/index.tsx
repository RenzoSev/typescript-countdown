/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { GoGear } from 'react-icons/go';
import Lottie from 'react-lottie';

import {
  convertCountdownToNumbers,
  convertDecAndUnit,
  convertMinToMili,
  convertSecToMili,
} from '../../utils/convertTime';
import fixTimeToDisplay from '../../utils/changeTimeToDisplay';

import {
  CountdownTypes,
  propsCountDownTypes,
  setTimeInfoTypes,
  timeTypes,
} from './types';

import { getStorage, setStorage } from '../../helper/localStorage';
import usePrevious from '../../helper/usePrevious';

import Presets from '../../components/Presets';
import SetCountdown from '../../components/SetCountdown';

import trybenger1 from '../../assets/trybengers/trybenger1.jpg';
import trybenger2 from '../../assets/trybengers/trybenger2.png';
import trybenger3 from '../../assets/trybengers/trybenger3.jpeg';

import animationData from '../../lotties/coffee-time.json';

import { Section, DivLottie } from './styles';
import DivChangePage from '../../styles/styles';

const CountDown = (propsCountDown: propsCountDownTypes) => {
  const { sharedProps, trybengers } = propsCountDown;
  const { startMsg, endMsg, presets } = sharedProps;

  const [playCountdown, setPlayCount] = useState(false);
  const getPlayCount = () => setPlayCount(!playCountdown);

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

    const timeResult = filteredTime.minutes + filteredTime.seconds;

    return timeResult;
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
    const timeResult = Date.now() + getCountdownTime();

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
        date={timeResult}
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

  const getRandomImg = () => {
    const imagesUrl = [trybenger1, trybenger2, trybenger3];
    const randomNum = Math.floor(Math.random() * imagesUrl.length);
    return imagesUrl[randomNum];
  };

  const stylesImage = {
    backgroundImage: `url(${getRandomImg()})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  };

  const defaultOptions = {
    loop: true,
    autoplay: playCountdown,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    const countdownStorage = getStorage('countdown');
    if (countdownStorage) setLocalStorageToState(countdownStorage);
  }, [playCountdown]);

  useEffect(() => {
    const timer = `${decMinutes}${unitMinutes}:${decSeconds}${unitSeconds}`;
    if (oldState) setStorage('countdown', timer);
  });

  return (
    <>
      <DivChangePage>
        <Link to="/settings">
          <GoGear />
        </Link>
      </DivChangePage>

      <DivLottie>
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
          isPaused={!playCountdown}
        />
      </DivLottie>

      <Section style={trybengers ? stylesImage : {}}>
        {checkWhatWillBeRender()}

        <button
          type="button"
          onClick={() => getPlayCount()}
        >
          {playCountdown ? endMsg : startMsg}
        </button>

        <Presets
          presets={presets}
          setLocalStorage={setLocalStorageToState}
          playCountdown={playCountdown}
        />
      </Section>
    </>
  );
};

export default CountDown;
