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

const Statics = ({ stats }) => {
  return (
    <div>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
    </div>
  )
}

const App = () => {

  const [stats, setStats] = useState({good: 0, neutral: 0, bad: 0})

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text="😍 Good" handleClick={() => setStats({
        ...stats,
        good: stats.good + 1
      })} />
      <Button text="😐 Neutral" handleClick={() => setStats({
        ...stats,
        neutral: stats.neutral + 1
      })} />
      <Button text="😠 Bad" handleClick={() => setStats({
        ...stats,
        bad: stats.bad + 1
      })} />
      <Statics stats={stats} />
    </>
  )
}



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);