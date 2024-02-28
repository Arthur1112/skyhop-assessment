import '../styles/toggleSwitch.css';

export interface ToggleSwitchProps {
  onChange?: () => {};
}

const ToggleSwitch = ({ onChange }: ToggleSwitchProps) => {
  return (
    <label className="switch">
      <input onChange={onChange} type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
