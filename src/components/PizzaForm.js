import React from "react";

function PizzaForm( {pizza, id, setEditPizza} ) {
//lets controll form
// edit pizza
/* {

  id: 1,
  size: small,
  topping: cheese,
  vegeterian: false   // this is what's expected in return
}

*/

  const handleChange = () => {
    // whenever we want to change the form it will also change the state
    console.log('change inputs')
  };

      function handleSubmit(e) {
        e.target.preventDefault();
        
        fetch(`http://localhost:3001/pizzas/${id}`,{
          method: "PATCH",
        }) 
          .then(resp => resp.json())
          .then((newData) => console.log(newData));
        };
    

  return (
    <form onSubmit={handleSubmit /*handle that submit*/}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value = {pizza.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" 
          value={pizza.size} 
          onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={pizza.vegetarian ? "checked" : null}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={pizza.vegetarian ? null : "checked"}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
