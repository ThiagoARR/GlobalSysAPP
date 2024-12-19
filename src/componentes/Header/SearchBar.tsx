import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex-1 px-4">
      <input
        type="search"
        placeholder="Search"
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;