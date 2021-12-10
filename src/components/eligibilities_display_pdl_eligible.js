import React from 'react';
import {Timeline} from './timeline.js';
import {RegisterAndApply} from './register_and_apply.js';
import {Faq} from './faq.js';
import {Help} from './help.js';
import {Disclaimer} from './disclaimer.js';

class EligibilityDisplayPDLEligible extends React.Component {
  render() {
    return <div>
      <div className='attention'>
        <div>You are eligible for paid leave.</div>
      </div>
      <ul>
        <li>
          10 weeks of job protected time off for a vaginal delivery, 4 weeks
          prior to your due date, and 6 weeks after. (This reflects the
          typical length of time off. Your doctor may request additional time
          off on your behalf.)
        </li>
        <li>
          12 weeks of job protected time off for a C-section delivery, 4
          weeks prior to your due date, and 8 weeks after. (This reflects the
          typical length of time off. Your doctor may request additional
          time off on your behalf.)
        </li>
        <li>
          Up to 19 weeks of partial wage replacement for your time off; 17
          weeks for vaginal delivery, or 19 weeks for C-section delivery.
        </li>
      </ul>
      <div>
        Your right to take this time off is granted by the Pregnancy Disability
        Leave law. The pay you earn while you are out is provided by the
        California State Short Term Disability and Paid Family Leave programs.
        Your employer is allowed to offer you a longer period of time off, or to
        pay you more than what the state provides while you are out. However,
        your employer cannot offer you less or prevent you from taking the time off.
      </div>
      <Timeline/>
      <div>
        The California State Paid Family Leave program is operated by the
        California Employment and Development Department. In order to claim
        these payments, you must create an online account on their website
        and then submit your claim. The claim you should submit is for
        State Disability Insurance (SDI), which covers your first 9-11
        weeks of wage replacement as a result of your 'pregnancy disability.'
        After that, the department will automatically enroll you into the
        Paid Family Leave (PFL) benefit, which covers the remaining 8
        weeks of paid time off.
      </div>
      <RegisterAndApply/>
      <Faq/>
      <Help/>
      <Disclaimer/>
    </div>
  }
}

export {EligibilityDisplayPDLEligible};
