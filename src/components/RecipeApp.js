import React, { useState } from 'react';
import axios from 'axios';
import Myrecipe from './Myrecipe';



const RecipeApp = () => {
  const [val, setval] = useState('');
  const [recipes, setrecipes] = useState([]);
  const YOUR_APP_ID = '29fe57c6';
  const YOUR_APP_KEY = '65aa3630bf41d8fbfa83d3322c88a1c5';
  var url = `https://api.edamam.com/search?q=${val}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;
  const getRecipe = async () => {
    var result = await axios.get(url);
    setrecipes(result.data.hits);
    
  }
  function inputevent(e) {

    setval(e.target.value);

  };
  const submit = (e) => {
    e.preventDefault();
    getRecipe();

  };
  return (
    <>
      <center>
        <div className="container-fluid">
        <div className='bg-text'>
          <h1>recipe app 🍔</h1>
          <form onSubmit={submit}>

            <input  type='text' placeholder='Search your Recipe...' className='txt' name='recipename' value={val} onChange={inputevent} />
            <input type='submit' value='search' />

           
           
          
        </form>
        </div>
        </div>
      <div className='row'>
      <p>Get Results for your favroite recipes....📂😄</p>
      
        {
          recipes.map((res) => {
            return (
              <>
            

                <Myrecipe
                  image={res.recipe.image}
                  title={res.recipe.label}
                  link={res.recipe.url}
                />


              </>
            )
          })
        }
      </div>
    </center>
        </>
  )
}






export default RecipeApp;
// "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

