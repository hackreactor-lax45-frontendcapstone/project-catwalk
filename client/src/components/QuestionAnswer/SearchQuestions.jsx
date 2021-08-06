import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery}) => {


  return (
    <form action="/" method="get">
      <label htmlFor="question-search">
      <span className="visually-hidden">Search questions</span>
     </label>
        <input
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value) }
        type="text"
        id="question-search"
        placeholder="Have a question? Search for answers…"
        name="s"
        />
      <button type="submit">Search</button>
    </form>
  )
};

export default SearchBar;