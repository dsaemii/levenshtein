import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Levenshtein_part1 from './Levenshtein_part1';
import Levenshtein_part2 from './Levenshtein_part2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Levenshtein_part2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
