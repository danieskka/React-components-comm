import React from "react";
import { Routes, Route } from "react-router-dom";
import Head from "../Head/Head";

const Main = () => {
  return <main>
    <Routes>
      <Route path ="/" element={<Head/>} />
    </Routes>
  </main>
};

export default Main;
