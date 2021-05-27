import {
  CountdownApi,
  CountdownProps,
  CountdownTimeDeltaFormatted,
} from 'react-countdown';

type CountdownTypes = {
    completed: boolean;
    formatted: CountdownTimeDeltaFormatted;
    props: CountdownProps;
    api: CountdownApi;
 }

export default CountdownTypes;
