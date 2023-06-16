import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import Sidebar from '../Sidebar/Sidebar';

export default function Home() {
  const [meals, setMeals] = useState([])

  async function getAllMeals()
  {
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    console.log(data);
    setMeals(data.meals)
  }
  useEffect(() => {
    getAllMeals()
  }, [])
  
  return <>
  {meals.length? <div className="row g-3">
  {meals.map((mealInfo , index)=>(
  <Card meal={mealInfo} key={index}/>))}
  </div> : <Loading/>}
  </>
}
