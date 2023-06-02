import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

window.renderCounter = (containerId, data) => {
  const root = ReactDOM.createRoot(document.getElementById(containerId));
  root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
  // ReactDOM.render(
  //   <App data={data} />,
  //   document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountCounter = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Counter-container')) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  // ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}