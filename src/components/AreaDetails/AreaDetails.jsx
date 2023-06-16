import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import style from './AreaDetails.module.css'
export default function AreaDetails() {

let {country} = useParams()
const[mealsCountry ,setMealsCountry ]= useState([])
  async function getcountryName()
  {
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    console.log(data.meals);
    setMealsCountry(data.meals)

  }
  
useEffect(() => {
  getcountryName()
}, [])

  return <>
    <div className='text-center text-warning'><h2>the best meals of {country}</h2></div>

  <div className="container">
    <div className="row">
      {mealsCountry.map((meal)=>
      <div className="col-md-3 gy-4">
        <Link to={`/${meal.idMeal}`} >
        <div className={`${style.inner} position-relative rounded-3 overflow-hidden`}>
          <img src={meal.strMealThumb} className='w-100' alt="mealtitle" />
          <div className='layer w-100 h-100 text-dark position-absolute start-0 d-flex align-items-center'>
            <h3>{meal.strMeal}</h3>
          </div>
        </div>
        </Link>
      </div>
      
      )}
    </div>
  </div>
  
  
  </>
  
  
}
