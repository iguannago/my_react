import React from 'react';

interface Button1Props {
  buttonTitle: string;
  buttonClass: string;
  onClick: () => void;
}

const Button1 = ({ buttonTitle, buttonClass, onClick }: Button1Props) => {
  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {buttonTitle}
    </button>
  );
};

export default Button1;
