import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.restartSurvey = this.restartSurvey.bind(this);
  }

  restartSurvey() {
    this.props.onShowSurvey();
  }

  render() {
    return <div>
        { !this.props.hideRestart &&
        <button onClick={this.restartSurvey}>
          « Restart survey
        </button>
        }
      </div>
  }
}

export {Controls};