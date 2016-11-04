import React from 'react';
import Layout from './Layout';

const TwoColumnLayout = ({ Main, Side }) => {
  return Layout(() => {
    return (
      <div>
        <div>
          <h1>First Column</h1>
          <Side />
        </div>

        <div>
          <h1>Second Column</h1>
          <Main />
        </div>
      </div>
    );
  });
};

export default TwoColumnLayout;