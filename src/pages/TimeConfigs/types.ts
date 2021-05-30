import { Dispatch, SetStateAction } from 'react';
import sharedPropsTypes from '../../types';

type setConfigsProps = {
    setPresets: Dispatch<SetStateAction<string[]>>;
    setStartMsg: Dispatch<SetStateAction<string>>;
    setEndMsg: Dispatch<SetStateAction<string>>;
}

interface TimeConfigsTypes extends sharedPropsTypes {
    setConfigsProps: setConfigsProps;

}

export default TimeConfigsTypes;
