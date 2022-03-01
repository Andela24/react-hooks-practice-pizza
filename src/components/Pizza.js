import React from "react";

function Pizza( {id, pizza, handleClick} ) {
// console.log(pizza.id)
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={() => handleClick(pizza.id)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
