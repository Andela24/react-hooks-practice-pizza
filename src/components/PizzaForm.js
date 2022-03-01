import React from "react";

function PizzaForm( {pizza, id, topping, size, vegetarian, setEditPizza} ) {
 
//lets controll form
// edit pizza
/* {

  id: 1,
  size: small,
  topping: cheese,
  vegeterian: false   // this is what's expected in return
}

*/

  const handleChange = (e) => {
    // whenever we want to change the form it will also change the state

    setEditPizza((prevPizza) => {
      console.log(prevPizza)
      return {
        ...prevPizza,   //spread out the key that we can maintain the other keys
        [e.target.name]: e.target.value
      }
    }) // set the state ASYNC
  };

      function handleSubmit(e) {
        e.preventDefault();
      
        fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pizza),
        })
          .then((resp) => resp.json())
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
            value = {topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" 
          value={size} 
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
              checked={vegetarian ? "checked" : null}
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
              checked={vegetarian ? null : "checked"}
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
