import { useState } from 'react'
import Personform from './components/Personform'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    const personExists = persons.some(person => person.name === newName)
    if (personExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = filterName === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filterName} handleFilterChange={(event) => setFilterName(event.target.value)} />
      <Personform 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={(event) => setNewName(event.target.value)} 
        newNumber={newNumber} 
        handleNumberChange={(event) => setNewNumber(event.target.value)} 
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} filter={filterName}/>
    </div>
  )

}

export default App