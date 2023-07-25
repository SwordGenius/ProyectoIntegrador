import '../Styles/CorteCaja.css'
import React, { useState } from 'react';

const CorteCaja = () => {
  const [prevCantidad, setPrevCantidad] = useState(0);
  const [currCantidad, setCurrCantidad] = useState(0);
  const [diferencia, setDiferencia] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePrevCantidadChange = (e) => {
    setPrevCantidad(parseFloat(e.target.value));
  };

  const handleCurrCantidadChange = (e) => {
    setCurrCantidad(parseFloat(e.target.value));
  };

  const handleRealizarClick = () => {
    const diff = currCantidad - prevCantidad;
    setDiferencia(diff);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <button onClick={() => setModalVisible(true)}>Abrir modal</button>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal</h2>

            <label>
              Cantidad previa:
              <input type="number" value={prevCantidad} onChange={handlePrevCantidadChange} />
            </label>

            <label>
              Cantidad actual:
              <input type="number" value={currCantidad} onChange={handleCurrCantidadChange} />
            </label>

            <label>Diferencia: {diferencia}</label>

            <button onClick={handleRealizarClick}>Realizar</button>
            <button onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CorteCaja
