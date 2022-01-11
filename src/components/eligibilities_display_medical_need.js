import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

class EligibilityDisplayMedicalNeed extends React.Component {
  render() {
    return <IntlProvider locale={this.props.language} messages={this.props.messages}>
      <div>
        <div>
          <FormattedMessage
            id="eligibility.med_need.header"
            defaultMessage="If you are under the care and supervision of a medical professional, you may qualify for paid leave."
            description="Header summarizing that those with medical need may be eligible for time off"
          />
        </div>
        <div>
          <FormattedMessage
            id="eligibility.med_need.summary_header"
            defaultMessage="Summary of Program Benefits"
            description="Header of summary section"
          />
        </div>
        <ul>
          <li>
            <FormattedMessage
              id="eligibility.med_need.paycheck_replacement"
              defaultMessage="Up to 52 weeks of partial paycheck replacement. Actual length of time depends on how long your doctor prescribes."
              description="Partial paycheck replacement info"
            />
          </li>
          <li>
            <FormattedMessage
              id="eligibility.med_need.job_protected_leave"
              defaultMessage="12 weeks of job protected leave, if you qualify. You typically qualify if your employer employs at least 5 people, and if you have worked for that employer for at least 1 year, at least part time."
              description="Job protection info"
            />
          </li>
        </ul>
        <div>
          <span className='question'>
            <FormattedMessage
              id="eligibility.med_need.how_much_paid_q"
              defaultMessage="How much would I be paid?"
            />
          </span>
          &nbsp;<FormattedMessage
            id="eligibility.med_need.how_much_paid_a"
            defaultMessage="Typically, you would earn 60-70% of your normal paycheck. To estimate how much you would receive, use this <calc> Benefits Calculator </calc>."
            values={{
              calc: chunks => <a href='https://edd.ca.gov/Disability/PFL_Calculator.htm'>{chunks}</a>
            }}
          />
        </div>
        <div>
          <span className='question'>
            <FormattedMessage
              id="eligibility.med_need.learn_more_q"
              defaultMessage="How can I learn more and double check if I am eligible?"
            />
          </span>
          &nbsp;<FormattedMessage
            id="eligibility.med_need.learn_more_a"
            defaultMessage="Visit California Employment Development Department’s website on <sdi>State Disability Insurance</sdi>"
            values={{
              sdi: chunks => <a href='https://edd.ca.gov/Disability/About_the_State_Disability_Insurance_(SDI)_Program.htm'>{chunks}</a>
            }}
          />
        </div>
      </div>
    </IntlProvider>
  }
}

export {EligibilityDisplayMedicalNeed};
