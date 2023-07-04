import React, { useContext } from "react";
import './Card.css';

const Card = ({ form }) => {

  return (
    <div>
      {form && (
        <div>
          <h3>Datos del usuario</h3>
          <p>Nombre: {form.name}</p>
          <p>Email: {form.email}</p>
          {<img src={form.url} />}
          <p>Age: {form.age} años</p>
        </div>
      )}
    </div>
  )
};

export default Card;
