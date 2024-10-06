import './App.css'
import React, { useState } from 'react';
import FormularioNota from './componentes/FormularioNota';
import ListaNotas from './componentes/ListaNotas';
import FiltroNotas from './componentes/FiltroNotas';

const App = () => {
  const [notas, setNotas] = useState([]);
  const [filtro, setFiltro] = useState('Todas');

  const agregarNota = (texto, prioridad) => {
    const nuevaNota = { texto, prioridad };
    setNotas([...notas, nuevaNota]);
  };

  const eliminarNota = (index) => {
    setNotas(notas.filter((_, i) => i !== index));
  };

  const notasFiltradas = notas.filter((nota) =>
    filtro === 'Todas' ? true : nota.prioridad === filtro
  );

  return (
    <div className="container">
      <h1>Notas</h1>
      <FormularioNota agregarNota={agregarNota} />
      <FiltroNotas setFiltro={setFiltro} />
      <ListaNotas notas={notasFiltradas} eliminarNota={eliminarNota} />
    </div>
  );
};

export default App;