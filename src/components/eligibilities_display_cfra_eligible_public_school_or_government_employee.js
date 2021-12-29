import React from 'react';
import {Timeline} from './timeline.js';
import {RegisterAndApply} from './register_and_apply.js';
import {Faq} from './faq.js';
import {Help} from './help.js';
import {Disclaimer} from './disclaimer.js';
import {IntlProvider, FormattedMessage} from 'react-intl';

const BirthdayInfo = ({birthday}) => {
  if (birthday) {
    const birthdate = new Date(birthday);
    const today = new Date();
    const age = Math.abs(Math.round((today.getTime() - birthdate.getTime()) / (1000* 60 * 60 * 24 * 365.25)));
    return <div>
      You are {age} years old
    </div>
  }
  else {
    return <div>
      Sorry, no birthday info
    </div>
  }
}

class EligibilityDisplayCFRAGovtEmployee extends React.Component {
  render() {
    let birthdayInfo = '';
    if (this.props.birthday) {
      const birthdate = new Date(this.props.birthday);
      const today = new Date();
      let age =Math.abs(Math.round((today.getTime() - birthdate.getTime()) / (1000* 60 * 60 * 24 * 365.25)));
      birthdayInfo = 'You are ' + age + ' years old';
    }
    else {
      birthdayInfo = 'Sorry, no birthday info';
    }
    return <IntlProvider locale={window.language} messages={window.messages[window.language]}>
      <div>
        <div>
          {birthdayInfo}
        </div>
        <div className='attention'>
            <FormattedMessage
              id="eligibility.cfra_gov.eligible_for_job_protected_time_off"
              defaultMessage="You are eligible for job protected time off"
              description="Header summarizing that govt employee is eligible for time off"
            />
        </div>
        <ul>
          <li>
            22 weeks of job protected time off for a vaginal delivery,
            4 weeks prior to your due date, and 18 weeks after. This
            reflects the typical timeline. Your doctor may request additional
            time on your behalf.
          </li>
          <li>
            24 weeks of job protected time off for a C-section delivery,
            4 weeks prior to your due date, and 20 weeks after. This reflects
            the typical timeline. Your doctor may request additional
            time on your behalf.
          </li>
          <li>
            Talk to your employer to understand what options you have to
            get paid during your time off. You should also check your paystub
            for a deduction called "CA SDI."" If it appears on your current
            paystub, or on any paystub from the last 18 months, you may be
            eligible to claim payments from the
            &nbsp;<a href='https://edd.ca.gov/disability/paid-family-leave/'>
              California Paid Family Leave program
            </a>.
          </li>
        </ul>
        <div>
          Your right to take this time off is granted by the
          &nbsp;<a href='https://www.dfeh.ca.gov/wp-content/uploads/sites/32/2020/12/Coming-Soon_Expanded-Family-And-Medical-Leave_ENG.pdf'>
          California Family Rights Act</a> and by the
          &nbsp;<a href='https://www.dfeh.ca.gov/wp-content/uploads/sites/32/2020/12/Pregnancy-Disability-Leave-Fact-Sheet_ENG.pdf'>
            Pregnancy Disability Leave law</a>
          . Your employer is allowed to offer you
          a longer period of time
          off, or to pay you more than what the state provides while you
          are out. However, your employer cannot offer you less or
          prevent you from taking the time off.
        </div>
        <Timeline/>
        <RegisterAndApply/>
        <Faq/>
        <Help/>
        <Disclaimer/>
      </div>
    </IntlProvider>
  }
}

export {EligibilityDisplayCFRAGovtEmployee};