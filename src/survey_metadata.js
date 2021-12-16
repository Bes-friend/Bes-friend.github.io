/*
The surveyJSON variable contains the definition of the survey
that will be displayed to users.

The JSON can be edited by hand if you're feeling brave.
Alternately, use the GUI at https://surveyjs.io/ can be used
to edit the survey.  Once complete, the JSON for your survey
is available via the "JSON Editor" tab in SurveyJS.io.io.

Once you have JSON you would like to use, replace the value
of the "surveyJSON" variable with that value.  This file should
look something like:

  var surveyJSON = [YOUR JSON HERE]

  export {surveyJSON};

NOTE: This does NOT define the rules about which users are
eligible for which programs.  That information is stored in 
the eligibility_matrix.js file.
*/

var surveyJSON = {
 "title": "SimpleLeavePlanner",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "text",
     "name": "What is your birthday?",
     "valueName": "birthday",
     "inputType": "date",
     "min": "1901-01-01",
     "max": "2030-01-01"
    },
    {
      "type": "dropdown",
      "name": "choose_specific_eligibility",
      "title": "Choose a specific eligibility (for testing)",
      "choices": [
      {
        "value": "cfra_eligible_public_school_or_government_employee",
        "text": "CFRA eligible public school or government employee"
      },
      {
        "value": "pdl_eligible_public_school_or_government_employee",
        "text": "PDL eligible public school or government employee"
      },
      {
        "value": "cfra_eligible",
        "text": "CFRA eligible "
      },
      {
        "value": "pdl_eligible",
        "text": "PDL Eligible"
      },
      {
        "value": "sdi_only",
        "text": "SDI only"
      },
      {
        "value": "baby_bonding",
        "text": "Baby Bonding"
      },
      {
        "value": "medical_need",
        "text": "Medical Need"
      },
      {
        "value": "not_supported",
        "text": "Not Supported"
      },
      ]
    },
    {
     "type": "radiogroup",
     "name": "why_need_time_off",

     "title": "For which of the following reasons do you need time off?",
     "isRequired": true,
     "choices": [
      {
       "value": "pregnant",
       "text": "For pregnancy and childbirth"
      },
      {
       "value": "care_for_newborn",
       "text": "To care for a newborn (non-pregnant partner), or newly adopted or fostered child"
      },
      {
       "value": "medical_need",
       "text": "For medical treatment or recovery"
      }
     ],
     "hasOther": true
    },
    {
     "type": "radiogroup",
     "name": "confirm_state_ca",
     "visibleIf": "{why_need_time_off} <> 'Other'",

     "title": "Do you work in California?",
     "isRequired": true,
     "choices": [
      {
       "value": "y",
       "text": "Yes"
      },
      {
       "value": "n",
       "text": "No"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "which_state",
     "visible": false,
     "visibleIf": "{confirm_state_ca} = 'n'",
     "title": "Tell us which state or territory you live in",
     "choices": [
      {
       "value": "AL",
       "text": "Alabama (AL)"
      },
      {
       "value": "AK",
       "text": "Alaska (AK)"
      },
      {
       "value": "AZ",
       "text": "Arizona (AZ)"
      },
      {
       "value": "AR",
       "text": "Arkansas (AR)"
      },
      {
       "value": "CA",
       "text": "California (CA)"
      },
      {
       "value": "CO",
       "text": "Colorado (CO)"
      },
      {
       "value": "CT",
       "text": "Connecticut (CT)"
      },
      {
       "value": "DE",
       "text": "Delaware (DE)"
      },
      {
       "value": "DC",
       "text": "District of Columbia (DC)"
      },
      {
       "value": "FL",
       "text": "Florida (FL)"
      },
      {
       "value": "GA",
       "text": "Georgia (GA)"
      },
      {
       "value": "HI",
       "text": "Hawaii (HI)"
      },
      {
       "value": "ID",
       "text": "Idaho (ID)"
      },
      {
       "value": "IL",
       "text": "Illinois (IL)"
      },
      {
       "value": "IN",
       "text": "Indiana (IN)"
      },
      {
       "value": "IA",
       "text": "Iowa (IA)"
      },
      {
       "value": "KS",
       "text": "Kansas (KS)"
      },
      {
       "value": "KY",
       "text": "Kentucky (KY)"
      },
      {
       "value": "LA",
       "text": "Louisiana (LA)"
      },
      {
       "value": "ME",
       "text": "Maine (ME)"
      },
      {
       "value": "MD",
       "text": "Maryland (MD)"
      },
      {
       "value": "MA",
       "text": "Massachusetts (MA)"
      },
      {
       "value": "MI",
       "text": "Michigan (MI)"
      },
      {
       "value": "MN",
       "text": "Minnesota (MN)"
      },
      {
       "value": "MS",
       "text": "Mississippi (MS)"
      },
      {
       "value": "MO",
       "text": "Missouri (MO)"
      },
      {
       "value": "MT",
       "text": "Montana (MT)"
      },
      {
       "value": "NE",
       "text": "Nebraska (NE)"
      },
      {
       "value": "NV",
       "text": "Nevada (NV)"
      },
      {
       "value": "NH",
       "text": "New Hampshire (NH)"
      },
      {
       "value": "NJ",
       "text": "New Jersey (NJ)"
      },
      {
       "value": "NM",
       "text": "New Mexico (NM)"
      },
      {
       "value": "NY",
       "text": "New York (NY)"
      },
      {
       "value": "NC",
       "text": "North Carolina (NC)"
      },
      {
       "value": "ND",
       "text": "North Dakota (ND)"
      },
      {
       "value": "OH",
       "text": "Ohio (OH)"
      },
      {
       "value": "OK",
       "text": "Oklahoma (OK)"
      },
      {
       "value": "OR",
       "text": "Oregon (OR)"
      },
      {
       "value": "PA",
       "text": "Pennsylvania (PA)"
      },
      {
       "value": "RI",
       "text": "Rhode Island (RI)"
      },
      {
       "value": "SC",
       "text": "South Carolina (SC)"
      },
      {
       "value": "SD",
       "text": "South Dakota (SD)"
      },
      {
       "value": "TN",
       "text": "Tennessee (TN)"
      },
      {
       "value": "TX",
       "text": "Texas (TX)"
      },
      {
       "value": "UT",
       "text": "Utah (UT)"
      },
      {
       "value": "VT",
       "text": "Vermont (VT)"
      },
      {
       "value": "VA",
       "text": "Virginia (VA)"
      },
      {
       "value": "WA",
       "text": "Washington (WA)"
      },
      {
       "value": "WV",
       "text": "West Virginia (WV)"
      },
      {
       "value": "WI",
       "text": "Wisconsin (WI)"
      },
      {
       "value": "WY",
       "text": "Wyoming (WY)"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "w2_employee",
     "visible": false,
     "visibleIf": "{confirm_state_ca} = 'y'",
     "title": "Are you currently an employee who receives a W-2 at the end of the year? ",
     "description": "(If you are currently self-employed, an independent contractor, or unemployed, answer No.) ",
     "isRequired": false,
     "choices": [
      {
       "value": "y",
       "text": "Yes"
      },
      {
       "value": "n",
       "text": "No"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "earned_300_dollars",
     "visible": false,
     "visibleIf": "{confirm_state_ca} = 'y' and {w2_employee} = 'y' and {why_need_time_off} <> 'other'",
     "title": "Have you earned at least $300 over the last 18 months?",
     "description": "(It's ok if you earned the $300 over many paychecks, and from different employers. It all counts.)",
     "isRequired": false,
     "choices": [
      {
       "value": "y",
       "text": "Yes"
      },
      {
       "value": "n",
       "text": "No"
      }
     ]
    },
    {
     "type": "radiogroup",

     "name": "government",
     "visible": false,
     "visibleIf": "{earned_300_dollars} = 'y'",
     "title": "Do you work for a public school district, or the federal, state, or local government?",
     "requiredIf": "{earned_300_dollars} = 'y'",
     "choices": [
      {
       "value": "y",
       "text": "Yes"
      },
      {
       "value": "n",
       "text": "No"
      }
     ]
    },
    {
     "type": "radiogroup",

     "name": "employ_at_least_5",
     "visibleIf": "{earned_300_dollars} = 'y'",
     "title": "Does your employer employ at least 5 people, including you?",
     "isRequired": true,
     "requiredIf": "{earned_300_dollars} = 'y'",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "work_at_least_1_year_1250_hours",
     "visible": false,
     "visibleIf": "{employ_at_least_5} = 'yes'",
     "title": "Have you worked at your current job for at least 1 year, at least part time?",
     "description": "(Part time means at least 1,250 hours over the last 12 months, or about 25 hours per week.)",
     "isRequired": true,

     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ]
    }
   ]
  }
 ],
 "triggers": [
  {
   "type": "complete",
   "expression": "{why_need_time_off} = 'item2'"
  },
  {
   "type": "complete",
   "expression": "{which_state} notempty"
  },
  {
   "type": "complete",
   "expression": "{w2_employee} = 'n'"
  },
  {
   "type": "complete",
   "expression": "{earned_300_dollars} = 'n'"
  }
 ],
 "showTitle": false,
 "showCompletedPage": false
}

export {surveyJSON};
