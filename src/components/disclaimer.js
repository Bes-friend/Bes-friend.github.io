import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

class Disclaimer extends React.Component {
  render() {
    return <IntlProvider locale={window.language} messages={window.messages[window.language]}>
      <div>
        <div>
          <FormattedMessage
            id="disclaimer.first"
            defaultMessage="Disclaimer: This is not a guarantee that you will receive these benefits. The information and services provided are for informational purposes only. The California Employment Development Department is the department that approves or denies Paid Family and Medical leave benefits."
            description="First paragraph of disclaimer"
          />
        </div>
        <div>
          <FormattedMessage
            id="disclaimer.second"
            defaultMessage="This website is not intended to provide legal advice or establish standards of reasonable behavior. Consult an attorney for all of your legal needs."
            description="Second paragraph of disclaimer"
          />
        </div>
      </div>
    </IntlProvider>
  }
}

export {Disclaimer};
