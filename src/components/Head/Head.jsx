import React, { useContext, useState } from "react";
import Formulario from "./Formulario/Formulario";
import Card from "./Card/Card";

import { UserContext } from "../../context/userContext";

const Head = () => {
  
  const { userEmail } = useContext(UserContext);

  const [form, setForm] = useState({});

  const actualizarForm = (userData) => {
    setForm(userData);
  }

  
  return (
        
        <div>
          <h2>User Email</h2>
          <p>{userEmail}</p>
          <Formulario actualizarForm={actualizarForm} />
          <Card form={form} />
        </div>
  
  );
};

export default Head;
