import React, { useContext, useState } from "react";
import Formulario from "./Formulario/Formulario";
import Card from "./Card/Card";

import { UserContext } from "../../context/userContext";

const Head = () => {
  
  // No entiendo porque no funcionaba con "useremail"
  const { userEmail } = useContext(UserContext);

  const [form, setForm] = useState('');

  
  return (
        
        <div>
          <h2>User Email</h2>
          <p>{userEmail}</p>
          <Formulario setForm={setForm} />
          <Card form={form} />
        </div>
  
  );
};

export default Head;
