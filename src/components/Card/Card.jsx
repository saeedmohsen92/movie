import React, { useEffect, useState } from 'react'
import style from './Card.module.css'
// import cardImg from '../../assets/logo.png'
import axios from 'axios'
import { Link } from 'react-router-dom'






export default function Card({ meal, index }) {

  // const [meals, setMeals] = useState([])

  // async function getAllMeals()
  // {
  //   let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  //   console.log(data);
  //   setMeals(data.meals)
  // }

  // useEffect(() => {

  //   getAllMeals()

  // }, [])

  return <>
    {/* {meals.map((meal)=> */}
      <div className={`${style.meal} col-md-3`}>
      <Link to={`/${meal?.idMeal}`} >
        <div className={`${style.inner} position-relative rounded-3 overflow-hidden`}>
          <img src={meal.strMealThumb} className='w-100' alt="mealtitle" />
          <div className='layer w-100 h-100 text-dark position-absolute start-0 d-flex align-items-center'>
            <h3>{meal.strMeal}</h3>
          </div>
        </div>
        </Link>

      </div>




    {/* )} */}



  </>
}
