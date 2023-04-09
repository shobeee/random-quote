import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import Random from './components/Random';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './components/styles.css'







const root = ReactDOM.createRoot(document.getElementById('root'));
  

export default function App() {
  return (  <React.StrictMode>

 


 

    <div>
    <Random />
    </div>
    </React.StrictMode>
  )
}


;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
root.render(<App />)
reportWebVitals();
