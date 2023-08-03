import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // Make sure you configure this file

Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById('root'));
