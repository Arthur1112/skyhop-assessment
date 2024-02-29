import { useState } from 'react';
import '../styles/dropDown.css';
import { DownCaret } from '../assets/svgs';
export interface DropDownSelectProps {
  onSelect?: (value: string) => void;
  label?: string;
  data?: Array<{ option: string }>;
  size?: 'small' | 'medium';
}

const DropDownSelect = ({
  onSelect,
  data,
  label,
  size = 'medium',
}: DropDownSelectProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    label || 'Select Client'
  );
  const _onSelect = (e: any) => {
    if (onSelect) {
      onSelect(e.target.id);
    }
    setOpenDropdown(!openDropdown);
    setSelectedOption(`${e.target.id}`);
  };
  return (
    <div className="dropdown-container">
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className={`dropdown-btn ${size}`}
      >
        {selectedOption}
        <DownCaret />
      </div>
      {openDropdown && (
        <div className="dropdown-content-wrapper">
          {data &&
            data.map((item) => {
              return (
                <div
                  id={item.option}
                  onClick={_onSelect}
                  className="dropdown-option"
                >
                  {item.option}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default DropDownSelect;
