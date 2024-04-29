interface Button2Props {
  buttonTitle: string;
}

const Button2 = ({ buttonTitle }: Button2Props) => {
  return (
    <button type="button" className="btn btn-success">
      {buttonTitle}
    </button>
  );
};

export default Button2;
