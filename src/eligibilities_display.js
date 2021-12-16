import React from 'react';
import renderHTML from 'react-render-html';
import ReactMarkdown from 'react-markdown'

import {RESULTS} from './eligibility_matrix.js';

function Eligibility(info) {
  console.log("Rendering eligibility info", info);
  const result = RESULTS[info.eligibility];
  if (result.react) {
    var label = <span className='attention'>{result.label}</span>
    var element = React.createElement(result.react, info.values);
    return [
      label,
      element
    ];
  } else if (result.md) {
    return (
      <div>
        <span className='attention'>{result.label}:</span>&nbsp;<ReactMarkdown children={result.md} />
      </div>
    );
  } else if (result.html) {
    return (
      <div>
        <span className='attention'>{result.label}:</span>&nbsp;<span>{renderHTML(result.html)}</span>
      </div>
    );
  }
  return (
    <div>
      {result.label}: {result.description}
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
    this.setState(e);
  }

  render() {
    const renderValue = []
    for (let i = 0; i < this.state.eligibilities.length; i++) {
      console.log("Rendering eligibilities item ", i, this.state.eligibilities[i]);
      renderValue.push(<Eligibility eligibility={this.state.eligibilities[i]} values={this.state.values} key={i}/>)
    }

    return renderValue;
  }
}

export {EligibilitiesDisplay};