import './App.css';
import Button from './components/button';
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
    </div>
  );
}

export default App;
