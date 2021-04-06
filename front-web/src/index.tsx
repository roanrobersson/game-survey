import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { positions, transitions, Provider as AlertProvider} from 'react-alert';
import Alert from 'core/components/Alert';

const options = {
  position: positions.TOP_CENTER,
  transition: transitions.SCALE,
  timeout: 3000,
  containerStyle: {
    top: 75,
    zIndex: 100,
  }
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={Alert} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);