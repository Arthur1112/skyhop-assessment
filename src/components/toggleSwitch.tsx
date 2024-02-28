import { useState } from 'react';
import '../styles/toggleSwitch.css';

export interface ToggleSwitchProps {
  onChange?: (x: string) => void;
}

const ToggleSwitch = ({ onChange = () => {} }: ToggleSwitchProps) => {
  const [toggleValue, setToggleValue] = useState('on');

  const _onToggle = (e: any) => {
    switch (toggleValue) {
      case 'on':
        if (onChange) {
          onChange('on');
        }
        return setToggleValue('off');
      case 'off':
        if (onChange) {
          onChange('off');
        }
        return setToggleValue('on');
    }
  };

  return (
    <label className="switch">
      <input value={toggleValue} onChange={_onToggle} type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
