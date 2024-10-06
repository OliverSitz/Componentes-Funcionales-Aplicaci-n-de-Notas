import React, { useState } from 'react';

const FormularioNota = ({ agregarNota }) => {
    const [texto, setTexto] = useState('');
    const [prioridad, setPrioridad] = useState('Baja');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (texto.trim() === '') return;
        agregarNota(texto, prioridad);
        setTexto('');
    };

    return (
        <form onSubmit={manejarEnvio}>
        <input
            type="text"
            placeholder="Escribe tu nota"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
        />
        <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
        </select>
        <button type="submit">Agregar Nota</button>
        </form>
    );
};

export default FormularioNota;