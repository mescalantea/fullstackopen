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
  if (!(stats.good > 0 || stats.neutral > 0 || stats.bad > 0)) {
    return (<p>No feedback given</p>)
  }
  const all = stats.good + stats.neutral + stats.bad
  const positive = all > 0 ? stats.good / all * 100 : 0
  const averageScore = all > 0 ? (stats.good * stats.values.good + stats.neutral * stats.values.neutral + stats.bad * stats.values.bad) / all : 0

  return (
    <div>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
      <p>All: {all}</p>
      <p>Average: {averageScore}</p>
      <p>Positive: {positive.toFixed(2)}%</p>
    </div>
  )
}

const App = () => {

  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    values: {
      good: 1,
      neutral: 0,
      bad: -1
    }
  })

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