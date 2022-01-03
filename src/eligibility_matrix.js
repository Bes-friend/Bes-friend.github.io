import {EligibilityDisplayCFRAGovtEmployee} from './components/eligibilities_display_cfra_eligible_public_school_or_government_employee.js';
import {EligibilityDisplayPDLEligibleGovtEmployee} from './components/eligibility_display_pdl_eligible_govt_employee.js';
import {EligibilityDisplayCFRA} from './components/eligibilities_display_cfra_eligible.js';
import {EligibilityDisplayPDLEligible} from './components/eligibilities_display_pdl_eligible.js';
import {EligibilityDisplaySDIOnly} from './components/eligibilities_display_sdi_only.js';
import {EligibilityDisplayBabyBonding} from './components/eligibilities_display_baby_bonding.js';
import {EligibilityDisplayMedicalNeed} from './components/eligibilities_display_medical_need.js';
import {EligibilityDisplayNotSupported} from './components/eligibilities_display_not_supported.js';

/*
The RESULTS constant contains all results that may be displayed
to users.  For example, one user may get a single result like
'not eligible for any programs', while another use may get multiple
results like 'you are eligible for FMLA' and 'you are eligible for SNAP'.
*/
//TODO: "label" is not yet localized, but we might delete it?
const RESULTS = {
  cfra_eligible_public_school_or_government_employee: {react: EligibilityDisplayCFRAGovtEmployee},
  pdl_eligible_public_school_or_government_employee: {react: EligibilityDisplayPDLEligibleGovtEmployee},
  cfra_eligible: {react: EligibilityDisplayCFRA},
  pdl_eligible: {react: EligibilityDisplayPDLEligible},
  sdi_only: {react: EligibilityDisplaySDIOnly},
  baby_bonding: {react: EligibilityDisplayBabyBonding},
  medical_need: {react: EligibilityDisplayMedicalNeed},
  not_supported: {react: EligibilityDisplayNotSupported},
  not_ca: {react: EligibilityDisplayNotSupported},
  not_w2: {react: EligibilityDisplayNotSupported},
  low_earner: {description: 'Please check with your employer.  Lorem ipsum.'},
  
  //caliornians
  //sdi_only: {description:'placeholder'},
  pdl_non_govt: {description:'placeholder'},
  pdl_govt: {description:'placeholder'},
  cfra_non_govt: {description:'placeholder'},
  cfra_govt: {description:'placeholder'},
  bonding: {description:'placeholder'},
  //medical_need: {description:'placeholder'},
  
  /*
  high_earner: {description: 'You qualify for Paid Family and Medical Leaave through the California Paid Family Leave program.'},
  job_protected: {description: 'When you return from your time off, your employer must give you your job back (or an equivalent job.)'},
  pregnant_and_cfra: {description: 'You can start your time off up to 4 weeks before your due date, and take up to 18 weeks after your baby is born. However, the Paid Family Leave program will only pay up to 17 weeks.'},
  c_section: {description: 'Typically, women who experience a c-section will get an additional 2 weeks of leave. This means that you can take up to 20 weeks after your baby is born, and the Paid Family Leave program will pay up to 19 weeks.'},
  bonding_only: {description:'For non-birthing parents, you qualify for 8 weeks of time off.'},
  */
  //based on latest survey questions
  
  
  catchall: {description: 'We do not have a coherent response for these choices.  Lorem ipsum. 5!'},
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
