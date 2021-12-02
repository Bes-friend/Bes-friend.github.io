import {EligibilityDisplayBlue} from './eligibility_display_blue.js'


/*
The RESULTS constant contains all results that may be displayed
to users.  For example, one user may get a single result like
'not eligible for any programs', while another use may get multiple
results like 'you are eligible for FMLA' and 'you are eligible for SNAP'.
*/
const RESULTS = {
  not_supported: {label: 'Sorry', description: 'Not supported.  Lorem ipsum.'},
  not_ca: {label: 'Sorry', description: 'Only supported for CA residents.  Lorem ipsum.'},
  not_ca_red: {label: 'Sorry', description: 'Only supported for CA residents.  RED.', html: '<b>only</b> supported for CA residents (this is HTML)'},
  not_ca_green: {label: 'Sorry', description: 'Only supported for CA residents.  GREEN.', md: 'only **supported** for CA residents (this is Markdown)'},
  not_ca_blue: {label: 'Sorry', description: 'Only supported for CA residents.  BLUE.', react: EligibilityDisplayBlue},
  not_w2: {label: 'Sorry', description: 'Only supported for W2 recipients.  Lorem ipsum.'},
  low_earner: {label: 'Sorry', description: 'Please check with your employer.  Lorem ipsum.'},
  high_earner: {label: 'Yay!', description: 'We have more work to do here.  Lorem ipsum.'},
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
      why_need_time_off: 'none',
      confirm_state_ca: undefined,
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined,
      what_color_is_your_rainbow: undefined
    },
    eligibilities: ['not_supported']
  },
  {
    label: 'Not California Red',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'n',
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined,
      what_color_is_your_rainbow: 'red'
    },
    eligibilities: ['not_ca_red']
  },
  {
    label: 'Not California green',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'n',
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined,
      what_color_is_your_rainbow: 'green'
    },
    eligibilities: ['not_ca_green']
  },
  {
    label: 'Not California blue',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'n',
      which_state: undefined,
      w2_employee: undefined,
      earned_300_dollars: undefined,
      what_color_is_your_rainbow: 'blue'
    },
    eligibilities: ['not_ca_blue']
  },
  {
    label: 'No W2',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'n',
      earned_300_dollars: undefined,
      what_color_is_your_rainbow: undefined
    },
    eligibilities: ['not_w2']
  },
  {
    label: 'Less than $300 in 18 months',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'n',
      what_color_is_your_rainbow: undefined
    },
    eligibilities: ['low_earner']
  },
  {
    label: 'TODO: Incomplete',
    answers: {
      why_need_time_off: 'any',
      confirm_state_ca: 'y',
      which_state: undefined,
      w2_employee: 'y',
      earned_300_dollars: 'y',
      what_color_is_your_rainbow: undefined
    },
    eligibilities: ['high_earner']
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
      what_color_is_your_rainbow: undefined
    },
    eligibilities: ['catchall']
  },
]

export {ELIGIBILITY_MATRIX, RESULTS};
