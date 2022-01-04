import React from 'react';
import renderHTML from 'react-render-html';
import ReactMarkdown from 'react-markdown'

import {RESULTS} from './eligibility_matrix.js';

function Eligibility(info) {
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
  render() {
    if (this.props.hidden) {
      return null;
    }
    const renderValue = []
    for (let i = 0; i < this.props.eligibilities.length; i++) {
      console.log("Rendering eligibilities item ", i, this.props.eligibilities[i]);
      renderValue.push(<Eligibility eligibility={this.props.eligibilities[i]} values={this.props.values} key={this.props.eligibilities[i]}/>)
    }

    return renderValue;
  }
}

export {EligibilitiesDisplay};