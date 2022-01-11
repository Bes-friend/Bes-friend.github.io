import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.restartSurvey = this.restartSurvey.bind(this);
    this.displayEnglish = this.displayEnglish.bind(this);
    this.displaySpanish = this.displaySpanish.bind(this);
  }

  restartSurvey() {
    this.props.onShowSurvey();
  }

  displayEnglish() {
    this.props.onShowLanguage('en');
  }

  displaySpanish() {
    this.props.onShowLanguage('es');
  }

  render() {
    return <IntlProvider locale={this.props.language} messages={this.props.messages}>
      <div>
        { !this.props.hideRestart &&
        <button onClick={this.restartSurvey}>
          <FormattedMessage
            id="controls.restart_survey"
            defaultMessage="« Restart survey"
            description="Text on 'restart survey' button"
          />
        </button>
        }

        { (this.props.language === 'en')
          ? <button disabled>English</button>
          : <button onClick={this.displayEnglish}>English</button>
        }

        { (this.props.language === 'es')
          ? <button disabled>Español</button>
          : <button onClick={this.displaySpanish}>Español</button>
        }
      </div>
    </IntlProvider>
  }
}

export {Controls};