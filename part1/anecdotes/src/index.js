import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '@picocss/pico'
import './index.css';


const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const handleClick = () => {
    let index = 0
    do {
      // avoid repetition
      index = Math.round(Math.random() * (anecdotes.length - 1))
    } while (index === selected)
    setSelected(index)
  }

  const handleVote = () => {
    const newPoints = points.map((p, i) => i === selected ? p + 1 : p)
    // update points
    setPoints(newPoints)
    // update most voted
    let index = 0
    let max = 0
    for (let i = 0; i < newPoints.length; i++) {
      if(newPoints[i] > max){
        max = newPoints[i]
        index = i
      }
    }
    setMostVoted(index)
  }

  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVoted]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);
