import React from "react";
import "./App.css";
import Header from "./Header";
import Categories from "./Categories";
import data from "./movies.json"

function App() {
  return (
    <>
      <Header />
      <Categories data={data} />
    </>
  );
}

export default App;
