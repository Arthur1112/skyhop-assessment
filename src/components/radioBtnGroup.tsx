import { useState } from 'react';
import '../styles/radioBtnGroup.css';

export interface RadioBtnGroupProps {
  data?: Array<{ label: string; id: string }>;
  onChange?: (value: string) => void;
  id?: string;
}

const RadioBtnGroup = ({ data, onChange, id }: RadioBtnGroupProps) => {
  const [radioBtnValue, setRadioBtnValue] = useState('');

  const _onChange = (value: string) => {
    setRadioBtnValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="container">
      {data &&
        data.map((item) => {
          return (
            <div className="radio">
              <input
                onChange={(e) => _onChange(item.id)}
                id={item.id}
                name={id}
                type="radio"
                checked={item.id === radioBtnValue}
              />
              <label htmlFor={item.id} className="radio-label">
                {item.label}
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default RadioBtnGroup;
