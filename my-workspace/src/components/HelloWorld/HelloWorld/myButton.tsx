interface MyButtonProps {
  message: string;
  onClick?: () => void;
}

const MyButton = ({ message, onClick }: MyButtonProps) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {message}
    </button>
  );
};

export default MyButton;
