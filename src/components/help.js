import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

class Help extends React.Component {
  render() {
    return <IntlProvider locale={this.props.language} messages={this.props.messages}>
      <div>
        <FormattedMessage
          id="help.placeholder"
          defaultMessage="Standard Help!"
          description="Placeholder for help string"
        />
      </div>
    </IntlProvider>
  }
}

export {Help};
