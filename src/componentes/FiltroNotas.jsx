import React from 'react';

const FiltroNotas = ({ setFiltro }) => {
    return (
        <div>
        <select onChange={(e) => setFiltro(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
        </select>
        </div>
    );
};

export default FiltroNotas;