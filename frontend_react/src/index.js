import * as ReactDOMClient from 'react-dom/client';

import App from './App';
import './index.css';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <App />
);