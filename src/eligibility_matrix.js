import {EligibilityDisplayCFRAGovtEmployee} from './components/eligibilities_display_cfra_eligible_public_school_or_government_employee.js';
import {EligibilityDisplayPDLEligibleGovtEmployee} from './components/eligibility_display_pdl_eligible_govt_employee.js';
import {EligibilityDisplayCFRA} from './components/eligibilities_display_cfra_eligible.js';
import {EligibilityDisplayPDLEligible} from './components/eligibilities_display_pdl_eligible.js';
import {EligibilityDisplaySDIOnly} from './components/eligibilities_display_sdi_only.js';
import {EligibilityDisplayBabyBonding} from './components/eligibilities_display_baby_bonding.js';
import {EligibilityDisplayMedicalNeed} from './components/eligibilities_display_medical_need.js';

//trying this out
const NOT_SUPPORTED = `
<div>
  This tool does not currently cover non-California workers or non-W-2 workers.
</div>
<br/>
<div>
  For California workers who are not currently employed, but earned at
  least $300 in the last 12 months, you may still be eligible for Short
  Term Disability and Paid Family Leave as long as your paystub or w-2
  shows a deduction for "CA SDI" and you are not currently claiming
  unemployment insurance. This means that you have paid into the state's
  disability insurance fund. You can apply for payment on California
  Employment Development Department's website for
  &nbsp;<a href='https://edd.ca.gov/disability/paid-family-leave/'>
    Paid Family Leave
  </a>.
</div>
<div>
  For California workers who do not receive a W-2, consider visiting these
  other resources:
</div>
<ul>
  <li>
    California Employment Development Department's website on
    <a href='https://edd.ca.gov/disability/paid-family-leave/Mothers.htm'>
      Paid Family Leave for Pregnant Mothers
    </a>
  </li>
  <li>
    California Employment Development Department's website on
    &nbsp;<a href='https://edd.ca.gov/disability/paid-family-leave/Self-Employed.htm'>
      Paid Family Leave for Self Employed individuals
    </a>
  </li>
  <li>
    <a href='https://legalaidatwork.org/our-programs/work-and-family-program/'>
      Legal Aid at Work's website
    </a>
    &nbsp;to find more resources or to call their hotline.
  </li>
</ul>
<div>
  For non-California workers, you may be able to learn more about your benefits by:
</div>
<ul>
  <li>
    Searching online for your state and "Paid Family Leave" to see if your state has a similar program
  </li>
  <li>
    Finding out if your employer offers Short Term Disability insurance. If so, read the benefits plan carefully. If it covers pregnancy, you may be able to submit a claim to the insurance plan and receive partial payment for your time off.
  </li>
  <li>
    Finding out if your employer offers maternity, paternity, or parental leave. You could find out either by reading an employee handbook if your employer has one, or asking your Human Resources department.
  </li>
</ul>

`

/*
The RESULTS constant contains all results that may be displayed
to users.  For example, one user may get a single result like
'not eligible for any programs', while another use may get multiple
results like 'you are eligible for FMLA' and 'you are eligible for SNAP'.
*/
const RESULTS = {
  cfra_eligible_public_school_or_government_employee: {label: 'Yes!', react: EligibilityDisplayCFRAGovtEmployee},
  pdl_eligible_public_school_or_government_employee: {label: 'Yes!', react: EligibilityDisplayPDLEligibleGovtEmployee},
  cfra_eligible: {label: 'Yes!', react: EligibilityDisplayCFRA},
  pdl_eligible: {label: 'Yes!', react: EligibilityDisplayPDLEligible},
  sdi_only: {label: 'You qualify for paid time off', react: EligibilityDisplaySDIOnly},
  baby_bonding: {label: 'You can take time off', react: EligibilityDisplayBabyBonding},
  medical_need: {label: 'You may qualify for paid time off', react: EligibilityDisplayMedicalNeed},
  not_supported: {html: NOT_SUPPORTED},
  not_ca: {label: 'Sorry', md: NOT_SUPPORTED},
  not_w2: {label: 'Sorry', md: NOT_SUPPORTED},
  low_earner: {label: 'Sorry', description: 'Please check with your employer.  Lorem ipsum.'},
  
  //caliornians
  //sdi_only: {label:'Yes, you qualify for paid time off', description:'placeholder'},
  pdl_non_govt: {label:'Yes, you qualify for paid time off', description:'placeholder'},
  pdl_govt: {label:'Yes, you qualify for paid time off', description:'placeholder'},
  cfra_non_govt: {label:'Yes, you qualify for paid time off', description:'placeholder'},
  cfra_govt: {label:'Yes, you qualify for paid time off', description:'placeholder'},
  bonding: {label:'Yes, you should bond with baby!', description:'placeholder'},
  //medical_need: {label:'Care for yourself', description:'placeholder'},
  
  /*
  high_earner: {label: 'Yay!', description: 'You qualify for Paid Family and Medical Leaave through the California Paid Family Leave program.'},
  job_protected: {description: 'When you return from your time off, your employer must give you your job back (or an equivalent job.)'},
  pregnant_and_cfra: {description: 'You can start your time off up to 4 weeks before your due date, and take up to 18 weeks after your baby is born. However, the Paid Family Leave program will only pay up to 17 weeks.'},
  c_section: {description: 'Typically, women who experience a c-section will get an additional 2 weeks of leave. This means that you can take up to 20 weeks after your baby is born, and the Paid Family Leave program will pay up to 19 weeks.'},
  bonding_only: {label: 'Care for your newborn', description:'For non-birthing parents, you qualify for 8 weeks of time off.'},
  */
  //based on latest survey questions
  
  
  catchall: {label: 'Ohno!', description: 'We do not have a coherent response for these choices.  Lorem ipsum. 5!'},
};


