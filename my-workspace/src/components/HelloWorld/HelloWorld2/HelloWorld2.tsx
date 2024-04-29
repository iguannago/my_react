import Alert2 from './Alert2';
import Button2 from './Button2';

interface HelloWorld2Props {
  alertMessage: string;
}

const HelloWorld2 = ({ alertMessage }: HelloWorld2Props) => {
  return (
    <>
      <Alert2 alertMessage={alertMessage} />
      <Button2 buttonTitle="Click me!" />
    </>
  );
};

export default HelloWorld2;
