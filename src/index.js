import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Survey from "survey-react";
import {surveyJSON} from './survey_metadata.js';
import {getEligibilityMatch} from './eligibility_checker.js'
import {EligibilitiesDisplay} from './eligibilities_display.js'


var eligibilitiesDisplay = 0;

function onSurveyComplete(results) {
  let eligibilityMatch = getEligibilityMatch(results.valuesHash);
  console.log("Survey is complete:", eligibilityMatch);
  if (eligibilityMatch !== null) {
    console.log('In onSurveyComplete, found match ', eligibilityMatch, );
    eligibilitiesDisplay.handleChange(eligibilityMatch.eligibilities);
  } else {
    console.log('In onSurveyComplete, did not find eligibility match ');
    // No matches- display warning
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <Survey.Survey json={surveyJSON} onComplete={onSurveyComplete}/>,
  document.getElementById("surveyElement"));

eligibilitiesDisplay = ReactDOM.render(React.createElement(EligibilitiesDisplay, null), document.getElementById("eligibilityResults"));
