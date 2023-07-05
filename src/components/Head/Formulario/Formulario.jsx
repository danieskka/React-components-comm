import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext";

const Formulario = ({ actualizarForm }) => {

  const { updateUserEmail } = useContext(UserContext);
  const [newUserEmail, setUserEmail] = useState('');

  const handleInputChange = (e) => {
    setUserEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserEmail(newUserEmail);
    setUserEmail('');

    const name = e.target.name.value;
    const email = e.target.email.value;
    const url = e.target.url.value;
    const age = e.target.age.value;

    const userData = {name, email, url, age};

    actualizarForm(userData);

  }
  
  return (
  <div>
    <h3>Datos a introducir:</h3>

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label><br/>
      <input type="text" name="name" /><br/>

      <label htmlFor="email">Email</label><br/>
      <input type="text" name="email" value={newUserEmail} onChange={handleInputChange}/><br/>

      <label htmlFor="url">Image URL</label><br/>
      <input type="url" name="url"/><br/>

      <label htmlFor="age">Age</label><br/>
      <input type="number" name="age" /><br/><br/>

      <button type="submit">Send</button><br/>
    </form>
  </div>);
};

export default Formulario;
