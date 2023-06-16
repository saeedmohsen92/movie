import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import style from './CategoryDetails.module.css'
export default function CategoryDetails() {
let {categoryMeal} = useParams()
const [mealCategoryName, setmealCategoryName] = useState([])
async function getOneCategory()
{
  let { data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryMeal}`)

  console.log(data);
  setmealCategoryName(data.meals)
}

useEffect(() => {
  getOneCategory()
}, [])


  return <>
{!mealCategoryName.length?(<Loading/>):
 <div className="container">
 <div className="row">
{mealCategoryName.map((categoryName)=>





<div className="col-md-3 gy-4">
<Link to={`/${categoryName.idMeal}`} >
<div className={`${style.inner} position-relative rounded-3 overflow-hidden`}>
  <img src={categoryName.strMealThumb} className='w-100' alt="mealtitle" />
  <div className='layer w-100 h-100 text-dark position-absolute start-0 d-flex align-items-center'>
    <h3>{categoryName.strMeal}</h3>
  </div>
</div>
</Link>
</div>

)}
 </div>
</div>

}
 
  </>
}
