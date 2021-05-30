/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';

import Countdown from '../Countdown';
import TimeConfigs from '../TimeConfigs';

const App: React.FC = () => {
  const initalPresets = ['05:00', '08:00', '10:00'];
  const [presets, setPresets] = useState(initalPresets);

  return (
    <Switch>
      <Route path="/settings">
        <TimeConfigs presets={presets} setPresets={setPresets} />
      </Route>
      <Route path="/">
        <Countdown presets={presets} />
      </Route>
    </Switch>
  );
};

export default App;
