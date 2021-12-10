//trying this out
const NOT_SUPPORTED = `
This tool currently only supports California workers who receive a W-2.

For California workers who are not currently employed, but earned at least $300 in the last 12 months, you are still eligible for Short Term Disability and Paid Family Leave as long as your paystub or w-2 shows a deduction for “CA SDI”. This means that you have paid into the state’s disability insurance fund. You can apply for payment on [California Employment Development Department’s website](https://edd.ca.gov/disability/paid-family-leave/ "Paid Family Leave") for Paid Family Leave.

For California workers who do not receive a W-2, consider visiting these other resources:

*  California Employment Development Department’s website on Paid Family Leave for Pregnant Mothers 

* California Employment Development Department’s website on Paid Family Leave for Self Employed individuals

* Legal Aid at Work’s website to find more resources or to call their hotline.

For non-California workers, you may be able to learn more about your benefits by:

* Searching online for your state and “Paid Family Leave” to see if your state has a similar program

* Finding out if your employer offers Short Term Disability insurance. If so, read the benefits plan carefully. If it covers pregnancy, you may be able to submit a claim to the insurance plan and receive partial payment for your time off.

* Finding out if your employer offers maternity, paternity, or parental leave. You could find out either by reading an employee handbook if your employer has one, or asking your Human Resources department.
`

/*
The RESULTS constant contains all results that may be displayed
to users.  For example, one user may get a single result like
'not eligible for any programs', while another use may get multiple
results like 'you are eligible for FMLA' and 'you are eligible for SNAP'.
*/
const RESULTS = {
  not_supported: {label: 'Sorry', md: NOT_SUPPORTED},
  not_ca: {label: 'Sorry', md: NOT_SUPPORTED},
  not_w2: {label: 'Sorry', md: NOT_SUPPORTED},
  low_earner: {label: 'Sorry', description: 'Please check with your employer.  Lorem ipsum.'},
  
  //caliornians
  sdi_only: {label:'Yes, you qualify for paid time off', description:'placeholder'},
  pdl_non_govt: {label:'Yes, you qualify for paid time off', description:'placeholder'},
  pdl_govt: {label:'Yes, you qualify for paid time off', description:'placeholder'},
  cfra_non_govt: {label:'Yes, you qualify for paid time off', description:'placeholder'},
  cfra_govt: {label:'Yes, you qualify for paid time off', description:'placeholder'},
  bonding: {label:'Yes, you should bond with baby!', description:'placeholder'},
  medical_need: {label:'Care for yourself', description:'placeholder'},
  
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
      employ_at_least_5: undefined',
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
