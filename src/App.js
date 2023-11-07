

import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppScreen from './component/AppScreen'; // Modified component name

function App() {
  return (
    <div className='bg-dark container-fluid'>
      <AppScreen /> {/* Modified component name */}
    </div>
  );
}

export default App;

