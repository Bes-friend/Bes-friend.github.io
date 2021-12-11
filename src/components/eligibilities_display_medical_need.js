import React from 'react';

class EligibilityDisplayMedicalNeed extends React.Component {
  render() {
    return <div>
      <div>
        If you are under the care and supervision of a medical
        professional, you may qualify for paid leave.
      </div>
      <div>
        Summary of Program Benefits
      </div>
      <ul>
        <li>
          Up to 52 weeks of partial paycheck replacement. Actual
          length of time depends on how long your doctor prescribes.
        </li>
        <li>
          12 weeks of job protected leave, if you qualify. You
          typically qualify if your employer employs at least 5
          people, and if you have worked for that employer for at
          least 1 year, at least part time.
        </li>
      </ul>
      <div>
        <span className='question'>
          How much would I be paid?
        </span>
        &nbsp;Typically, you would earn 60-70% of your normal paycheck. To estimate how
        much you would receive, use this
        &nbsp;<a href='https://edd.ca.gov/Disability/PFL_Calculator.htm'>
          Benefits Calculator
        </a>.
      </div>
      <div>
        <span className='question'>
          How can I learn more and double check if I am eligible?
        </span>
        &nbsp;Visit California Employment Development Department’s website on
        &nbsp;<a href='https://edd.ca.gov/Disability/About_the_State_Disability_Insurance_(SDI)_Program.htm'>
           State Disability Insurance
        </a>.
      </div>
    </div>
  }
}

export {EligibilityDisplayMedicalNeed};
