import { on } from 'events';

interface MyAlertProps {
  children: React.ReactNode;
  onClose?: () => void;
}

const MyAlert = ({ children, onClose }: MyAlertProps) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default MyAlert;
