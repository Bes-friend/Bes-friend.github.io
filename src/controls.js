import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hidden: true};
    this.restartSurvey = this.restartSurvey.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(e);
  }

  restartSurvey() {
    this.props.onShowSurvey();
  }

  render() {
    if (this.state.hidden) {
      return null;
    }
    
    return <div>
      <button onClick={this.restartSurvey}>« Restart survey</button>
    </div>
  }
}

export {Controls};
