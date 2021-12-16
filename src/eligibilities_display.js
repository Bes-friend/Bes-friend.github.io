import React from 'react';
import renderHTML from 'react-render-html';
import ReactMarkdown from 'react-markdown'

import {RESULTS} from './eligibility_matrix.js';

function Eligibility(info) {
  console.log("Rendering eligibility info", info);
  const result = RESULTS[info.eligibility];
  if (result.react) {
    let label = <span className='attention' key='label'>{result.label}</span>
    let elementProps = { ...info.values };
    elementProps['key'] = 'eligibility'
    let element = React.createElement(result.react, elementProps);
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
    this.state = {eligibilities: [], values: {}, hidden: true};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(e);
  }

  render() {
    if (this.state.hidden) {
      return null;
    }
    const renderValue = []
    for (let i = 0; i < this.state.eligibilities.length; i++) {
      console.log("Rendering eligibilities item ", i, this.state.eligibilities[i]);
      renderValue.push(<Eligibility eligibility={this.state.eligibilities[i]} values={this.state.values} key={this.state.eligibilities[i]}/>)
    }

    return renderValue;
  }
}

export {EligibilitiesDisplay};