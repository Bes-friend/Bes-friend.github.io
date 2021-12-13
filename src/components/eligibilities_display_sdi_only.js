import React from 'react';
import {Timeline} from './timeline.js';
import {RegisterAndApply} from './register_and_apply.js';
import {Faq} from './faq.js';
import {Help} from './help.js';
import {Disclaimer} from './disclaimer.js';

class EligibilityDisplaySDIOnly extends React.Component {
  render() {
    return <div>
      <div>
        <div>
          You can get paid partial wages for 17 weeks for
          a vaginal delivery, or 19 weeks for a C-section delivery.
        </div>
        <div>
          But California and Federal laws do not protect your job. See
          below for more information about job protections.
        </div>
      </div>
      <Timeline/>
      <div>
        The California State Paid Family Leave benefit is operated by
        the California Employment and Development Department. In order
        to claim these benefits, you must create an online account on
        their website and then submit your claim. The claim you should
        submit is for State Disability Insurance (SDI), which covers your
        first 9-11 weeks of wage replacement as a result of your 'pregnancy disability.'
        After that, the department will automatically enroll you into
        the Paid Family Leave (PFL) benefit, which covers the
        remaining 8 weeks of paid time off.
      </div>
      <RegisterAndApply/>
      <Faq/>
      <Help/>
      <Disclaimer/>
    </div>
  }
}

export {EligibilityDisplaySDIOnly};
