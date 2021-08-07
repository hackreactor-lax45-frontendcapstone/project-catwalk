import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery}) => {


  return (
    <form>
      <label htmlFor="question-search">
     </label>
        <input
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value) }
        type="text"
        id="question-search"
        placeholder="Have a question? Search for answers…"
        name="s"
        />
    </form>
  )
};

export default SearchBar;