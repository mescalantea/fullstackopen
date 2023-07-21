import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (<p>{props.part} {props.exercises}</p>)

const Total = (props) => (<p>Number of exercises {props.total}</p>)

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  let total = 0

  return (
    <div>
      <Header course={course} />
      <div>
        {parts.map(({ name, exercises }) => {
          total += exercises
          return <Part part={name} exercises={exercises} />
        })
        }
      </div>
      <Total total={total} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);