import React, { useState } from 'react';
import InputField from './components/InputField';
import './styles/recipe.css';

const App = () => {

  const [recipeList, setRecipeList] = useState([
    {
      id: 1,
      amount: "2",
      unit: "ea",
      ingredient: "Onions",
    },
    {
      id: 2,
      amount: "4",
      unit: "Tbsp",
      ingredient: "AP Flour",
    },
    {
      id: 3,
      amount: "1/2",
      unit: "cup(s)",
      ingredient: "Butter",
    },
    {
      id: 4,
      amount: "",
      unit: "",
      ingredient: "",
    }
  ]);

  return (
    <div className="container recipe-box">
      <div className="row my-2">
        <div className="col-12"><h2>Recipe Name</h2></div>
      </div>

      <div className="row">
        <div className="col-2 gx-1 px-2">Amount</div>
        <div className="col-2 gx-1 px-2">Unit</div>
        <div className="col-8 gx-1 px-2">Ingredient</div>
      </div>
      <InputField data={recipeList} />
      
      <div className="row pt-4">
        <div className="col-12 gx-1">Procedure</div>
      </div>
      <div className="row py-1">
        <div className="col-12 gx-1">
          <textarea className="form-control" rows="3"></textarea>
        </div>
      </div>
    </div>
  );
};

export default App;
