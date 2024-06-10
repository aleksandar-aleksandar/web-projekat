import React, { useState } from 'react';
import '../styles/togglebutton.css';

const ToggleButton = ({setAdminMode}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  if(isToggled){
    setAdminMode(true)
  }else{
    setAdminMode(false)
  }
  return (
    <div className={`toggle-button ${isToggled ? 'active' : ''}`} onClick={handleToggle}>
      <div className="toggle-knob"></div>
    </div>
  );
};

export default ToggleButton;
