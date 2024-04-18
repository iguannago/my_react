import React from 'react';
import Alert1 from './Alert1/Alert1';
import { useState } from 'react';
import Button1 from './Button1/Button1';

interface HelloWorld1Props {
  alertMessage: string;
}

const HelloWorld1 = ({ alertMessage }: HelloWorld1Props) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <Alert1>
          <strong>Warning!</strong> {alertMessage}
        </Alert1>
      )}
      <Button1
        buttonTitle={'Warning'}
        buttonClass={'btn btn-warning'}
        onClick={() => setShowAlert(true)}
      />
    </>
  );
};

export default HelloWorld1;
