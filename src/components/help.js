import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

class Help extends React.Component {
  render() {
    return <IntlProvider locale={window.language} messages={window.messages[window.language]}>
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
