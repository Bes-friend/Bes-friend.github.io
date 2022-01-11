import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

class RegisterAndApply extends React.Component {
  render() {
    return <IntlProvider locale={this.props.language} messages={this.props.messages}>
      <div>
        <FormattedMessage
          id="register.placeholder"
          defaultMessage="Register and Apply!"
          description="Placeholder for registration info"
        />
      </div>
    </IntlProvider>
  }
}

export {RegisterAndApply};
