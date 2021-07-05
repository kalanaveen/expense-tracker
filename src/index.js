import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="6a3cdc0c-a2a8-4511-8086-523bcc99bb8e" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>
    , document.getElementById('root'));