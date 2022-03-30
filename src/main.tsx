// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

/** Trying with React 18 * */
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
