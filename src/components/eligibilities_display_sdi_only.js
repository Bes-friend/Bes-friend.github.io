import React from 'react';
import {Timeline} from './timeline.js';
import {RegisterAndApply} from './register_and_apply.js';
import {Faq} from './faq.js';
import {Help} from './help.js';
import {Disclaimer} from './disclaimer.js';
import {IntlProvider, FormattedMessage} from 'react-intl';

class EligibilityDisplaySDIOnly extends React.Component {
  render() {
    return <IntlProvider locale={window.language} messages={window.messages[window.language]}>
      <div>
        <div>
          <div>
            <FormattedMessage
              id="eligibility.sdi.header"
              defaultMessage="You can get paid partial wages for 17 weeks for a vaginal delivery, or 19 weeks for a C-section delivery."
              description="Header summarizing that SDI folks are eligible for paid leave"
            />
          </div>
          <div>
            <FormattedMessage
              id="eligibility.sdi.limitations"
              defaultMessage="But California and Federal laws do not protect your job. See below for more information about job protections."
              description="Limitations on SDI benefits"
            />
          </div>
        </div>
        <Timeline/>
        <div>
          <FormattedMessage
            id="eligibility.sdi.details"
            defaultMessage="The California State Paid Family Leave benefit is operated by the California Employment and Development Department. In order to claim these benefits, you must create an online account on their website and then submit your claim. The claim you should submit is for State Disability Insurance (SDI), which covers your first 9-11 weeks of wage replacement as a result of your 'pregnancy disability.'After that, the department will automatically enroll you into the Paid Family Leave (PFL) benefit, which covers the remaining 8 weeks of paid time off."
            description="Details of SDI benefits"
          />
        </div>
        <RegisterAndApply/>
        <Faq/>
        <Help/>
        <Disclaimer/>
      </div>
    </IntlProvider>
  }
}

export {EligibilityDisplaySDIOnly};
