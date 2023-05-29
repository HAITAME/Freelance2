import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import * as serviceWorker from "../src/service-worker";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


serviceWorkerRegistration.register();