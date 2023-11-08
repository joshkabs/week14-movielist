import React, { useState } from 'react';

function AddAMovie({ setMovies }) {
  let [movieObj, setMovieObj] = useState({});

  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    setMovieObj(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMovies(prev => [...prev, movieObj]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />{' '}
        <input
          type="text"
          onChange={handleChange}
          name="image"
          placeholder="Image"
        />
        <input
          type="text"
          onChange={handleChange}
          name="rate"
          placeholder="Rate"
        />
        <input
          type="text"
          onChange={handleChange}
          name="synopsis"
          placeholder="Synopsis"
        />
        <button type="submit">Add a movie!</button>
      </form>
    </div>
  );
}

export default AddAMovie;
