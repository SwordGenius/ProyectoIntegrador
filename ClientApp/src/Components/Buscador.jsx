import React, { useState } from 'react';

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer algo con el término de búsqueda, como enviarlo a un backend o realizar una búsqueda local.
    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Buscar..." />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Buscador;
