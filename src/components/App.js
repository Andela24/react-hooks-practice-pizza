import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const[pizzas, setPizzas]= useState([])
  const [editPizza, setEditPizza] = useState([])

  //once component mount do this inside the use effect
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then((resp) => resp.json()) //parse json
    .then((pizzaData) => setPizzas(pizzaData))
  }, []);
  // console.log(pizzas)

  const handleEditButtonClick = (sentId) => {
    // console.log("clicked", {id} )
   const foundPizza= pizzas.find(p => p.id === sentId) //every time we click on edit we want to be able to change it
   setEditPizza(foundPizza);
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={editPizza} setEditPizza={setEditPizza}/>
      <PizzaList pizzas={pizzas} handleClick={handleEditButtonClick}/>
    </>
  );
}

export default App;
