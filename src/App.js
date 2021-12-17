import './App.css';
import './survey.css';
import './eligibility_results.css';
import React from 'react'; 



function App() {
  return (
    <div className="App">
      <div>
        This is the header
      </div>
      <div id="surveyElement" />
      <div id="eligibilityResults" />
      <div id="controls" />
      <div>
        This is the footer
      </div>
    </div>
  );
}

export default App;
