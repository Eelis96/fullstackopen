const Persons = ({ persons, filter }) => {
    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            {personsToShow.map(person => 
                <h4 key={person.id}>{person.name} {person.number}</h4>
            )}
        </div>
    )
}

export default Persons