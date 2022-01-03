import React from 'react';
import {Timeline} from './timeline.js';
import {RegisterAndApply} from './register_and_apply.js';
import {Faq} from './faq.js';
import {Help} from './help.js';
import {Disclaimer} from './disclaimer.js';
import {IntlProvider, FormattedMessage} from 'react-intl';

class EligibilityDisplayBabyBonding extends React.Component {
  render() {
    return <IntlProvider locale={this.props.language} messages={this.props.messages}>
      <div>
        <div>
          <FormattedMessage
            id="eligibility.bonding.header"
            defaultMessage="To bond with your newborn or newly adopted child."
            description="Header on eligibility for time to bond with child"
          />
        </div>
        <div>
          <FormattedMessage
            id="eligibility.bonding.likely_eligible"
            defaultMessage="You likely are eligible for 8 weeks of partial pay while taking time off, using the <pfl> California State Paid Family Leave </pfl> program. Check with your employer and California State Family Leave program for actual eligibility."
            description="General description of likely eligibility"
            values={{
              pfl: chunks => <a href='https://edd.ca.gov/disability/paid-family-leave/'>{chunks}</a>
            }}
          />
        </div>
        <div>
          <FormattedMessage
            id="eligibility.bonding.num_employees"
            defaultMessage="If you work for an employer with at least 5 employees (including yourself), and you have worked at least 1 year for this employer, your employer MUST allow you to take up to 12 weeks off during this first year with your new child. Your employer is required to allow you to come back to the same or comparable job when you return from leave. You do not need to take all 12 weeks off."
            description="Child bonding depends on number of employees"
          />
        </div>
        <Timeline language={this.props.language} messages={this.props.messages}/>
        <div>
          <FormattedMessage
            id="eligibility.bonding.operator"
            defaultMessage="The California State Paid Family Leave program is operated by the California Employment and Development Department. In order to claim these payment, you must create an online account on their website and then submit your claim. The claim you should submit is for Paid Family Leave (PFL)."
            description="Description of operator of Paid Family Leave program"
          />
        </div>
        <div>
          <FormattedMessage
            id="eligibility.bonding.links"
            defaultMessage="To read more about Paid Family Leave, including exact rules for eligibility, and payment calculators, visit the California Employment Development Department’s website for <nbp>Fathers / Non-Birthing Parents</nbp> or the website for <afp>Adoptive / Foster parents</afp>."
            description="Links for more info about bonding eligibility, etc."
            values={{
              nbp: chunks => <a href='https://edd.ca.gov/Disability/paid-family-leave/Fathers.htm'>{chunks}</a>,
              afp: chunks => <a href='https://edd.ca.gov/Disability/paid-family-leave/Adoptive-or-Foster-Parents.htm'>{chunks}</a>
            }}
          />
        </div>
        <RegisterAndApply locale={this.props.language} messages={this.props.messages}/>
        <Faq locale={this.props.language} messages={this.props.messages}/>
        <Help locale={this.props.language} messages={this.props.messages}/>
        <Disclaimer locale={this.props.language} messages={this.props.messages}/>
      </div>
    </IntlProvider>
  }
}

export {EligibilityDisplayBabyBonding};
