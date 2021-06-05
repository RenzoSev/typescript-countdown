/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch as SwitchRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Switch from 'react-switch';
import { shade } from 'polished';

import usePersistedState from '../../helper/usePersistedToState';

import Countdown from '../Countdown';
import TimeConfigs from '../TimeConfigs';

import DivSwitch from './styles';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import GlobalStyle from '../../styles/global';

const App: React.FC = () => {
  const initalPresets = ['05:00', '08:00', '10:00', '15:00'];
  const [presets, setPresets] = usePersistedState('presetsStorage', initalPresets);

  const [startMsg, setStartMsg] = usePersistedState('startMsg', 'goTrybe');
  const [endMsg, setEndMsg] = usePersistedState('endMsg', 'STOP');

  const [theme, setTheme] = usePersistedState('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const [trybengers, setTrybengers] = usePersistedState('trybengers', false);

  const sharedProps = {
    presets,
    startMsg,
    endMsg,
  };
  const setConfigsProps = {
    setPresets,
    startMsg,
    setStartMsg,
    endMsg,
    setEndMsg,
  };

  const isMin768 = useMediaQuery({
    query: '(min-device-width: 768px)',
  });

  const switchDevice = {
    heigth: isMin768 ? 15 : 10,
    width: isMin768 ? 50 : 40,
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <div style={{ position: 'absolute', top: '0', left: '0' }}>
        <iframe
          src="https://open.spotify.com/embed/playlist/1Wrdiaevs2RYscuXxtiBWT"
          title="Spotify"
          width="300"
          height="380"
          frameBorder="0"
          allowTransparency
          allow="encrypted-media"
        />
      </div> */}
      <div>
        <DivSwitch>
          <Switch
            onChange={toggleTheme}
            checked={theme.title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={switchDevice.heigth}
            width={switchDevice.width}
            handleDiameter={18}
            offColor={shade(0.15, theme.colors.primary)}
            onColor={theme.colors.secundary}
          />
        </DivSwitch>
        <GlobalStyle />
        <SwitchRouter>
          <Route path="/settings">
            <TimeConfigs
              sharedProps={sharedProps}
              setConfigsProps={setConfigsProps}
              theme={theme}
              setTrybengers={setTrybengers}
              trybengers={trybengers}
            />
          </Route>
          <Route path="/">
            <Countdown
              sharedProps={sharedProps}
              trybengers={trybengers}
            />
          </Route>
        </SwitchRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
