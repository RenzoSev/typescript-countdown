import { Dispatch, SetStateAction } from 'react';

type PlayerMusicTypes = {
  isActive: boolean;
  playCountdown: boolean;
  userLinkPlayer : string;
  setUserLinkPlayer: Dispatch<SetStateAction<string>>
};

export default PlayerMusicTypes;
