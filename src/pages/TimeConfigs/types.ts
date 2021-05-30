import { Dispatch, SetStateAction } from 'react';

type TimeConfigsTypes = {
    presets: string[];
    setPresets: Dispatch<SetStateAction<string[]>>;
}

export default TimeConfigsTypes;
