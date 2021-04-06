import React from 'react';
import InfoIcon from 'assets/alert/InfoIcon';
import SuccessIcon from 'assets/alert/SuccessIcon';
import ErrorIcon from 'assets/alert/ErrorIcon';
import CloseIcon from 'assets/alert/CloseIcon';
import { AlertComponentPropsWithStyle } from 'react-alert';
import './styles.css';

const AlertTemplate = ({ style, message, options, close }: AlertComponentPropsWithStyle) => {
  const icon = () => {
    if (options.type === 'info') return <InfoIcon />;
    if (options.type === 'success') return <SuccessIcon />
    if (options.type === 'error') return <ErrorIcon />
  }

  const customStyle = () => {
    let obj = {
      color: 'white',
      backgroundColor: 'black',
    };
    if (options.type === 'info') obj.backgroundColor = '#1b8da7';
    if (options.type === 'success') obj.backgroundColor = '#74ac35';
    if (options.type === 'error') obj.backgroundColor = '#ed4747';
    return obj;
  }

  return (
    <div className="alert" style={{...style, ...customStyle()}}>
      {icon()}
      <span style={{ flex: 2 }}>{message}</span>
      <button onClick={close} className="alert-button">
        <CloseIcon />
      </button>
    </div>
  )
}

export default AlertTemplate