/*
The ELIGIBILITY_MATRIX constant describes which users are eligible for
which results (from the RESULTS list above.)  A user will first fill in the
survey (defined in survey_metadata.js).  The code will store the survey answers,
and attempt to discover an entry in ELIGIBILITY_MATRIX that matches the
answers that the user supplied.  It does this in order- it checks if the first
eligibility choice matches, then if the second one matches, and so forth.
A match ends the process- the first match that's encountered is the "correct"
match.
Each entry in ELIGIBILITY_MATRIX has a number of parts:
* label: a human-readable description of this entry, for use by admins
* answers: a map of question ID to expected answer.  An answer of `undefined` matches everything.
* eligibilities: a list of the names of entries in the RESULTS map that are relevant for this entry
*/
const ELIGIBILITY_MATRIX = [
  {
    label: 'TESTING',
    answers: {
      choose_specific_eligibility: 'cfra_eligible_public_school_or_government_employee'
    },
    eligibilities: ['cfra_eligible_public_school_or_government_employee']
  },
  {
    label: 'TESTING',
    answers: {
      choose_specific_eligibility: 'pdl_eligible_public_school_or_government_employee'
    },
    eligibilities: ['pdl_eligible_public_school_or_government_employee']
  },
  {
    label: 'TESTING',
    answers: {
      choose_specific_eligibility: 'cfra_eligible'
    },
    eligibilities: ['cfra_eligible']
  },
  {
    label: 'TESTING',
    answers: {
      choose_specific_eligibility: 'pdl_eligible'
    },
    eligibilities: ['pdl_eligible']
  },
  {
    label: 'TESTING',
    answers: {
      choose_specific_eligibility: 'sdi_only'
    },
    eligibilities: ['sdi_only']
  },
  {
    label: 'TESTING',
    answers: {
      choose_specific_eligibility: 'baby_bonding'
    },
    eligibilities: ['baby_bonding']
  },
  {
    label: 'TESTING',
    answers: {
      choose_specific_eligibility: 'medical_need'
    },
    eligibilities: ['medical_need']
  },
  {
    label: 'TESTING',
    answers: {
      choose_specific_eligibility: 'not_supported'
    },
    eligibilities: ['not_supported']
  },

  {
    label: 'Unreported time off requirement',
    answers: {
      why_need_time_off: 'other',
      confirm_state_ca: undefined,
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined,
    },
    eligibilities: ['not_supported']
  },
  {
    label: 'No W2',
    answers: {
      why_need_time_off: undefined,
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'n',
      earned_300_dollars: undefined,
    },
    eligibilities: ['not_w2']
  },
  {
    label: 'Less than $300 in 18 months',
    answers: {
      why_need_time_off: undefined,
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'n',
    },
    eligibilities: ['low_earner']
  },
  
  {
    label: 'CA W2 SDI only',
    answers: {
      why_need_time_off: 'pregnant',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'y',
      employ_at_least_5: 'no',
      work_at_least_1_year_1250_hours: undefined,
      planned_c_section: undefined
    },
    eligibilities: ['sdi_only']
  },
  
  {
    label: 'CA W2 PDL nongovt',
    answers: {
      why_need_time_off: 'pregnant',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'y',
      employ_at_least_5: 'yes',
      work_at_least_1_year_1250_hours: 'no',
      planned_c_section: undefined
      //TODO: need to add govt
    },
    eligibilities: ['pdl_non_govt']
  },
  {
    label: 'CA W2 PDL govt',
    answers: {
      why_need_time_off: 'pregnant',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'y',
      employ_at_least_5: 'yes',
      work_at_least_1_year_1250_hours: 'no',
      planned_c_section: undefined
      //TODO: need to add govt
    },
    eligibilities: ['pdl_govt']
  },
  {
    label: 'CA W2 CFRA nongovt',
    answers: {
      why_need_time_off: 'pregnant',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'y',
      employ_at_least_5: 'yes',
      work_at_least_1_year_1250_hours: 'yes',
      planned_c_section: undefined
      //TODO: need to add govt
    },
    eligibilities: ['cfra_non_govt']
  },
  {
    label: 'CA W2 CFRA govt',
    answers: {
      why_need_time_off: 'pregnant',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'y',
      employ_at_least_5: 'yes',
      work_at_least_1_year_1250_hours: 'yes',
      planned_c_section: undefined
      //TODO: need to add govt
    },
    eligibilities: ['cfra_govt']
  },
  {
    label: 'CA W2 bonding',
    answers: {
      why_need_time_off: 'newborn',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'y',
      employ_at_least_5: undefined,
      work_at_least_1_year_1250_hours: undefined,
      planned_c_section: undefined
      //TODO: need to add govt
    },
    eligibilities: ['bonding']
  },
  {
    label: 'CA W2 medical need',
    answers: {
      why_need_time_off: 'medical',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'y',
      employ_at_least_5: undefined,
      work_at_least_1_year_1250_hours: undefined,
      planned_c_section: undefined
      //TODO: need to add govt
    },
    eligibilities: ['medical_need']
  },
  
 
  
  // Last item matches everything- all answers are undefined
  {
    label: 'Catch-all',
    answers: {
      why_need_time_off: undefined,
      confirm_state_ca: undefined,
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined,
    },
    eligibilities: ['catchall']
  },
]

export {ELIGIBILITY_MATRIX, RESULTS};
