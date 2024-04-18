import React from 'react';
import Alert1 from './Alert1/Alert1';

interface HelloWorld1Props {
  alertMessage: string;
}

const HelloWorld1 = ({ alertMessage }: HelloWorld1Props) => {
  return (
    <>
      <Alert1>
        <strong>Warning!</strong> {alertMessage}
      </Alert1>
      <h1>Button component</h1>
    </>
  );
};

export default HelloWorld1;
