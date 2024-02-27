const Filter = ({filter, onFilterChange}) => {
    return (
      <div>
        Show countries beginning with letters:
        <input 
          value={filter}
          onChange={onFilterChange}/>
      </div>
    )
  }

  export default Filter;