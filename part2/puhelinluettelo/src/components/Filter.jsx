const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div>
            Filter by name: <input value={filter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter