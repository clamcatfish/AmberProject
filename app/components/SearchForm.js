"use client";

import EntryList from "./EntryList";

const apiUrl = process.env.NEXT_PUBLIC_API_URL
const { useState, useEffect } = require("react");

const SearchForm = ({ names }) => {
  console.log(names)
  const [tags, setTags] = useState("");
//   const { entries } = entries;
  const [filteredEntries, setFilteredEntries] = useState([]);

  const handleChange = (e) => {
    setTags(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault;
  };

  useEffect(() => {
    if (names.length > 0) {
        const fetchData = async () => {
        const query = names
            .map((genre) => `tags=${encodeURIComponent(genre.trim())}`)
            .join("&");
        const response = await fetch(`${apiUrl}/api/entries/tags?${query}`, {
            cache: "no-store",
        });
        // if (!response.ok) {
        //     throw new Error("Failed to fetch books");
        // }
        const data = await response.json();
        setFilteredEntries(data);
        };
        fetchData();
    }
  }, [names]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="tags"
          value={tags}
          onChange={handleChange}
          placeholder="Enter a tag"
        />
      </form>
      {error && <p className="text-red-600">{error}</p>} */}
      {/* <div className="flex flex-col justify-center items-center"> */}

        <EntryList entries={filteredEntries} />
      {/* </div> */}
    </div>
  );
};

export default SearchForm;
