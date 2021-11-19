import React from 'react';
import './ValidationUi.scss';

// eslint-disable-next-line react/prop-types
const ValidationUi = ({ validationStatus = 'Pending', validate }) => (
  <div id="validation-wrapper">
    <button className="validate-button" type="button" onClick={() => validate()}>Validate</button>
    <span className="margin-md">{validationStatus}</span>
  </div>
);

export default ValidationUi;
