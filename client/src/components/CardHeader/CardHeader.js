import React from 'react';

const BCardHeader = props => {
  return (
    <div>
      <h3 className="text-center">
        <strong>{props.children}</strong>
      </h3>
    </div>
  );
};

export default BCardHeader;
