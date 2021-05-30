/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import usePersistedState from '../../helper/usePersistedToState';

import Countdown from '../Countdown';
import TimeConfigs from '../TimeConfigs';

const App: React.FC = () => {
  const initalPresets = ['05:00', '08:00', '10:00'];
  const [presets, setPresets] = usePersistedState('presetsStorage', initalPresets);
  const [startMsg, setStartMsg] = usePersistedState('startMsg', 'goTrybe');
  const [endMsg, setEndMsg] = usePersistedState('endMsg', 'STOP');

  const sharedProps = {
    presets,
    startMsg,
    endMsg,
  };
  const setConfigsProps = {
    setPresets,
    setStartMsg,
    setEndMsg,
  };

  return (
    <Switch>
      <Route path="/settings">
        <TimeConfigs sharedProps={sharedProps} setConfigsProps={setConfigsProps} />
      </Route>
      <Route path="/">
        <Countdown sharedProps={sharedProps} />
      </Route>
    </Switch>
  );
};

export default App;
