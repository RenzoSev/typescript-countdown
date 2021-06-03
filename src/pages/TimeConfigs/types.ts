import { Dispatch, SetStateAction } from 'react';
import sharedPropsTypes from '../../types';

type setConfigsProps = {
    setPresets: Dispatch<SetStateAction<string[]>>;
    startMsg: string;
    setStartMsg: Dispatch<SetStateAction<string>>;
    setEndMsg: Dispatch<SetStateAction<string>>;
    endMsg: string;
}

export interface TimeConfigsTypes extends sharedPropsTypes {
    setConfigsProps: setConfigsProps;
    setTrybengers: Dispatch<SetStateAction<boolean>>;
    trybengers: boolean;
    theme: {
        title: string,

        colors: {
            primary: string;
            secundary: string;
            primaryTransparent: string,

            background: string;
            backgroundConfigs: string;
            text: string;
        },
    }
}

export type renderInputMsgTypes = {
    msg: string,
    placeholder: string,
    setStateApp: Dispatch<SetStateAction<string>>,
    setStateConfig: Dispatch<SetStateAction<string>>,
}
