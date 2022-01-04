import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import messages_en from "./lang/en.json";
import messages_es from "./lang/es.json";

const allMessages = {
    'en': messages_en,
    'es': messages_es
};

let language = navigator.language.split(/[-_]/)[0];  // language without region code
if (!allMessages[language]) {
  // default to English
  language = 'en';
}
const messages = allMessages[language];

ReactDOM.render(
  <React.StrictMode>
    <App language={language} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);
