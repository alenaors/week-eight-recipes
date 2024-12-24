
import { useEffect } from 'react';
import './App.css';

function App() {
  const MY_ID = "3bce2503";
  const MY_KEY = "f2019d913cf9b2cbcfc54b2cf7dfe457";

  useEffect (()=> {
    const getRecipes = async ()=> {
      const response = await fetch ('https://api.edamam.com/api/recipes/v2?type=public&q=avokado&app_id=3bce2503&app_key=f2019d913cf9b2cbcfc54b2cf7dfe457');
      const data = await response.json();
      console.log(data);
    }
    getRecipes()
  },[])


  return (
    <div className="App">
      <p>Recipes</p>
    </div>
  );
}

export default App;
