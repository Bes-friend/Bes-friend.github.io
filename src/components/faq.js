import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

class Faq extends React.Component {
  render() {
    return <IntlProvider locale={window.language} messages={window.messages[window.language]}>
      <ol>
        <li>
          <div className="question">
            <FormattedMessage
              id="faq.job_protected_q"
              defaultMessage='What is "job protected" leave?'
            />
          </div>
          <span className="answer">
            <div>
              <FormattedMessage
                id="faq.job_protected_a"
                defaultMessage="If you have job protected leave, you are entitled to your same or comparable position when you return from leave. In addition, your employer must maintain your health insurance benefits while you are on leave. Your employer may continue to collect your portion of your insurance premiums while you are out. In California, if you work for an employer with at least 5 employees, you are covered by California Family Rights Act and Pregnancy Disability Leave laws and have these job protections for specific durations of leave."
              />
            </div>
            <div>
              <FormattedMessage
                id="faq.job_protected_more_info"
                defaultMessage="For more information about your rights, visit California's Fair Employment and Housing website about <fmpl>Family and Medical Leave rights</fmpl>."
                description="How to find more info about job protection"
                values={{
                  fmpl: chunks => <a href='https://www.dfeh.ca.gov/family-medical-pregnancy-leave/'>{chunks}</a>
                }}
              />
            </div>
          </span>
        </li>
        <li>
          <div className="question">
            <FormattedMessage
              id="faq.job_protection_eligible_q"
              defaultMessage='How can I be sure that I am eligible?'
            />
          </div>
          <span className="answer">
            <div>
              <FormattedMessage
                id="faq.job_protection_eligible_a"
                defaultMessage='For job protection, you are eligible as long as your employer employs at least 5 people including yourself.'
              />
            </div>
            <div>
              <FormattedMessage
                id="faq.job_protected_eligible_more_info"
                defaultMessage="To be eligible for State Disability Insurance and Paid Family Leave, double check your paystub or your last w-2 statement. You should see a deduction called “CA SDI.” This means that you paid into the California Short Term Disability Insurance fund. If you see “VPI” instead, it means that your employer offers an alternative plan, and you should consult your HR department or employee handbook."
                description="How to find more info about eligibility for job protection"
              />
            </div>
            <div>
              <FormattedMessage
                id="faq.job_protected_eligible_link"
                defaultMessage="Visit the <pfl> Paid Family Leave website </pfl> for more info."
                description="Link for more info about eligibility for job protection"
                values={{
                  pfl: chunks => <a href='https://edd.ca.gov/Disability/paid-family-leave/'>{chunks}</a>
                }}
              />
            </div>
          </span>
        </li>
        <li>
          <div className="question">
            <FormattedMessage
              id="faq.paid_q"
              defaultMessage="How much will I be paid?"
            />
          </div>
          <span className="answer">
            <div>
              <FormattedMessage
                id="faq.paid_a"
                defaultMessage="Your employer may pay your full wages while you are out, so it is best to check with your manager and Human Resources manager (if you have one.) Make sure to ask your employer about their parental leave policy, and if you can use any unused vacation or sick days to cover your time off. When you use vacation or paid sick days, those days should be paid at 100% your normal wages."
                description="Answer to 'how much will I be paid?'"
              />
            </div>
            <div>
              <FormattedMessage
                id="faq.paid_details"
                defaultMessage="If you apply for Short Term Disability and Paid Family Leave benefits through the State of California, the typical benefit is 60-70% of your weekly wages. You can use <calc> California’s Paid Family Leave Benefits Estimator tool</calc>."
                description="Details on how much will be paid"
                values={{
                  calc: chunks => <a href='https://edd.ca.gov/disability/PFL_Calculator.htm'>{chunks}</a>
                }}
              />
            </div>
          </span>
        </li>
      </ol>
    </IntlProvider>
  }
}

export {Faq};
