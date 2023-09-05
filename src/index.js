import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/Narvbar';
import Rodape from './components/rodape/Rodape';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>

    <Rodape
    item1={"item1"}
    item2={"item2"}
    item3={"item3"}
    item4={"item1"}
    item5={"item2"}
    />
    <Rodape
    item1={"item1"}
    item2={"item2"}
    item4={"item1"}
    
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
