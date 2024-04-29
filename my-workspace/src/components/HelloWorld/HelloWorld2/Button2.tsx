interface Button2Props {
  buttonTitle: string;
  onClick: () => void;
}

const Button2 = ({ buttonTitle, onClick }: Button2Props) => {
  return (
    <button type="button" className="btn btn-success" onClick={onClick}>
      {buttonTitle}
    </button>
  );
};

export default Button2;
