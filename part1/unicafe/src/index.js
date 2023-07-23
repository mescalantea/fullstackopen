import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '@picocss/pico/css/pico.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} type='button'>{text}</button>
  )
}

const Statics = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <>
      <h1>Give Feedback</h1>
      <Button text="😍 Good" handleClick={() => setGood(good + 1)} />
      <Button text="😐 Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="😠 Bad" handleClick={() => setBad(bad + 1)} />
      <Statics good={good} neutral={neutral} bad={bad} />
    </>
  )
}



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);