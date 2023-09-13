import React, { createRoot } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'), { strict: true });

root.render(
  <App />
);