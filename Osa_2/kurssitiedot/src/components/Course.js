import React from 'react'

const Header = (props) => {
    return (
      <div>
        <h2>{props.course}</h2>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
    <p> {props.part} {props.exercisesAmount} </p>
    )
  }
  
  const Content = ({ parts }) => {
    return (
        parts.map(part => <div key={part.id}> <Part part={part.name} exercisesAmount={part.exercises} /> </div>)
    )
  }
  
    const Total = ({ parts }) => {
      return (
        <div>
          <h3>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</h3>
        </div>
      )
    } 
  
  const Courses = ({ courses }) => {
    return (
      courses.map(course =>
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>)
    )
  }

export default Courses