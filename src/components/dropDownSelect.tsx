import { useState } from 'react';
import '../styles/dropDown.css';
export interface DropDownSelectProps {
  onSelect?: (value: string) => void;
  text?: string;
  data?: Array<{ option: string }>;
}

const DropDownSelect = ({ onSelect, data }: DropDownSelectProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Client');
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
        className="dropdown-btn"
      >
        {selectedOption}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1792 1792"
          id="Caret"
        >
          <path
            d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19L403 749q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"
            fill="rgb(119 119 119)"
          ></path>
        </svg>
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
