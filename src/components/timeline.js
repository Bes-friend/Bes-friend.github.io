import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

class Timeline extends React.Component {
  render() {
    return <IntlProvider locale={this.props.language} messages={this.props.messages}>
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
