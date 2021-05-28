/* eslint-disable no-unused-vars */
import React from 'react';
import { setTimeInfoTypes } from '../../types';

export type propsTypes = {
    dataTime: {
      minutes: {
        dec: {
          dec: number;
          setDec: React.Dispatch<React.SetStateAction<number>>;
        }
        unit: {
          unit: number;
          setUnit: React.Dispatch<React.SetStateAction<number>>;
        }
      },
      seconds: {
        dec: {
          dec: number;
          setDec: React.Dispatch<React.SetStateAction<number>>;
        }
        unit: {
          unit: number;
          setUnit: React.Dispatch<React.SetStateAction<number>>;
        }
      },
  };
  handleClickTime: (setTimeInfos: setTimeInfoTypes, isDec: boolean) => void;
}

export type timeTypes = {
  dec: {
    dec: number;
    setDec: React.Dispatch<React.SetStateAction<number>>;
  }
  unit: {
    unit: number;
    setUnit: React.Dispatch<React.SetStateAction<number>>;
  }
}

export type buttonTypes = {
  buttonDec: boolean,
  buttonUnit: boolean,
}
