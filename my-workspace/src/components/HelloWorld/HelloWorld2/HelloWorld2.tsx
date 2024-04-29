import Alert2 from './Alert2';

interface HelloWorld2Props {
  alertMessage: string;
}

const HelloWorld2 = ({ alertMessage }: HelloWorld2Props) => {
  return <Alert2 alertMessage={alertMessage} />;
};

export default HelloWorld2;
