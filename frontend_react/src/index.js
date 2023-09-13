import React, { createRoot } from 'react';

import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'), { strict: true });

root.render(
  <App />
);