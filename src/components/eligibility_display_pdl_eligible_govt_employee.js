import React from 'react';
import {Timeline} from './timeline.js';
import {RegisterAndApply} from './register_and_apply.js';
import {Faq} from './faq.js';
import {Help} from './help.js';
import {IntlProvider, FormattedMessage} from 'react-intl';

class EligibilityDisplayPDLEligibleGovtEmployee extends React.Component {
  render() {
    return <IntlProvider locale={window.language} messages={window.messages[window.language]}>
      <div>
        <div className='attention'>
          <FormattedMessage
            id="eligibility.pdl_gov.eligible_for_job_protected_time_off"
            defaultMessage="You are eligible for job protected time off"
            description="Header summarizing that govt employee is eligible for time off"
          />
        </div>
        <div>
          <ul>
            <li>
              10 weeks of job protected time off for a vaginal delivery, 4
              weeks prior to your due date, and 6 weeks after. (This reflects
              the typical length of time off. Your doctor may request additional
              time off on your behalf.)
            </li>
            <li>
              12 weeks of job protected time off for a C-section delivery, 4
              weeks prior to your due date, and 8 weeks after. (This reflects
              the typical length of time off. Your doctor may request
              additional time off on your behalf.)
            </li>
            <li>
              Talk to your employer to understand what options you have to
              get paid during your time off. You should also check your paystub
              for a deduction called “CA SDI.” If it appears on your current
              paystub, or on any paystub from the last 18 months, you may be
              eligible to claim payments from the
              &nbsp;<a href='https://edd.ca.gov/disability/paid-family-leave/'>
                California Paid Family Leave program
              </a>.
             </li>
          </ul>
          <div>
            Your right to take this time off is granted by the
            &nbsp;<a href='https://www.dfeh.ca.gov/wp-content/uploads/sites/32/2020/12/Pregnancy-Disability-Leave-Fact-Sheet_ENG.pdf'>
              Pregnancy Disability Leave
            </a> law.  Your employer is allowed to offer you a longer period
            of time off, or to pay you more than what the state provides
            while you are out. However, your employer cannot offer you
            less or prevent you from taking the time off.
          </div>
        </div>
        <Timeline/>
        <RegisterAndApply/>
        <Faq/>
        <Help/>
      </div>
    </IntlProvider>
  }
}

export {EligibilityDisplayPDLEligibleGovtEmployee};
