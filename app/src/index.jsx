import { createElement } from 'react';  
import ReactDOM from 'react-dom';
import App from './components/App.jsx';  


ReactDOM.hydrate(
    createElement(App,{}),
    document.getElementById("root")
  );