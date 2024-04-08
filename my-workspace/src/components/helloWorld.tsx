import React, { useState } from 'react';
import MyAlert from './myAlert';

const HelloWorld = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {visible && (
        <MyAlert onClose={() => setVisible(false)}>
          Hello <strong>Mr. Crespo!</strong>
        </MyAlert>
      )}
      {/* <button onClick={() => setVisible(!visible)}>Toggle Alert</button> */}
    </div>
  );
};

export default HelloWorld;
