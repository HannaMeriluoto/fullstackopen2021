import React, { useState } from 'react'

const Headline = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ g, n, b, all }) => {
  if (all.length === 0) {
    return (<div>No feedback given</div>)
  }
  return (
    <table>
      <tbody>
        <StatisticLine index={1} text='Good' value={g} text2='votes'/>
        <StatisticLine index={2}  text='Neutral' value={n} text2='votes'/> 
        <StatisticLine index={3}  text='Bad' value={b} text2='votes'/>
        <StatisticLine index={4}  text='All' value={all.length} text2='votes'/>
        <StatisticLine index={5}  text='Average' value={((g-b) /all.length).toFixed(1)} text2='points'/>
        <StatisticLine index={6}  text='Positive' value={((g/all.length)*100).toFixed(1)} text2='%' />
    </tbody>
  </table>)
}
const StatisticLine = ({ index, text, value, text2 }) => <tr key={index}><td>{text}</td><td>{value}</td><td>{text2}</td></tr>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allPoints, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allPoints.concat(1))
    setGood(good +1)
  }
  const handleNeutralClick = () => {
    setAll(allPoints.concat(0))
    setNeutral(neutral +1)
  }
  const handleBadClick = () => {
    setAll(allPoints.concat(-1))
    setBad(bad +1)
  }

  return (
    <div>
        <Headline text='Give feedback' />
        <Button handleClick = {handleGoodClick} text='good' />
        <Button handleClick = {handleNeutralClick} text='neutral' />
        <Button handleClick = {handleBadClick} text='bad' />
        <Headline text='Statistics' />
        <Statistics g={good} n={neutral} b={bad} all={allPoints}/>   
    </div>
  );
}

export default App;
