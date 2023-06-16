import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

export default function Search() {
const [mealBySearch, setMealBySearch] = useState([])
  async function getMealByName(term)
  {
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    console.log(data.meals);
     term && setMealBySearch(data.meals)
  }

  useEffect(() => {
    getMealByName()
  }, [])
  
  return <>
    <h2>Search</h2>
    <div className="container">
      <div className="row py-4">

        <div className="col-md-6 py-2">
          <input
           placeholder='search meal by name'
           className='form-control'
           type="text"
           onChange={(e)=>{
            getMealByName(e.target.value);

           }}
      
           />
          
        </div>

        <div className="col-md-6 py-2">
        <input 
        placeholder='search meal by letter' 
        className='form-control' 
        type="text" />

        </div>

        <div className="row">
           {!mealBySearch.length ?(<h2>meals not found</h2>):

           
          mealBySearch.map((meal,index)=>

          <Card meal={meal} key={index}/>
          ) }
          

        </div>

      </div>
    </div>
  
  </>

}
