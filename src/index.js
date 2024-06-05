import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/fontawesome.all.min.css'
import './assets/css/navber copy.css'
import './assets/css/navber.css'
import './assets/css/responsive.css'
import './assets/css/style.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='660933486766-v55kimec6i5sdpo2824c8qqnqfj4j2jo.apps.googleusercontent.com'>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </GoogleOAuthProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
