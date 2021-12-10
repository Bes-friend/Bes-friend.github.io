import React from 'react';
import {Timeline} from './timeline.js';
import {RegisterAndApply} from './register_and_apply.js';
import {Faq} from './faq.js';
import {Help} from './help.js';
import {Disclaimer} from './disclaimer.js';

class EligibilityDisplayBabyBonding extends React.Component {
  render() {
    return <div>
      <div>
        To bond with your newborn or newly adopted child.
      </div>
      <div>
        You likely are eligible for 8 weeks of partial pay while taking time
        off, using the
        &nbsp;<a href='https://edd.ca.gov/disability/paid-family-leave/'>
          California State Paid Family Leave
        </a> program.
        Check with your employer and California State Family Leave
        program for actual eligibility.
      </div>
      <div>
        If you work for an employer with at least 5 employees (including
        yourself), and you have worked at least 1 year for this employer,
        your employer MUST allow you to take up to 12 weeks off during
        this first year with your new child. Your employer is required
        to allow you to come back to the same or comparable job when
        you return from leave. You do not need to take all 12 weeks off.
      </div>
      <Timeline/>
      <div>
        The California State Paid Family Leave program is operated
        by the California Employment and Development Department.
        In order to claim these payment, you must create an online
        account on their website and then submit your claim. The
        claim you should submit is for Paid Family Leave (PFL). 
      </div>
      <div>
        To read more about Paid Family Leave, including exact rules
        for eligibility, and payment calculators, visit the California Employment
        Development Department’s website for
        &nbsp;<a href='https://edd.ca.gov/Disability/paid-family-leave/Fathers.htm'>
          Fathers / Non-Birthing Parents
        </a>&nbsp;
        or the website for
        &nbsp;<a href='https://edd.ca.gov/Disability/paid-family-leave/Adoptive-or-Foster-Parents.htm'>
          Adoptive / Foster parents
        </a>.
      </div>
      <RegisterAndApply/>
      <Faq/>
      <Help/>
      <Disclaimer/>
    </div>
  }
}

export {EligibilityDisplayBabyBonding};
