import React from 'react';
import { ReactComponent as PcIcon } from 'assets/survey/pc.svg';
import { ReactComponent as XboxIcon } from 'assets/survey/xbox.svg';
import { ReactComponent as PlaystationIcon } from 'assets/survey/playstation.svg';
import { GamePlatform } from 'pages/Survey/types';
import './styles.css';

type Props = {
  platform: GamePlatform;
  onChange: (platform: GamePlatform) => void;
  activePlatform?: GamePlatform;
}

const PlatformCard = ({
  platform,
  onChange,
  activePlatform
}: Props) => {
  const isActive = platform === activePlatform;
  const backgroundColor = isActive ? '#fad7c8' : '#FFF';
  const textColor = isActive ? '#ED7947' : '#9E9E9E';
  const icon = () => {
    if (platform === 'PC') return <PcIcon className="platform-card__icon" style={{color: textColor}}/>;
    if (platform === 'XBOX') return <XboxIcon className="platform-card__icon" style={{color: textColor}}/>;
    if (platform === 'PLAYSTATION') return <PlaystationIcon className="platform-card__icon" style={{color: textColor}}/>;
  }
  const text = () => {
    if (platform === 'PC') return 'PC';
    if (platform === 'XBOX') return 'XBOX';
    if (platform === 'PLAYSTATION') return 'PS';
  }

  return (
    <div 
      className="platform-card" style={{backgroundColor: backgroundColor}}
      onClick={() => onChange(platform)}
    >
      {icon()}
      <div className="platform-card__text" style={{color: textColor}}>{text()}</div>
    </div>
  );
}

export default PlatformCard;