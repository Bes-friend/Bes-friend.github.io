import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.restartSurvey = this.restartSurvey.bind(this);
  }

  restartSurvey() {
    this.props.onShowSurvey();
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
      </div>
    </IntlProvider>
  }
}

export {Controls};