import React from 'react';
import renderHTML from 'react-render-html';
import ReactMarkdown from 'react-markdown'

import {RESULTS} from './eligibility_matrix.js';

function Eligibility(eligibility) {
  console.log("Rendering eligibility ", eligibility);
  if (RESULTS[eligibility.value].react) {
    var label = <span className='attention'>{RESULTS[eligibility.value].label}</span>
    var element = React.createElement(RESULTS[eligibility.value].react, null);
    return [
      label,
      element
    ];
  } else if (RESULTS[eligibility.value].md) {
    return (
      <div>
        <span className='attention'>{RESULTS[eligibility.value].label}:</span>&nbsp;<ReactMarkdown children={RESULTS[eligibility.value].md} />
      </div>
    );
  } else if (RESULTS[eligibility.value].html) {
    return (
      <div>
        <span className='attention'>{RESULTS[eligibility.value].label}:</span>&nbsp;<span>{renderHTML(RESULTS[eligibility.value].html)}</span>
      </div>
    );
  }
  return (
    <div>
      {RESULTS[eligibility.value].label}: {RESULTS[eligibility.value].description}
    </div>
  );
}

class EligibilitiesDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {eligibilities: []};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ eligibilities: e });
  }

  render() {
    const renderValue = []
    for (let i = 0; i < this.state.eligibilities.length; i++) {
      console.log("Rendering eligibilities item ", i, this.state.eligibilities[i]);
      renderValue.push(<Eligibility value={this.state.eligibilities[i]} key={i}/>)
    }

    return renderValue;
  }
}

export {EligibilitiesDisplay};