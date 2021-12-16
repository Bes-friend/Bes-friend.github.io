import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Survey from "survey-react";
import {surveyJSON} from './survey_metadata.js';
import {getEligibilityMatch} from './eligibility_checker.js'
import {EligibilitiesDisplay} from './eligibilities_display.js'
import {Controls} from './controls.js'

let survey = null;
let eligibilitiesDisplay = null;
let controls = null;

function onSurveyComplete(results) {
  let eligibilityMatch = getEligibilityMatch(results.valuesHash);
  console.log("Survey is complete:", eligibilityMatch);
  if (eligibilityMatch !== null) {
    console.log('In onSurveyComplete, found match ', eligibilityMatch, );
    const eligibilitiesInfo = {eligibilities: eligibilityMatch.eligibilities, values: results.valuesHash, hidden: false};
    eligibilitiesDisplay.handleChange(eligibilitiesInfo);
    controls.handleChange({hidden: false});
  } else {
    console.log('In onSurveyComplete, did not find eligibility match ');
    // No matches- display warning
  }
}

function onShowSurvey() {
  survey.clear();
  survey.render();
  eligibilitiesDisplay.handleChange({hidden: true});
  controls.handleChange({hidden: true});
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

survey = new Survey.Model(surveyJSON);
survey
    .onComplete
    .add(onSurveyComplete);
ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));

eligibilitiesDisplay = ReactDOM.render(React.createElement(EligibilitiesDisplay, null), document.getElementById("eligibilityResults"));

controls = ReactDOM.render(React.createElement(Controls, {onShowSurvey: onShowSurvey}), document.getElementById("controls"));