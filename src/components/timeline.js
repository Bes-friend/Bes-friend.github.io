import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

class Timeline extends React.Component {
  render() {
    return <IntlProvider locale={window.language} messages={window.messages[window.language]}>
      <div>
        <FormattedMessage
          id="timeline.placeholder"
          defaultMessage="Timeline!"
          description="Placeholder for timeline info"
        />
      </div>
    </IntlProvider>
  }
}

export {Timeline};
