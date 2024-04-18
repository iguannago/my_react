import React, { useState } from 'react';
import MyAlert from './myAlert';
import MyButton from './myButton';

const HelloWorld = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {visible && (
        <MyAlert onClose={() => setVisible(false)}>
          Hello <strong>Mr. Crespo!</strong>
        </MyAlert>
      )}
      <MyButton message="Click Me!" onClick={() => setVisible(true)} />
    </div>
  );
};

export default HelloWorld;
