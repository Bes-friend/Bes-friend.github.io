import './App.css';
import './survey.css';
import './eligibility_results.css';
import React from 'react';
import * as Survey from "survey-react";
import {surveyJSON} from './survey_metadata.js';
import {getEligibilityMatch} from './eligibility_checker.js'
import {EligibilitiesDisplay} from './eligibilities_display.js'
import {Controls} from './controls.js'
import {IntlProvider, FormattedMessage} from 'react-intl';

const SHOW_SURVEY = 1;
const SHOW_RESULTS = 2;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onSurveyComplete = this.onSurveyComplete.bind(this);
    this.onShowSurvey = this.onShowSurvey.bind(this);

    this.state = { displayState: SHOW_SURVEY, surveyResults: null};

    this.survey = new Survey.Model(surveyJSON);
    this.survey
      .onComplete
      .add(this.onSurveyComplete);

  }

  onSurveyComplete(results) {
    this.setState({displayState: SHOW_RESULTS, surveyResults: results});
  }

  onShowSurvey() {
    this.survey.clear();
    this.survey.render();
    this.setState({displayState: SHOW_SURVEY, surveyResults: null});
  }

  render() {
    const hideSurvey = (this.state.displayState !== SHOW_SURVEY);
    const hideResults = (this.state.displayState !== SHOW_RESULTS);

    let eligibilities = null;
    let values = null;
    if (!hideResults) {
      let eligibilityMatch = getEligibilityMatch(this.state.surveyResults.valuesHash);
      if (eligibilityMatch !== null) {
        eligibilities = eligibilityMatch.eligibilities;
        values = this.state.surveyResults.valuesHash;
      } else {
        console.log('In App.render, did not find eligibility match ');
        // No matches- display warning
      }
    }

    return <IntlProvider locale={window.language} messages={window.messages[window.language]}>
      <div className="App">
        <div>
          This is the header
        </div>
        <div id="surveyElement">
          <Survey.Survey model={this.survey} hidden={hideSurvey}/>
        </div>
        <div id="eligibilityResults">
          <EligibilitiesDisplay hidden={hideResults} eligibilities={eligibilities} values={values}/>
        </div>
        <div id="controls">
          <Controls onShowSurvey={this.onShowSurvey} onShowLanguage={this.onShowLanguage} hideRestart={hideResults}/>
        </div>
        <div>
          <FormattedMessage
            id="app.footer"
            defaultMessage="This is the footer"
          />
        </div>
      </div>
  };
}

export default App;