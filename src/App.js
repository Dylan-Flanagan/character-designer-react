import './App.css';
import Controls from './Components/Controls/Controls.js';
import Display from './Components/Display/Display.js';
import { useState } from 'react';

function App() {
  const [head, setHead] = useState('head');

  return (
    <main>
      <Controls {...{ setHead }} />
      <Display {...{ head }} />
    </main>
  );
}

export default App;
