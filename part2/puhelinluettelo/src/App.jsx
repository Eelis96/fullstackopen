import { useState, useEffect } from 'react'
import Personform from './components/Personform'
import Filter from './components/Filter'
import Persons from './components/Persons'
import noteService from './services/phonebookService'

const App = () => {
  const [persons, setPersons] = useState([])  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    noteService.getAll().then(data => {
      console.log(data)
      setPersons(data)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const personExists = persons.find(person => person.name === newName)
    if (personExists) {
      if(window.confirm(`${newName} is already in the phonebook. Woould you like to replace the old number?`)){
        const updatedPerson = { ...personExists, number: newNumber }
        noteService.update(personExists.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id === personExists.id ? returnedPerson : p))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            console.error('Error updating person:', error)
          })
          
      }
      return
    }

    noteService.create(personObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
      })
      .catch(error => {
        console.error('Error adding person:', error)
      })
    
    
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (person) => {
    if(window.confirm(`Delete ${person.name}`)) {
      noteService.remove(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
    }
  }

  const personsToShow = filterName === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filterName} handleFilterChange={(event) => setFilterName(event.target.value)} />
      <h2>Add new person</h2>
      <Personform 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={(event) => setNewName(event.target.value)} 
        newNumber={newNumber} 
        handleNumberChange={(event) => setNewNumber(event.target.value)} 
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} filter={filterName} deletePerson={deletePerson}/>
    </div>
  )

}

export default App