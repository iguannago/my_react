import Alert2 from './Alert2';
import Button2 from './Button2';
import { useState } from 'react';

interface HelloWorld2Props {
  alertMessage: string;
}

const HelloWorld2 = ({ alertMessage }: HelloWorld2Props) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && <Alert2 alertMessage={alertMessage} />}
      <Button2 buttonTitle="Click me!" onClick={() => setShowAlert(true)} />
    </>
  );
};

export default HelloWorld2;
