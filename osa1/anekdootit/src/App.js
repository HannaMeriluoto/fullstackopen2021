import React, { useState } from 'react'

const Anecdotes = ({ text, anecdotes, selected, votes }) => {
  return (
    <div>
      <h1>{text}</h1>
      <div>{anecdotes[selected]}</div>
      <div>{votes[selected]} votes</div>
    </div>
  )
}

const Winner = ({ text, max, winner, mostVotes }) => {
  if (mostVotes !== "") {
  return (
    <div>
      <h1>{text}</h1>
      <div>{winner}</div>
      <div>{max} votes</div>
    </div>
  ) 
  } else {
    return (
    <><h1>{text}</h1><div>No votes given</div></>)
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState('')
  
  const handleVotes = () => {
    const valueToChange = votes[selected]
    setVotes({...votes, [selected]: valueToChange + 1})
      if (valueToChange +1 > votes[mostVotes] || mostVotes === '') {
        setMostVotes(selected)
      }
  }

  const handleNext = () => {
    const min = Math.ceil(0)
    const max = Math.floor(anecdotes.length)
    return (
      setSelected(Math.floor(Math.random() * (max - min) + min))
    ) 
  }

  return (
    <div>
      <Anecdotes text={'Anecdote of the day'} anecdotes={anecdotes} selected={selected} votes={votes} />
      <button onClick={handleVotes}> Give a vote</button>
      <button onClick={handleNext}>Next anecdote</button>
      <Winner text={'Anecdote with most votes'} max={votes[mostVotes]} winner={anecdotes[mostVotes]} mostVotes={mostVotes}/>
    </div>
  );
}

export default App;
