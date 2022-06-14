import { useState } from 'react';
import './App.css';
import { DashboardCore } from './core/dashboard-core'

const appendScript = (scriptToAppend: string) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
}

function App() {

  const [script, setScript] = useState(appendScript('env-config.js'))

  return (
    <div className="app">
      <DashboardCore></DashboardCore>
    </div>
  );
}

export default App;
