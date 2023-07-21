import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => {
  const { name, exercises } = props;
  return (<p>{name} {exercises}</p>)
}

const Total = (props) => (<p>Number of exercises {props.total}</p>)

const App = () => {


  const data = {
    course: 'Half Stack application development',
    content: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  let total = 0;

  return (
    <div>
      <Header course={data.course} />
      {data.content.map(({ name, exercises }) => {
        total += exercises
        return <Content name={name} exercises={exercises} key={name} />
      })}
      <Total total={total} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);