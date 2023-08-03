import React from 'react';
import './App.css';
import BulkUploadComponent from './BulkUploadComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>File Upload App</h1>
      </header>
      <main>
        <BulkUploadComponent />
      </main>
    </div>
  );
}

export default App;
