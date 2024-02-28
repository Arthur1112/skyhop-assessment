import './App.css';
import Button from './components/button';
import DropDownSelect from './components/dropDownSelect';
import RadioBtnGroup from './components/radioBtnGroup';
import ToggleSwitch from './components/toggleSwitch';

function App() {
  return (
    <div className="App">
      <Button variant="primary" text="Upload Manifest" />
      <Button variant="secondary" text="Upload Manifest" />
      <Button variant="submit" text="Upload Manifest" />
      <Button variant="close" text="Upload Manifest" />
      <ToggleSwitch onChange={(e) => console.log(e)} />
      <RadioBtnGroup
        onChange={(e) => console.log(e)}
        data={[
          { label: 'yes', id: 'yes' },
          { label: 'no', id: 'no' },
        ]}
      />
      <DropDownSelect
        onSelect={(e) => console.log(e)}
        data={[
          {
            option: 'Option 1',
          },
          {
            option: 'Option 2',
          },
          {
            option: 'Option 3',
          },
        ]}
      />
    </div>
  );
}

export default App;
