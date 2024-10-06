import React from 'react';

const ListaNotas = ({ notas, eliminarNota }) => {
    return (
        <div>
        {notas.map((nota, index) => (
            <div key={index} className="nota">
            <p>{nota.texto} - {nota.prioridad}</p>
            <button className='eliminar' onClick={() => eliminarNota(index)}>Eliminar</button>
            </div>
        ))}
        </div>
    );
};

export default ListaNotas;