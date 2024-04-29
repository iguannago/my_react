interface Alert2Props {
  alertMessage: string;
}

const Alert2 = ({ alertMessage }: Alert2Props) => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      {alertMessage}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert2;
