import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*Note: You usually won't render a <Router> directly. */}
      {/*Instead, you'll render a router that is more specific to your environment */}
      {/*such as a <BrowserRouter> in web browsers or a <StaticRouter> for server rendering.*/}
      <BrowserRouter>
          <ScrollToTop />
      <App />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
