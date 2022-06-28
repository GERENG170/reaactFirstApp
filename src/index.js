import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.jsx";
// import {BrowserRouter} from "react-router"
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById("root"));
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>



  root.render(
    <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </React.StrictMode>
  )









