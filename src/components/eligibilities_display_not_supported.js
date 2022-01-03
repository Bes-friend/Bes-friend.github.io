import React from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';

class EligibilityDisplayNotSupported extends React.Component {
  render() {
    return <IntlProvider locale={window.language} messages={window.messages[window.language]}>
      <div>
        <FormattedMessage
          id="eligibility.not_supported.header"
          defaultMessage="This tool does not currently cover non-California workers or non-W-2 workers."
          description="Header on not supported page"
        />
      </div>
      <br/>
      <div>
        <FormattedMessage
          id="eligibility.not_supported.unemployed"
          defaultMessage="For California workers who are not currently employed, but earned at least $300 in the last 12 months, you may still be eligible for Short Term Disability and Paid Family Leave as long as your paystub or w-2 shows a deduction for 'CA SDI' and you are not currently claiming unemployment insurance. This means that you have paid into the state's disability insurance fund. You can apply for payment on California Employment Development Department's website for <pfl>Paid Family Leave</pfl>."
          description="Details for unemployed"
          values={{
            pfl: chunks => <a href='https://edd.ca.gov/disability/paid-family-leave/'>{chunks}</a>
          }}
        />
      </div>
      <div>
        <FormattedMessage
          id="eligibility.not_supported.resources_header"
          defaultMessage="For California workers who do not receive a W-2, consider visiting these other resources:"
          description="Header of list of resources"
        />
      </div>
      <ul>
        <li>
          <FormattedMessage
            id="eligibility.not_supported.mothers_link"
            defaultMessage="California Employment Development Department's website on <m> Paid Family Leave for Pregnant Mothers </m>"
            description="Link for mothers"
            values={{
              m: chunks => <a href='https://edd.ca.gov/disability/paid-family-leave/Mothers.htm'>{chunks}</a>
            }}
          />
        </li>
        <li>
          <FormattedMessage
            id="eligibility.not_supported.self_employed_link"
            defaultMessage="California Employment Development Department's website on <se> Paid Family Leave for Self Employed individuals </se>"
            description="Link for self employed"
            values={{
              se: chunks => <a href='https://edd.ca.gov/disability/paid-family-leave/Self-Employed.htm'>{chunks}</a>
            }}
          />
        </li>
        <li>
          <FormattedMessage
            id="eligibility.not_supported.legal_aid_link"
            defaultMessage="<wfp>Legal Aid at Work's website</wfp> to find more resources or to call their hotline."
            description="Link for legal aid"
            values={{
              wfp: chunks => <a href='https://legalaidatwork.org/our-programs/work-and-family-program/'>{chunks}</a>
            }}
          />
        </li>
      </ul>
      <div>
        <FormattedMessage
          id="eligibility.not_supported.non_ca_header"
          defaultMessage="For non-California workers, you may be able to learn more about your benefits by:"
          description="Header of list of items for non California residents"
        />
      </div>
      <ul>
        <li>
          <FormattedMessage
            id="eligibility.not_supported.non_ca_search"
            defaultMessage="Searching online for your state and 'Paid Family Leave' to see if your state has a similar program"
            description="Search for state specific benefits"
          />
        </li>
        <li>
          <FormattedMessage
            id="eligibility.not_supported.non_ca_sdi"
            defaultMessage="Finding out if your employer offers Short Term Disability insurance. If so, read the benefits plan carefully. If it covers pregnancy, you may be able to submit a claim to the insurance plan and receive partial payment for your time off."
            description="Check with employer regarding short term disability insurance"
          />
        </li>
        <li>
          <FormattedMessage
            id="eligibility.not_supported.non_ca_leave"
            defaultMessage="Finding out if your employer offers maternity, paternity, or parental leave. You could find out either by reading an employee handbook if your employer has one, or asking your Human Resources department."
            description="Check with employer regarding leave policies"
          />
        </li>
      </ul>
    </IntlProvider>
  }
}

export {EligibilityDisplayNotSupported};
