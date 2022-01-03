import React from 'react';
import {Timeline} from './timeline.js';
import {RegisterAndApply} from './register_and_apply.js';
import {Faq} from './faq.js';
import {Help} from './help.js';
import {Disclaimer} from './disclaimer.js';
import {IntlProvider, FormattedMessage} from 'react-intl';

class EligibilityDisplayCFRA extends React.Component {
  render() {
    return <IntlProvider locale={this.props.language} messages={this.props.messages}>
      <div>
        <div className='attention'>
          <FormattedMessage
            id="eligibility.cfra.time_off"
            defaultMessage="You are eligible for paid time off"
            description="Header summarizing that user is eligible for time off"
          />
        </div>
        <ul>
          <li>
            <FormattedMessage
              id="eligibility.cfra.vaginal_delivery"
              defaultMessage="22 weeks of job protected time off for a vaginal delivery, 4 weeks prior to your due date, and 18 weeks after. This reflects the typical timeline. Your doctor may request additional time on your behalf."
              description="Time off for vaginal delivery"
            />
          </li>
          <li>
            <FormattedMessage
              id="eligibility.cfra.caesarian_section"
              defaultMessage="24 weeks of job protected time off for a C-section delivery, 4 weeks prior to your due date, and 20 weeks after. This reflects the typical timeline. Your doctor may request additional time on your behalf."
              description="Time off for caesarian section"
            />
          </li>
          <li>
            <FormattedMessage
              id="eligibility.cfra.wage_replacement"
              defaultMessage="Up to 19 weeks of partial wage replacement for your time off; 17 weeks for vaginal delivery, or 19 weeks for C-section delivery."
              description="Wage replacement for user"
            />
          </li>
        </ul>
        <div>
          <FormattedMessage
            id="eligibility.cfra.details"
            defaultMessage="Your right to take this time off is granted by the California Family Rights Act. The pay you earn while you are out is provided by the California State Short Term Disability and Paid Family Leave programs.  Your employer is allowed to offer you a longer period of time off, or to pay you more than what the state provides while you are out. However, your employer cannot offer you less or prevent you from taking the time off."
            description="Details on CFRA program"
          />
        </div>
        <Timeline language={this.props.language} messages={this.props.messages}/>
        <div>
          <FormattedMessage
            id="eligibility.cfra.operator"
            defaultMessage="The California State Paid Family Leave program is operated by the California Employment and Development Department. In order to claim these payment, you must create an online account on their website and then submit your claim.  The claim you should submit is for State Disability Insurance (SDI), which covers your first 9-11 weeks of wage replacement. After that, the department will automatically enroll you into the Paid Family Leave (PFL) benefit, which covers the remaining 8 weeks of paid time off."
            description="Description of operator of CFRA program"
          />
        </div>
        <RegisterAndApply language={this.props.language} messages={this.props.messages}/>
        <Faq language={this.props.language} messages={this.props.messages}/>
        <Help language={this.props.language} messages={this.props.messages}/>
        <Disclaimer language={this.props.language} messages={this.props.messages}/>
      </div>
    </IntlProvider>
  }
}

export {EligibilityDisplayCFRA};
