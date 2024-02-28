import './App.css';
import Button from './components/button';
import ToggleSwitch from './components/toggleSwitch';

function App() {
  return (
    <div className="App">
      <Button variant="primary" text="Upload Manifest" />
      <Button variant="secondary" text="Upload Manifest" />
      <Button variant="submit" text="Upload Manifest" />
      <Button variant="close" text="Upload Manifest" />
      <ToggleSwitch />
    </div>
  );
}

export default App;
