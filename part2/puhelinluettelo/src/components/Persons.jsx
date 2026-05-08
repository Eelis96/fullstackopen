const Persons = ({ persons, filter, deletePerson }) => {
    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            {personsToShow.map(person => 
                <h4 key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person)} >Delete</button></h4>
            )}
        </div>
    )
}

export default Persons