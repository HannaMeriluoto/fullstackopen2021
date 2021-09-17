import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }


  const Content = (props) => {
    return (
      <div>
        <Part part={part1} exercisesAmount={exercises1} />
        <Part part={part2} exercisesAmount={exercises2} />
        <Part part={part3} exersicesAmount={exercises3} />
      </div>
    )
  }
  const Part = (props) => {
    return (
    <p> {props.part} {props.exAmount} </p>
    )
  }


  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.one + props.two + props.three}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total one={exercises1} two={exercises2} three={exercises3} />
    </div>
  );
}

export default App;
