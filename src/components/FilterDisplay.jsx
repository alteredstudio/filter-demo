import React from 'react';

const FilterDisplay = ({
  title,
  handleChangeCallback,
  arrayToRender,
  renderFunction,
}) => (
  <div>
    <h3>
      <strong>
        {title}
      </strong>
    </h3>
    <input type="text" onChange={handleChangeCallback} />
    <br />
    <br />
    <br />
    <div className="row">
      { arrayToRender.map(arrayItem => renderFunction(arrayItem)) }
    </div>
  </div>
);

export default FilterDisplay;
