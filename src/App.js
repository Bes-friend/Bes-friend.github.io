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
import * as Survey from "survey-react";
import {surveyJSON} from './survey_metadata.js';
import {getEligibilityMatch} from './eligibility_checker.js'
import {EligibilitiesDisplay} from './eligibilities_display.js'
import {Controls} from './controls.js'

import messages_en from "./lang/en.json";
import messages_es from "./lang/es.json";

const SHOW_SURVEY = 1;
const SHOW_RESULTS = 2;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onSurveyComplete = this.onSurveyComplete.bind(this);
    this.onShowSurvey = this.onShowSurvey.bind(this);
    this.onShowLanguage = this.onShowLanguage.bind(this);

    this.state = { displayState: SHOW_SURVEY, surveyResults: null, language: props.language, messages: props.messages};

    this.state = { displayState: SHOW_SURVEY, surveyResults: null};

    this.survey = new Survey.Model(surveyJSON);
    this.survey.locale = this.state.language;
    this.survey
      .onComplete
      .add(this.onSurveyComplete);
<<<<<<< HEAD
=======

>>>>>>> Adding buttons to choose language
  }

  onSurveyComplete(results) {
    this.setState({displayState: SHOW_RESULTS, surveyResults: results});
  }

  onShowSurvey() {
    this.survey.clear();
    this.survey.render();
    this.setState({displayState: SHOW_SURVEY, surveyResults: null});
  }

  onShowLanguage(lang) {
    if (lang === 'es') {
      this.setState({language: lang, messages: messages_es});
      this.survey.locale = 'es';
    } else {
      // Default to English if not recognized
      this.setState({language: 'en', messages: messages_en});
      this.survey.locale = 'en';
    }
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

    return <IntlProviderlocale={this.state.language} messages={this.state.messages}>
      <div className="App">
        <div>
          <FormattedMessage
            id="app.header"
            defaultMessage="This is the header"
            description="full text of header"
          />
        </div>
        <div id="surveyElement">
          <Survey.Survey model={this.survey} hidden={hideSurvey}/>
        </div>
        <div id="eligibilityResults">
          <EligibilitiesDisplay language={this.state.language} messages={this.state.messages} hidden={hideResults} eligibilities={eligibilities} values={values}/>
        </div>
        <div id="controls">
          <Controls language={this.state.language} messages={this.state.messages} onShowSurvey={this.onShowSurvey} onShowLanguage={this.onShowLanguage} hideRestart={hideResults}/>
        </div>
        <div>
          <FormattedMessage
            id="app.footer"
            defaultMessage="This is the footer"
            description="full text of footer"
          />
        </div>
      </div>
    </IntlProvider>
  };
}

export default App;