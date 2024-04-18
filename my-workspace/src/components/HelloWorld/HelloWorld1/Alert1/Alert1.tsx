import React from 'react';

interface Alert1Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Alert1 = ({ children, onClose }: Alert1Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
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

export default Alert1;
