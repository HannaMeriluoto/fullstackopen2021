import React, { useState, useEffect } from 'react'

import AddPerson from './components/AddPerson'
import Persons from './components/Persons'
import Filter from './components/Filter'

import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const handleFilterChange = (event) => setNewFilter(event.target.value)
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
 
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {name: newName, number: newNumber}

      if (persons.find(person => person.name === newName)) {
        window.alert(`${newName} is already added to phonebook`) 
      } else {
        setPersons(persons.concat(personObject))
      }
  
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = 
    newFilter === setNewFilter
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange}/>

      <h2>Add a new</h2>
      <AddPerson addPerson={addPerson} newName={newName} onChangeName={handleNameChange} newNumber={newNumber} onChangeNumber={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App